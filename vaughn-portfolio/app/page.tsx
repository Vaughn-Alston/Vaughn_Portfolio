import Image from "next/image";
import { Suspense } from "react";
import LiveClock from "@/app/components/live-clock";
import LocalTime from "@/app/components/local-time";
import ProofCard from "@/app/components/proof-card";
import ProjectGrid from "@/app/components/project-grid";
import { proofCategories } from "@/app/content/proof";
import { site } from "@/app/content/site";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.68c0-3.84-2.05-5.63-4.79-5.63a4.14 4.14 0 0 0-3.74 2.05V8.25H9.22V21h3.25v-6.31c0-1.66.31-3.27 2.37-3.27 2.03 0 2.05 1.9 2.05 3.38V21H21v-7.32Z" /></svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.74 9.74 0 0 0-3.08 18.98c.49.09.67-.21.67-.47v-1.7c-2.73.59-3.3-1.16-3.3-1.16-.45-1.14-1.09-1.44-1.09-1.44-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.88 1.5 2.3 1.07 2.86.82.09-.63.34-1.07.62-1.32-2.18-.25-4.47-1.09-4.47-4.82 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.24.1-2.58 0 0 .82-.26 2.68 1a9.26 9.26 0 0 1 4.88 0c1.86-1.26 2.67-1 2.67-1 .54 1.34.2 2.33.1 2.58.63.68 1.01 1.55 1.01 2.62 0 3.75-2.3 4.57-4.48 4.81.35.31.66.91.66 1.83v2.71c0 .26.18.57.67.47A9.75 9.75 0 0 0 12 2.5Z" /></svg>
  ),
  Devpost: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6.2 3-4.7 9 4.7 9h11.6l4.7-9-4.7-9H6.2Zm3.02 4.8h3.38c2.7 0 4.62 1.62 4.62 4.2s-1.92 4.2-4.62 4.2H9.22V7.8Zm2.26 2v4.4h1.02c1.46 0 2.4-.75 2.4-2.2s-.94-2.2-2.4-2.2h-1.02Z" /></svg>
  ),
};

export default function Home() {
  return (
    <main className="portfolio-shell" id="top">
      <aside className="profile-rail" aria-label="Profile and contact information">
        <a className="wordmark" href="#top" aria-label={`${site.name}, home`}>VA<span>✳</span></a>

        <div className="profile-picture">
          <Image src="/images/Profile.svg" alt={`Portrait of ${site.name}`} fill priority sizes="260px" />
        </div>

        <div className="profile-heading">
          <p>HELLO, I’M</p>
          <h1>{site.name}</h1>
          <span>{site.role}</span>
        </div>

        <Suspense fallback={<LiveClock initialTime={null} />}>
          <LocalTime />
        </Suspense>

        <div className="availability">
          <span className="status-dot" aria-hidden="true" />
          <p>{site.availability}</p>
        </div>

        <a className="email-link" href={site.email}>
          <span>Email me</span>
          <strong>Vaughnalston383@gmail.com</strong>
          <span aria-hidden="true">↗</span>
        </a>

        <nav className="social-links" aria-label="Social links">
          {site.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label}, opens in a new tab`}>
              {socialIcons[social.label]}
              <span>{social.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <section className="work-panel" aria-label="Portfolio work">
        <header className="panel-header">
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a className="panel-contact" href={site.email}>Let’s work together <span aria-hidden="true">↗</span></a>
        </header>

        <div className="mission">
          <p className="section-kicker">FULL-STACK ENGINEER · LOS ANGELES</p>
          <h2>Building projects<br />with <span>impact.</span></h2>
          <p className="mission-copy">{site.intro}</p>
        </div>

        <section className="expertise" id="expertise" aria-labelledby="expertise-title">
          <div className="section-title-row">
            <h3 id="expertise-title">What I build with</h3>
            <span>01 / EXPERTISE</span>
          </div>
          <div className="proof-grid">
            {proofCategories.map((item, index) => <ProofCard key={item.title} item={item} index={index} />)}
          </div>
        </section>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="section-title-row">
            <div>
              <span>02 / SELECTED WORK</span>
              <h3 id="projects-title">Projects made with purpose.</h3>
            </div>
            <p>Scroll to see more <span aria-hidden="true">↓</span></p>
          </div>
          <ProjectGrid />
        </section>
      </section>
    </main>
  );
}
