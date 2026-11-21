import TechIcon from "@/app/components/tech-icon";
import type { ProofCategory } from "@/app/content/proof";
export default function ProofCard({ item, index }: { item: ProofCategory; index: number }) { return <article className="proof-card"><span className="card-index">0{index + 1} /</span><div><h3>{item.title}</h3><p>{item.description}</p><div className="tech-list">{item.technologies.map((technology) => <TechIcon key={technology.name} technology={technology} />)}</div></div></article>; }
