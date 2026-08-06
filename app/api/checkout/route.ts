import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function siteOrigin(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  return request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!secretKey || !priceId) {
    return NextResponse.json(
      { error: "Payments are not configured yet." },
      { status: 503 },
    );
  }

  const stripe = new Stripe(secretKey);
  const origin = siteOrigin(request);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/food-truck-workbook?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/food-truck-workbook?purchase=cancelled`,
      // Ask Stripe to collect the buyer's email so the webhook can deliver the guide.
      customer_creation: "always",
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Could not start checkout." },
        { status: 502 },
      );
    }

    // Plain form POST -> redirect the browser straight to Stripe Checkout.
    return NextResponse.redirect(session.url, { status: 303 });
  } catch {
    return NextResponse.json(
      { error: "Could not start checkout." },
      { status: 502 },
    );
  }
}
