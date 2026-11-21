import "server-only";

export async function fetchTime(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.timezone.io/v1/timezones/America/Los_Angeles",
      {
        headers: { Authorization: `Bearer ${process.env.TIMEZONE_API_TOKEN}` },
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data.data?.current?.datetime ?? null;
  } catch {
    return null;
  }
}
