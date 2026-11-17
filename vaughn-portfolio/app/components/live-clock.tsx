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

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: PORTFOLIO_TIME_ZONE,
  weekday: "short",
  month: "short",
  day: "numeric",
});

export default function LiveClock() {
  const [clock, setClock] = useState<ClockState | null>(null);

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

  useEffect(() => {
    const initialSync = window.setTimeout(() => void syncClock(), 0);
    const resync = window.setInterval(syncClock, 5 * 60 * 1000);
    return () => {
      window.clearTimeout(initialSync);
      window.clearInterval(resync);
    };
  }, [syncClock]);

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
        <div className="clock-heading">
          <span className="status-dot" aria-hidden="true" />
          <span>Local time</span>
          <span className="clock-zone">PT</span>
        </div>
        <p className="clock-time" aria-live="off">
          <span>--</span>
          <span className="clock-colon">:</span>
          <span>--</span>
        </p>
        <div className="clock-meta">
          <span>Los Angeles</span>
          <span>Connecting</span>
        </div>
      </section>
    );
  }

  const { timeArray, values } = splitTime(clock.now);

  return (
    <section className="clock-card" aria-label="Vaughn's local time">
      <div className="clock-heading">
        <span className="status-dot" aria-hidden="true" />
        <span>Local time</span>
        <span className="clock-zone">PT</span>
      </div>
      <p className="clock-time" aria-live="off">
        <span>{values.hour}</span>
        <span className="clock-colon">:</span>
        <span>{values.minute}</span>
        <span className="clock-seconds">:{values.second}</span>
        <span className="clock-period">{values.period}</span>
      </p>
      <div className="clock-meta">
        <span>{dateFormatter.format(clock.now)}</span>
        <span title={clock.diagnostic}>
          {clock.source === "api" ? "API synced" : "Local fallback"}
        </span>
      </div>
      <span className="sr-only">Time values: {timeArray.join(", ")}</span>
    </section>
  );
}
