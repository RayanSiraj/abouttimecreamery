import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Food Truck Workbook",
  description:
    "Food Truck Workbook content pending confirmation from About Time Creamery and The Stuffed Potato Truck.",
};

export default function FoodTruckWorkbookPage() {
  return (
    <main id="main-content">
      <header className="interior-hero interior-hero--blue">
        <p className="utility-label">Client confirmation needed</p>
        <h1>Food Truck Workbook</h1>
        <p>
          This page is held in the current site structure while its source
          content is confirmed.
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
            <p className="utility-label">Before launch</p>
            <h2>We need the original workbook source.</h2>
            <p>
              The current site&apos;s content was not text-readable when pulled
              and may be a PDF or embedded document. The client should confirm
              what belongs here before launch.
            </p>
            <ul>
              <li>Confirm the purpose and title of the workbook.</li>
              <li>Provide the current PDF, embed, or source document.</li>
              <li>Approve an accessible web or downloadable version.</li>
            </ul>
            <Link className="button button--gold" href="/contact">
              Contact the truck
              <ArrowUpRightIcon className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
