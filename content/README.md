# Private product files

Drop the paid **Food Truck Start-Up Guide** here as `workbook.pdf` for local
development. PDFs in this folder are git-ignored and never committed.

In production, do not rely on this file. Instead upload the guide to private
storage (Vercel Blob / S3) and set `WORKBOOK_FILE_URL` to its private URL — the
`/api/download` route fetches it server-side so the real location is never
exposed to buyers.
