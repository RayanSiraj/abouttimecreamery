import type { Metadata } from "next";
import Link from "next/link";
import { CateringPackages } from "@/components/catering-packages";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Catering packages from About Time Creamery and The Stuffed Potato Truck for festivals, corporate events, and celebrations.",
};

export default function CateringPage() {
  return (
    <main id="main-content">
      <header className="interior-hero interior-hero--green">
        <p className="utility-label">Sweet, savory, or both</p>
        <h1>Let&apos;s Cater Your Next Event</h1>
        <p>
          Pick the menu that fits your crowd, then send the date, location, and
          guest details.
        </p>
      </header>

      <section
        className="catering-page"
        aria-labelledby="catering-packages-heading"
      >
        <h2 className="sr-only" id="catering-packages-heading">
          Catering packages
        </h2>
        <CateringPackages />
        <div className="catering-note">
          <p className="utility-label">Good to know</p>
          <p>
            Final pricing is subject to guest count. Tax and gratuity are added
            to each starting price.
          </p>
        </div>
      </section>

      <section className="callout-band callout-band--pink">
        <div>
          <p className="utility-label">Tell us about your event</p>
          <h2>
            Share a few details and we&apos;ll get right back to you.
          </h2>
        </div>
        <Link className="button button--paper" href="/contact">
          Request catering
          <ArrowUpRightIcon className="size-5" />
        </Link>
      </section>
    </main>
  );
}
