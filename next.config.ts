import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bundle a locally-provided guide PDF (if present) with the download route
  // so it can be read at runtime. In production the file is served from
  // WORKBOOK_FILE_URL instead, so this is only a dev/self-host convenience.
  outputFileTracingIncludes: {
    "/api/download": ["./content/**"],
  },
};

export default nextConfig;
