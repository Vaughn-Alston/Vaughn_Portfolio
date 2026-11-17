import { connection, NextResponse } from "next/server";
import {
  PORTFOLIO_TIME_ZONE,
  splitTime,
  type NormalizedTime,
} from "@/app/lib/time";

const TIMEZONE_API_URL =
  "https://api.timezone.io/v1/timezones/America/Los_Angeles";

type TimezoneApiResponse = {
  data?: {
    current?: {
      datetime?: string;
    };
  };
};

function fallbackTime(diagnostic: string): NormalizedTime {
  const now = new Date();

  return {
    iso: now.toISOString(),
    timeZone: PORTFOLIO_TIME_ZONE,
    ...splitTime(now),
    source: "fallback",
    diagnostic,
  };
}

export async function GET() {
  await connection();
  const token = process.env.TIMEZONE_API_TOKEN?.trim();

  if (!token) {
    return NextResponse.json(
      fallbackTime("TIMEZONE_API_TOKEN is not configured"),
    );
  }

  try {
    const response = await fetch(TIMEZONE_API_URL, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `timezone.io request failed with ${response.status} ${response.statusText}`,
      );

      return NextResponse.json(
        fallbackTime(`Time service returned ${response.status}`),
      );
    }

    const payload = (await response.json()) as TimezoneApiResponse;
    const currentDatetime = payload.data?.current?.datetime;

    if (!currentDatetime) {
      return NextResponse.json(
        fallbackTime("Time service response did not include data.current.datetime"),
      );
    }

    const current = new Date(currentDatetime);

    return NextResponse.json({
      iso: current.toISOString(),
      timeZone: PORTFOLIO_TIME_ZONE,
      ...splitTime(current),
      source: "api",
    } satisfies NormalizedTime);
  } catch (error) {
    console.error("Unable to reach timezone.io", error);
    return NextResponse.json(fallbackTime("Time service is unreachable"));
  }
}
