export function getSiteUrl(canonicalOverride?: string | null): string {
  const candidates = [
    canonicalOverride,
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_ENV === "production"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL
      : undefined,
    process.env.VERCEL_URL,
  ];

  for (const value of candidates) {
    const normalized = normalizeUrl(value);
    if (normalized) return normalized;
  }

  return "http://localhost:3000";
}

function normalizeUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim().replace(/\/$/, "");
  if (!trimmed) return null;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}
