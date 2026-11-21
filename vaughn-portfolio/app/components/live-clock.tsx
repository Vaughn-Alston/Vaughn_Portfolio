
"use client";

import { useEffect, useState } from "react";

export default function LiveClock({ initialTime }: { initialTime: string[] | null }) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (!initialTime) return;

    const timer = window.setInterval(() => {
      setTime((current) => {
        if (!current) return current;
        let [hour, minute, second] = current.slice(0, 3).map(Number);
        let period = current[3];

        second += 1;
        if (second === 60) {
          second = 0;
          minute += 1;
        }
        if (minute === 60) {
          minute = 0;
          hour += 1;
          if (hour === 12) period = period === "AM" ? "PM" : "AM";
          if (hour === 13) hour = 1;
        }

        return [
          String(hour),
          String(minute).padStart(2, "0"),
          String(second).padStart(2, "0"),
          period,
        ];
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [initialTime]);

  return (
    <section className="clock-card" aria-label="Vaughn's local time">
      <div className="clock-result">
        <div>
          <span className="clock-label">Los Angeles, California</span>
          <p className="clock-time" aria-live="off">
            <span>{time?.[0] ?? "--"}</span>
            <span className="clock-colon">:</span>
            <span>{time?.[1] ?? "--"}</span>
            <span className="clock-seconds">:{time?.[2] ?? "--"}</span>
            <span className="clock-period">{time?.[3]}</span>
          </p>
        </div>
      </div>
      {!time && <p className="clock-error">Time unavailable — refresh to retry</p>}
    </section>
  );
}
