import Image from "next/image";
import LiveClock from "@/app/components/live-clock";
import ProjectGrid from "@/app/components/project-grid";

const navItems = ["about", "projects", "skills", "contact"];

export default function Home() {
  return (
    <div className="site-shell">
      <aside className="profile-rail">
        <div className="profile-card">
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
              <p className="eyebrow">Developer portfolio</p>
              <h1>Vaughn Alston</h1>
              <p className="profile-role">Full-stack developer</p>
            </div>
          </div>

          <div className="profile-facts" aria-label="Profile details">
            <span>Los Angeles area</span>
            <span>Open to opportunities</span>
          </div>

          <p className="profile-summary">
            Computer Science student building practical web, cloud, and AI
            products. I make ideas work end to end.
          </p>

          <LiveClock />

          <nav className="profile-nav" aria-label="Portfolio sections">
            {navItems.map((item, index) => (
              <a href={`#${item}`} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </a>
            ))}
          </nav>

          <div className="social-row" aria-label="Social profile shortcuts">
            <span aria-label="LinkedIn">in</span>
            <span aria-label="GitHub">GH</span>
            <span aria-label="Instagram">IG</span>
          </div>
        </div>
      </aside>

      <main className="portfolio-content">
        <section className="hero-section" id="about">
          <p className="section-kicker">01 / About</p>
          <h2>
            Software with a clear purpose,
            <span> built from interface to infrastructure.</span>
          </h2>
          <p className="hero-copy">
            I work across full-stack development, AWS cloud services, and LLM
            integrations. My focus is direct: understand the problem, ship the
            useful version, then make it stronger.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              Explore projects
            </a>
            <a className="text-action" href="#contact">
              Start a conversation ↗
            </a>
          </div>
          <div className="proof-strip" aria-label="Areas of experience">
            <div>
              <strong>Full stack</strong>
              <span>Product-minded engineering</span>
            </div>
            <div>
              <strong>AWS</strong>
              <span>Cloud services &amp; systems</span>
            </div>
            <div>
              <strong>LLMs</strong>
              <span>Useful AI integrations</span>
            </div>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / Selected work</p>
              <h2>Projects built to solve.</h2>
            </div>
            <p>
              Five illustrative project records, rendered from JSON and ready
              to replace with your real case studies.
            </p>
          </div>
          <ProjectGrid />
        </section>

        <section className="content-section" id="skills">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 / Capabilities</p>
              <h2>A practical technical range.</h2>
            </div>
          </div>
          <div className="skills-grid">
            <div>
              <span>01</span>
              <h3>Frontend</h3>
              <p>React, Next.js, TypeScript, responsive UI, accessibility</p>
            </div>
            <div>
              <span>02</span>
              <h3>Backend</h3>
              <p>Node.js, APIs, authentication, structured data, integrations</p>
            </div>
            <div>
              <span>03</span>
              <h3>Cloud &amp; AI</h3>
              <p>AWS services, deployment workflows, LLM product integration</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker">04 / Contact</p>
          <h2>Have a problem worth building for?</h2>
          <p>Let&apos;s turn it into something clear, useful, and real.</p>
          <a href="mailto:hello@example.com">hello@example.com ↗</a>
          <small>Replace this placeholder with your preferred email.</small>
        </section>
      </main>
    </div>
  );
}
