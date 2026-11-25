
// TODO(AI) rename proof and any file that pulls from it SkillsButtons


export type Technology = {
  name: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
export type ProofCategory = { title: string; description: string; technologies: Technology[] };




// Here is the Array of types that will display inside of my skills

export const technologies: Technology[] = [
  { name: "JavaScript", src: "/icons/javascript.svg", alt: "JavaScript logo", width: 145, height: 47 },
  { name: "TypeScript", src: "/icons/typescript.svg", alt: "TypeScript logo", width: 145, height: 47 },
  { name: "React", src: "/icons/react.svg", alt: "React logo", width: 152, height: 145 },
  { name: "Next.js", src: "/icons/nextjs.svg", alt: "Next.js logo", width: 99, height: 47 },
  { name: "LLM Integration", src: "/icons/llmintegrate.svg", alt: "LLM integration skill", width: 203, height: 47 },
  { name: "Reward Based", src: "/icons/rewardbased.svg", alt: "Reward-based systems skill", width: 243, height: 47 },
  { name: "Expo", src: "/icons/expo.svg", alt: "Expo logo" },
];
