export type Technology = { name: string; src: string; alt: string };
export type ProofCategory = { title: string; description: string; technologies: Technology[] };

export const proofCategories: ProofCategory[] = [
  {
    title: "Backend",
    description: "APIs and systems that keep products moving.",
    technologies: [
      { name: "JavaScript", src: "/icons/javascript.svg", alt: "JavaScript logo" },
      { name: "TypeScript", src: "/icons/typescript.svg", alt: "TypeScript logo" },
    ],
  },
  {
    title: "Frontend",
    description: "Thoughtful, accessible interfaces for the web.",
    technologies: [
      { name: "React", src: "/icons/react.svg", alt: "React logo" },
      { name: "Next.js", src: "/icons/nextjs.svg", alt: "Next.js logo" },
    ],
  },
  {
    title: "Cloud",
    description: "Scalable foundations for connected products.",
    technologies: [{ name: "Cloud", src: "/icons/cloud.svg", alt: "Cloud infrastructure icon" }],
  },
  {
    title: "Mobile",
    description: "Useful experiences that travel with the user.",
    technologies: [{ name: "Expo", src: "/icons/expo.svg", alt: "Expo logo" }],
  },
  {
    title: "Tools",
    description: "A pragmatic toolkit for shipping reliable work.",
    technologies: [
      { name: "TypeScript", src: "/icons/typescript.svg", alt: "TypeScript logo" },
      { name: "GitHub", src: "/images/github.jpg", alt: "GitHub logo" },
    ],
  },
];
