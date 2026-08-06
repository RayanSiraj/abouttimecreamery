import type { Metadata } from "next";
import Stripe from "stripe";
import { ArrowUpRightIcon, LockIcon, MailIcon } from "@/components/icons";
import {
  DOWNLOAD_TTL_SECONDS,
  createDownloadToken,
} from "@/lib/workbook-download";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Food Truck Start-Up Guide",
  description:
    "Buy the Food Truck Start-Up Guide and download it instantly after checkout.",
};

const paymentsEnabled = Boolean(
  process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID,
);

type SearchParams = Promise<{ session_id?: string; purchase?: string }>;

/**
 * After Stripe redirects back with a session id, confirm the payment
 * server-side before minting a download link. Returns a signed token only for
 * a genuinely paid session.
 */
async function tokenForPaidSession(sessionId: string): Promise<string | null> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return null;

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") return null;

    return createDownloadToken({
      exp: Math.floor(Date.now() / 1000) + DOWNLOAD_TTL_SECONDS,
      sid: session.id,
    });
  } catch {
    return null;
  }
}

export default async function FoodTruckWorkbookPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { session_id: sessionId, purchase } = await searchParams;
  const downloadToken = sessionId ? await tokenForPaidSession(sessionId) : null;

  return (
    <main id="main-content">
      <header className="interior-hero interior-hero--blue">
        <p className="utility-label">Food truck resource</p>
        <h1>Food Truck Start-Up Guide</h1>
        <p>
          Everything we wish we&apos;d had when we started our trailer. Buy once
          and download it right away.
        </p>
      </header>

      <section className="workbook-section">
        {downloadToken ? (
          <p className="form-status form-status--success" role="status">
            Payment received — your download is ready below. The link works for
            72 hours.
          </p>
        ) : null}
        {sessionId && !downloadToken ? (
          <p className="form-status form-status--error" role="status">
            We couldn&apos;t confirm that payment. If you were charged, email
            Abouttimecreamery@gmail.com and we&apos;ll send your guide.
          </p>
        ) : null}
        {purchase === "cancelled" ? (
          <p className="form-status form-status--error" role="status">
            Checkout was cancelled. You have not been charged.
          </p>
        ) : null}

        <div className="workbook-state">
          <div className="workbook-state__binding" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="workbook-state__content">
            <p className="utility-label">Digital download</p>
            <h2>Food Truck Start-Up Guide</h2>
            <p>
              A practical PDF guide to getting a Northeast Florida food truck off
              the ground. Secure checkout through Stripe, then download the guide
              instantly.
            </p>

            <ul className="workbook-perks">
              <li>
                <MailIcon className="size-5" />
                Instant download the moment payment clears
              </li>
              <li>
                <LockIcon className="size-5" />
                Secure Stripe checkout — we never see your card details
              </li>
            </ul>

            {downloadToken ? (
              <a
                className="button button--gold"
                href={`/api/download?token=${downloadToken}`}
              >
                Download the guide
                <ArrowUpRightIcon className="size-5" />
              </a>
            ) : paymentsEnabled ? (
              <form method="post" action="/api/checkout">
                <button className="button button--gold" type="submit">
                  Buy the guide
                  <LockIcon className="size-5" />
                </button>
              </form>
            ) : (
              <p className="form-status" role="status">
                The guide isn&apos;t available for purchase just yet — check back
                soon.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
