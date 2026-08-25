import { NextResponse, type NextRequest } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  DOWNLOAD_FILENAME,
  verifyDownloadToken,
} from "@/lib/workbook-download";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Reads the guide PDF from private storage.
 * - In production, set WORKBOOK_FILE_URL to a private file URL (e.g. Vercel
 *   Blob / S3). We fetch it server-side so the real location is never exposed.
 * - For local dev, drop the file at `content/workbook.pdf` (git-ignored).
 */
async function loadGuideFile(): Promise<Buffer | null> {
  const fileUrl = process.env.WORKBOOK_FILE_URL;
  if (fileUrl) {
    const res = await fetch(fileUrl, { cache: "no-store" });
    if (!res.ok) return null;
    return Buffer.from(await res.arrayBuffer());
  }

  try {
    return await readFile(path.join(process.cwd(), "content", "workbook.pdf"));
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const claims = verifyDownloadToken(request.nextUrl.searchParams.get("token"));
  if (!claims) {
    return NextResponse.json(
      { error: "This download link is invalid or has expired." },
      { status: 403 },
    );
  }

  const file = await loadGuideFile();
  if (!file) {
    return NextResponse.json(
      { error: "The guide file is not available yet." },
      { status: 503 },
    );
  }

  return new NextResponse(new Uint8Array(file), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${DOWNLOAD_FILENAME}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
