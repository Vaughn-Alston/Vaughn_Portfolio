import Image from "next/image";
import type { StoryItem } from "@/app/content/story";
export default function StoryStep({ item, offset }: { item: StoryItem; offset: number }) {
  return (
    <article
      className="story-step"
      style={{ "--step-offset": `${offset * 8}%` } as React.CSSProperties}
    >
      <span className="story-number">{item.number} /</span>
      {item.image && (
        <div className="story-image">
          <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 800px) 80vw, 30vw" />
        </div>
      )}
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}
