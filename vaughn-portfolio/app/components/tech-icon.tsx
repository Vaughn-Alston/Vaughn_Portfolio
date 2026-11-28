import Image from "next/image";
import type { Technology } from "@/app/content/proof";
//TODO for the tech-ICON file  I want to rename this to be SkillsButtonsBox for readablity
export default function TechIcon({ technology }: { technology: Technology }) {

  return (

    // These will reflect the boxes that will go into the skills, 
    // Reuseable boxes that pull types

    <Image
      className="technology-image"
      src={technology.src}
      width={technology.width ?? 40}
      height={technology.height ?? 40}
      alt={technology.alt}
      title={technology.name}
    />
  );
}
