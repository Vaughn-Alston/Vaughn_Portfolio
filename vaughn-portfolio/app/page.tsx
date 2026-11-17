import Image from "next/image";
import LiveClock from "@/app/components/live-clock";
import ProjectGrid from "@/app/components/project-grid";

// Profile destinations displayed in the sticky sidebar.
const socialLinks = [
  {
    label: "LinkedIn",
    shortLabel: "in",
    href: "https://www.linkedin.com/in/vaughn-alston-88bb61212/",
  },
  {
    label: "GitHub",
    shortLabel: "GH",
    href: "https://github.com/Vaughn-Alston",
  },
  {
    label: "DEVPOST",
    shortLabel: "DEVPOST",
    href: "https://devpost.com/Vaughn-Alston?ref_content=participants-page&ref_feature=portfolio&ref_medium=button&_gl=1*1nfy7vk*_gcl_au*MjA2MzUxMTM1OS4xNzk0NzA4MTkw*_ga*NzcxODI1Mzk4LjE3OTQ3MDgxOTA.*_ga_0YHJK3Y10M*czE3OTQ4ODE2NTEkbzgkZzEkdDE3OTQ4ODE3OTYkajMyJGwwJGgw",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      {/* Sticky profile rail */}
      <aside className="profile-rail">
        <div className="profile-card">
          {/* Profile identity */}
          <div className="profile-intro">
            <Image
              className="profile-picture"
              src="/images/Profile.svg"
              alt="Portrait of Vaughn Alston"
              width={136}
              height={136}
              priority
            />
            <div>
              <h1>Vaughn Alston</h1>
              <p className="profile-role">Full-stack developer</p>
            </div>
          </div>

          {/* Location and availability */}
          <div className="profile-facts" aria-label="Profile details">
            <span>Los Angeles area</span>
            <span>Open to opportunities</span>
          </div>

          {/* Short professional summary */}
          <p className="profile-summary">
            Computer Science student building practical web, cloud, and AI
            products. I make ideas work end to end.
          </p>

          {/* Live local time and contact details */}
          <LiveClock />

          {/* External profile links */}
          <div className="social-row" aria-label="Social profile shortcuts">
            {socialLinks.map((social) => (
              <a
                aria-label={`Visit Vaughn on ${social.label}`}
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
                title={social.label}
              >
                {social.shortLabel}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* JSON-driven project timeline */}
      <main className="portfolio-content">
        <section className="projects-section" id="projects" aria-label="Projects">
          <ProjectGrid />
        </section>
      </main>
    </div>
  );
}
