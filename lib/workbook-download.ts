import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Signed, time-limited download tokens for the paid Food Truck Start-Up Guide.
 *
 * A token is `base64url(payload).base64url(hmac)` where payload is JSON
 * `{ exp: <unix seconds>, sid: <stripe session id> }`. The link we email points
 * at our own `/api/download` route, so the private file location is never
 * exposed and the link stops working after `exp`.
 */

export type DownloadClaims = {
  /** Expiry as unix seconds. */
  exp: number;
  /** Stripe Checkout Session id the link was issued for. */
  sid: string;
};

function b64url(input: Buffer | string): string {
  return Buffer.from(input).toString("base64url");
}

function signingSecret(): string {
  const secret = process.env.DOWNLOAD_SIGNING_SECRET;
  if (!secret) {
    throw new Error("DOWNLOAD_SIGNING_SECRET is not configured");
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", signingSecret()).update(payload).digest("base64url");
}

export function createDownloadToken(claims: DownloadClaims): string {
  const payload = b64url(JSON.stringify(claims));
  return `${payload}.${sign(payload)}`;
}

export function verifyDownloadToken(token: string | null): DownloadClaims | null {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payload, signature] = parts;

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  let claims: DownloadClaims;
  try {
    claims = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  } catch {
    return null;
  }

  if (typeof claims.exp !== "number" || Date.now() / 1000 > claims.exp) {
    return null;
  }
  return claims;
}

/** How long an emailed download link stays valid. */
export const DOWNLOAD_TTL_SECONDS = 72 * 60 * 60;

export const DOWNLOAD_FILENAME = "ne-florida-food-truck-start-up-guide.pdf";
