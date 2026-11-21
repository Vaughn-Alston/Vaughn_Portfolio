import Image from "next/image";
import { Suspense } from "react";
import LiveClock from "@/app/components/live-clock";
import LocalTime from "@/app/components/local-time";
import ProofCard from "@/app/components/proof-card";
import ProjectGrid from "@/app/components/project-grid";
import { proofCategories } from "@/app/content/proof";
import { site } from "@/app/content/site";

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
              <Image src={social.icon} width={18} height={18} alt="" aria-hidden="true" />
              <span>{social.label}</span>
            </a>
          ))}
        </nav>

        <a className="resume-link" href={site.resume.href} target="_blank" rel="noreferrer" aria-label="Open Vaughn's resume in a new tab">
          <Image src={site.resume.icon} width={202} height={47} alt="Resume download" />
        </a>

        <p className="profile-copyright">Copyright © Vaughn Alston</p>
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
          </div>
          <div className="proof-grid">
            {proofCategories.map((item, index) => <ProofCard key={item.title} item={item} index={index} />)}
          </div>
        </section>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="section-title-row">
            <div>
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
