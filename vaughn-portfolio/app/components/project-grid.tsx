import Image from "next/image";
import projects from "@/app/Project_Experience/projects.json";

type ProjectLink = "demo" | "github" | "architecture" | "devpost";
type Project = {
  id: number;
  name: string;
  description: string;
  image: string | null;
  imageAlt: string;
  stack: string[];
  links: Record<ProjectLink, string | null>;
};

const linkLabels: Record<ProjectLink, { label: string; icon: string }> = {
  demo: { label: "Live Demo", icon: "↗" },
  github: { label: "GitHub", icon: "⌘" },
  architecture: { label: "Architecture", icon: "◇" },
  devpost: { label: "Dev Post", icon: "↗" },
};

export function ProjectTag({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a className="project-tag" href={href} target="_blank" rel="noreferrer">
      {label}<span aria-hidden="true">{icon}</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primaryLink = project.links.demo ?? project.links.github ?? project.links.devpost;

  return (
    <article className="project-card">
      <div className="project-image">
        {project.image && <Image alt={project.imageAlt} fill sizes="(max-width: 800px) 100vw, 25vw" src={project.image} />}
        <span className="project-image-index">0{index + 1}</span>
      </div>
      <div className="project-details">
        <h3>
          {primaryLink ? <a href={primaryLink} target="_blank" rel="noreferrer">{project.name}<span aria-hidden="true"> ↗</span></a> : project.name}
        </h3>
        <p>{project.description}</p>
        <div className="project-stack" aria-label="Project technologies">{project.stack.join(" · ")}</div>
        <div className="project-tags">
          {(Object.keys(linkLabels) as ProjectLink[]).map((key) => {
            const href = project.links[key];
            return href ? <ProjectTag key={key} href={href} {...linkLabels[key]} /> : null;
          })}
        </div>
      </div>
    </article>
  );
}

export default function ProjectGrid() {
  return (
    <div className="project-grid" tabIndex={0} aria-label="Selected projects">
      {(projects as Project[]).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
    </div>
  );
}
