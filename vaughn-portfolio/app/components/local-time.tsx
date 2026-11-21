import { connection } from "next/server";
import LiveClock from "@/app/components/live-clock";
import { fetchTime } from "@/app/GrabTime/time";

function toClockParts(datetime: string | null) {
  if (!datetime) return null;
  const date = new Date(datetime);
  if (Number.isNaN(date.getTime())) return null;

  return date.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).split(/[:\s]+/);
}

export default async function LocalTime() {
  await connection();
  const time = toClockParts(await fetchTime());
  return <LiveClock initialTime={time} />;
}
