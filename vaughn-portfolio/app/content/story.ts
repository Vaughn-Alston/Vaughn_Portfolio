export type StoryItem = { number: string; title: string; description: string; offset: number; image?: { src: string; alt: string } };
export const storySteps: StoryItem[] = [
  { number: "01", title: "Stay curious.", description: "Every good project starts with a question and the willingness to explore it.", offset: 0 },
  { number: "02", title: "Build with purpose.", description: "I turn ideas into useful experiences, paying attention to the people on the other side of the screen.", offset: 1, image: { src: "/images/Impact.png", alt: "Impacts project visual" } },
  { number: "03", title: "Keep growing.", description: "Each project is a chance to learn something new, refine the details, and make a bigger impact.", offset: 2 },
  { number: "04", title: "Make a ripple.", description: "The best work starts with an idea and grows through collaboration and care.", offset: 3, image: { src: "/images/THERIPPLE.png", alt: "The Ripple project visual" } },
];
