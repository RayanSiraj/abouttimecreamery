import type { Metadata } from "next";
import { CalendarEmbed } from "@/components/calendar-embed";

export const metadata: Metadata = {
  title: "Truck Schedule",
  description:
    "Find upcoming public events for About Time Creamery and The Stuffed Potato Truck in Jacksonville and St Augustine, Florida.",
};

export default function TruckSchedulePage() {
  return (
    <main id="main-content">
      <header className="interior-hero interior-hero--gold">
        <p className="utility-label">Find the truck</p>
        <h1>Upcoming events.</h1>
        <p>
          Check the calendar for the next public stop around Jacksonville and
          St Augustine.
        </p>
      </header>
      <section className="schedule-section" aria-label="Event calendar">
        <CalendarEmbed />
      </section>
    </main>
  );
}
