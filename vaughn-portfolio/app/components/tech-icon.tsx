import Image from "next/image";
import type { Technology } from "@/app/content/proof";

export default function TechIcon({ technology }: { technology: Technology }) {
  return (
    <span className="tech-icon" title={technology.name}>
      <Image src={technology.src} width={24} height={24} alt={technology.alt} />
      <span>{technology.name}</span>
    </span>
  );
}
