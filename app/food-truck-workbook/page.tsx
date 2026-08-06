import type { Metadata } from "next";
import { LockIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Food Truck Start-Up Guide",
  description:
    "Buy the Food Truck Start-Up Guide and get an instant download link by email.",
};

const paymentsEnabled = Boolean(
  process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID,
);

type SearchParams = Promise<{ purchase?: string }>;

export default async function FoodTruckWorkbookPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { purchase } = await searchParams;

  return (
    <main id="main-content">
      <header className="interior-hero interior-hero--blue">
        <p className="utility-label">Food truck resource</p>
        <h1>Food Truck Start-Up Guide</h1>
        <p>
          Everything we wish we&apos;d had when we started our trailer. Buy once
          and we email your download link right away.
        </p>
      </header>

      <section className="workbook-section">
        {purchase === "success" ? (
          <p className="form-status form-status--success" role="status">
            Payment received — check your email for the download link. It can
            take a minute to arrive.
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
              the ground. Secure checkout through Stripe; your personal download
              link is emailed the moment payment clears.
            </p>

            <ul className="workbook-perks">
              <li>
                <MailIcon className="size-5" />
                Instant delivery to your inbox after purchase
              </li>
              <li>
                <LockIcon className="size-5" />
                Secure Stripe checkout — we never see your card details
              </li>
            </ul>

            {paymentsEnabled ? (
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
