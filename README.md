# About Time Creamery + The Stuffed Potato Truck

Mobile-first website for two Jacksonville/St Augustine food truck concepts
operating together as “two cravings, one ride.”

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Google Calendar

The truck schedule supports the client’s Google Calendar embed. Set:

```bash
NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL="https://calendar.google.com/calendar/embed?..."
```

Without the variable, the schedule page shows a clearly labeled
connection-ready state and does not invent event dates.

## Client content still needed

- Current menu images/PDFs or replacement food photography
- The actual Google Calendar embed URL
- Confirmation and source content for the Food Truck Workbook page

Do not invent menu prices, workbook content, events, or business claims when
replacing these items.
