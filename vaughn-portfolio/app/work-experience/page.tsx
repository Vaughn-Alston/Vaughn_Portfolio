import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import LiveClock from "@/app/components/live-clock";
import LocalTime from "@/app/components/local-time";
import { site } from "@/app/content/site";

export default function WorkExperiencePage() {
  return (
    <main className="portfolio-shell" id="top">
      <aside
        className="profile-rail"
        aria-label="Profile and contact information"
      >
        <Link className="wordmark" href="/" aria-label={`${site.name}, home`}>
          VAUGHN<span>✳</span>
        </Link>
        <div className="profile-picture">
          <Image
            src="/images/Profile.svg"
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="260px"
          />
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
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${social.label}, opens in a new tab`}
            >
              <Image
                src={
                  social.image ||
                  `/icons/${social.label === "GitHub" ? "github-social" : social.label.toLowerCase()}.svg`
                }
                width={18}
                height={18}
                alt=""
                aria-hidden="true"
              />
              <span>{social.label}</span>
            </a>
          ))}
        </nav>
        <a
          className="resume-link"
          href="/icons/Resume.svg"
          download
          aria-label="Download Vaughn's resume"
        >
          <Image
            src="/icons/Resume.svg"
            width={202}
            height={47}
            alt="Resume download"
          />
        </a>
        <p className="profile-copyright">Copyright © Vaughn Alston</p>
      </aside>
      <section className="work-panel" aria-label="Work experience">
        <header className="panel-header">
          <Link href="/">Portfolio</Link>
          <Link href="/work-experience" aria-current="page">
            Work Experience
          </Link>
          <a
            className="panel-contact"
            href={
              site.socials.find((social) => social.label === "LinkedIn")?.href
            }
          >
            Let’s work together <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="experience-blank">
          <p>Hello world</p>
        </div>
      </section>
    </main>
  );
}
