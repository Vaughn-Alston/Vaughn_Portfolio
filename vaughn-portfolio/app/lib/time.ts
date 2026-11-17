export const PORTFOLIO_TIME_ZONE = "America/Los_Angeles";

export type TimeValues = {
  hour: string;
  minute: string;
  second: string;
  period: string;
};

export type NormalizedTime = {
  iso: string;
  timeZone: string;
  timeArray: [string, string, string, string];
  values: TimeValues;
  source: "api" | "fallback";
  diagnostic?: string;
};

export function splitTime(date: Date): {
  timeArray: [string, string, string, string];
  values: TimeValues;
} {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: PORTFOLIO_TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).formatToParts(date);

  const read = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const values = {
    hour: read("hour"),
    minute: read("minute"),
    second: read("second"),
    period: read("dayPeriod").toUpperCase(),
  };

  return {
    timeArray: [
      values.hour,
      values.minute,
      values.second,
      values.period,
    ],
    values,
  };
}
