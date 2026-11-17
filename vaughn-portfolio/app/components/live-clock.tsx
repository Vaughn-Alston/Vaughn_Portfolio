"use client";

import { useCallback, useEffect, useState } from "react";
import {
  PORTFOLIO_TIME_ZONE,
  splitTime,
  type NormalizedTime,
} from "@/app/lib/time";

type ClockState = {
  now: Date;
  source: NormalizedTime["source"];
  diagnostic?: string;
};

// Formats the calendar date in Vaughn's Los Angeles time zone.
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: PORTFOLIO_TIME_ZONE,
  weekday: "short",
  month: "short",
  day: "numeric",
});

export default function LiveClock() {
  const [clock, setClock] = useState<ClockState | null>(null);

  // Sync with the server route while keeping a browser-clock fallback.
  const syncClock = useCallback(async () => {
    try {
      const response = await fetch("/api/time", { cache: "no-store" });
      if (!response.ok) throw new Error(`Clock request failed: ${response.status}`);

      const data = (await response.json()) as NormalizedTime;
      setClock({
        now: new Date(data.iso),
        source: data.source,
        diagnostic: data.diagnostic,
      });
    } catch {
      setClock({
        now: new Date(),
        source: "fallback",
        diagnostic: "Using browser clock",
      });
    }
  }, []);

  // Show a local value immediately, then refresh it from the API.
  useEffect(() => {
    const initialSync = window.setTimeout(() => {
      setClock({
        now: new Date(),
        source: "fallback",
        diagnostic: "Checking time service",
      });
      void syncClock();
    }, 0);
    const resync = window.setInterval(syncClock, 5 * 60 * 1000);
    return () => {
      window.clearTimeout(initialSync);
      window.clearInterval(resync);
    };
  }, [syncClock]);

  // Advance the displayed clock without requesting the API every second.
  useEffect(() => {
    const tick = window.setInterval(() => {
      setClock((current) => ({
        ...(current ?? {
          source: "fallback" as const,
          diagnostic: "Using browser clock",
        }),
        now: current ? new Date(current.now.getTime() + 1000) : new Date(),
      }));
    }, 1000);

    return () => window.clearInterval(tick);
  }, []);

  if (!clock) {
    return (
      <section className="clock-card" aria-label="Vaughn's local time">
        {/* Clock label */}
        <div className="clock-heading">
          <span className="status-dot" aria-hidden="true" />
          <span>Local time</span>
          <span className="clock-zone">PT</span>
        </div>
        {/* Initial time placeholder */}
        <p className="clock-time" aria-live="off">
          <span>--</span>
          <span className="clock-colon">:</span>
          <span>--</span>
        </p>
        {/* Time-zone metadata */}
        <div className="clock-meta">
          <span>Los Angeles</span>
          <span>Local clock</span>
        </div>
        {/* Contact details */}
        <div className="clock-contact">
          <span>Contact</span>
          <a href="mailto:Vaughnalston383@gmail.com">Vaughnalston383@gmail.com</a>
        </div>
      </section>
    );
  }

  const { timeArray, values } = splitTime(clock.now);

  return (
    <section className="clock-card" aria-label="Vaughn's local time">
      {/* Clock label */}
      <div className="clock-heading">
        <span className="status-dot" aria-hidden="true" />
        <span>Local time</span>
        <span className="clock-zone">PT</span>
      </div>
      {/* Live 12-hour time */}
      <p className="clock-time" aria-live="off">
        <span>{values.hour}</span>
        <span className="clock-colon">:</span>
        <span>{values.minute}</span>
        <span className="clock-seconds">:{values.second}</span>
        <span className="clock-period">{values.period}</span>
      </p>
      {/* Date and API status */}
      <div className="clock-meta">
        <span>{dateFormatter.format(clock.now)}</span>
        <span title={clock.diagnostic}>
          {clock.source === "api" ? "API synced" : "Local fallback"}
        </span>
      </div>
      {/* Contact details */}
      <div className="clock-contact">
        <span>Contact</span>
        <a href="mailto:Vaughnalston383@gmail.com">Vaughnalston383@gmail.com</a>
      </div>
      <span className="sr-only">Time values: {timeArray.join(", ")}</span>
    </section>
  );
}
