import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

const DEFAULT_CALENDAR_URL =
  "https://calendar.google.com/calendar/embed?src=abouttimecreamery%40gmail.com&ctz=America%2FNew_York&mode=AGENDA&showTitle=0&showPrint=0&showCalendars=0&showTz=0";

const calendarUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL ?? DEFAULT_CALENDAR_URL;
const hasCalendar = calendarUrl.startsWith("https://calendar.google.com/");

export function CalendarEmbed() {
  if (hasCalendar) {
    return (
      <div className="calendar-frame">
        <iframe
          src={calendarUrl}
          title="About Time Creamery and The Stuffed Potato Truck event calendar"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="calendar-placeholder">
      <div className="calendar-placeholder__top">
        <span className="utility-label">Calendar connection ready</span>
        <span aria-hidden="true">Live schedule</span>
      </div>
      <div className="calendar-placeholder__body">
        <div className="calendar-placeholder__date" aria-hidden="true">
          <span>Next</span>
          <strong>Stop</strong>
        </div>
        <div>
          <h2>Public event dates will appear here.</h2>
          <p>
            The client&apos;s Google Calendar can be connected without changing
            this page layout.
          </p>
          <Link className="text-link" href="/contact">
            Ask about a date
            <ArrowUpRightIcon className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
