import Image from "next/image";
import projects from "@/app/data/projects.json";

// Shape shared by every entry in projects.json.
type Project = {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string | null;
  href: string;
};

// Displayed whenever a project does not have an image path yet.
function ImagePlaceholder() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
    >
      <rect height="22" rx="3" stroke="currentColor" width="26" x="3" y="5" />
      <circle cx="11" cy="12" r="2.5" stroke="currentColor" />
      <path d="m6 24 7-7 5 5 3-3 5 5" stroke="currentColor" />
    </svg>
  );
}

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {(projects as Project[]).map((project) => (
        <article className="project-card" key={project.id}>
          {/* Project media */}
          <div
            className="project-image"
            aria-label="Project image placeholder"
            role="img"
          >
            {project.image ? (
              <Image
                alt=""
                fill
                sizes="(max-width: 720px) 100vw, 220px"
                src={project.image}
              />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
          {/* Linked title, date, and description */}
          <div className="project-details">
            <h3>
              <a href={project.href}>{project.name} ↗</a>
            </h3>
            <p className="project-date">{project.date}</p>
            <p>{project.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
