import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Food Truck Start-Up Guide",
  description: "Visit the checkout page for the Food Truck Start-Up Guide.",
};

export default function FoodTruckWorkbookPage() {
  return (
    <main id="main-content">
      <header className="interior-hero interior-hero--blue">
        <p className="utility-label">Food truck resource</p>
        <h1>Food Truck Start-Up Guide</h1>
        <p>
          Continue to the external checkout page for the start-up guide.
        </p>
      </header>

      <section className="workbook-section">
        <div className="workbook-state">
          <div className="workbook-state__binding" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="workbook-state__content">
            <p className="utility-label">Start-up guide</p>
            <h2>Food Truck Start-Up Guide</h2>
            <p>
              Use the verified external checkout page to get the start-up
              guide.
            </p>
            <a
              className="button button--gold"
              href="https://www.abouttimecreameryjax.com/checkout?cartToken=gb7-USBTVbRBBX1RTNHoWP1FNFCLzLSKMYKyDqrn"
              rel="noreferrer"
              target="_blank"
            >
              Open guide checkout
              <ArrowUpRightIcon className="size-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
