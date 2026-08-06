import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import {
  DOWNLOAD_TTL_SECONDS,
  createDownloadToken,
} from "@/lib/workbook-download";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function siteOrigin(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  return request.nextUrl.origin;
}

async function sendGuideEmail(to: string, downloadUrl: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.WORKBOOK_FROM_EMAIL;
  if (!apiKey || !from) {
    throw new Error("Email delivery is not configured");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: "Your Food Truck Start-Up Guide",
    text: [
      "Thanks for your purchase!",
      "",
      "Download your Food Truck Start-Up Guide here (link expires in 72 hours):",
      downloadUrl,
      "",
      "If the link expires, reply to this email and we'll send a fresh one.",
      "",
      "— About Time Creamery & The Stuffed Potato Truck",
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey || !webhookSecret) {
    return NextResponse.json(
      { error: "Webhook is not configured." },
      { status: 503 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      rawBody,
      signature,
      webhookSecret,
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email =
      session.customer_details?.email ?? session.customer_email ?? null;

    if (!email) {
      // Nothing to deliver to; acknowledge so Stripe stops retrying.
      return NextResponse.json({ received: true, delivered: false });
    }

    const token = createDownloadToken({
      exp: Math.floor(Date.now() / 1000) + DOWNLOAD_TTL_SECONDS,
      sid: session.id,
    });
    const downloadUrl = `${siteOrigin(request)}/api/download?token=${token}`;

    try {
      await sendGuideEmail(email, downloadUrl);
    } catch {
      // Signal failure so Stripe retries delivery.
      return NextResponse.json(
        { error: "Failed to send guide email." },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ received: true });
}
