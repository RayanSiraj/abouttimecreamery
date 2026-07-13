import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Cristie and Keith and learn how About Time Creamery and The Stuffed Potato Truck became two cravings, one ride.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <header className="interior-hero interior-hero--pink">
        <p className="utility-label">Cristie + Keith</p>
        <h1>Who we are</h1>
        <p>
          Good food, hard work, and community brought two cravings under one
          roof.
        </p>
      </header>

      <section className="story-section" aria-label="Our story">
        <div className="story-grid">
          <div className="story-copy">
            <p>
              Cristie is the heart and hustle behind the truck, the one
              you&apos;ll find serving up loaded potatoes and handcrafted ice
              cream with a smile. Keith steps in when needed, lending support
              behind the scenes and on the road when things get busy. Together,
              they&apos;ve built something that reflects their shared love of
              good food, hard work, and community.
            </p>
            <p>
              They started with About Time Creamery, bringing small-batch ice
              cream to local events across North Florida. Before long, they saw
              an opportunity to add something savory to the mix, creating The
              Stuffed Potato Truck to offer a meal that matched the same
              comfort and creativity as their desserts.
            </p>
            <p>
              Now both concepts roll together as two cravings, one ride — a
              combination that&apos;s become a local favorite for festivals,
              corporate events, and celebrations of all kinds. What began as a
              small idea has grown into something that feeds both people and
              purpose, finally saying it&apos;s about time to chase what matters
              most.
            </p>
          </div>

          <aside className="story-sign" aria-label="Two cravings, one ride">
            <div className="story-sign__sweet">
              <span className="utility-label">First came</span>
              <strong>About Time Creamery</strong>
            </div>
            <div className="story-sign__road" aria-hidden="true">
              <span />
            </div>
            <div className="story-sign__savory">
              <span className="utility-label">Then came</span>
              <strong>The Stuffed Potato Truck</strong>
            </div>
            <p>Two cravings, one ride</p>
          </aside>
        </div>
      </section>

      <section className="callout-band callout-band--blue">
        <div>
          <p className="utility-label">Bring us your date</p>
          <h2>
            Ready to book us for your next event? Tell us a few details and
            we&apos;ll get right back to you!
          </h2>
        </div>
        <Link className="button button--gold" href="/contact">
          Start planning
          <ArrowUpRightIcon className="size-5" />
        </Link>
      </section>
    </main>
  );
}
