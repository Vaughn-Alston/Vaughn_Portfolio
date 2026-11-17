import Image from "next/image";
import projects from "@/app/data/projects.json";

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <article className="project-card" key={project.id}>
          <div className="project-card-topline">
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="project-date">{project.date}</span>
          </div>
          <div className="project-icon" aria-hidden="true">
            <Image src={project.image} alt="" width={30} height={30} />
          </div>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <span className="project-link">View case study ↗</span>
        </article>
      ))}
    </div>
  );
}
