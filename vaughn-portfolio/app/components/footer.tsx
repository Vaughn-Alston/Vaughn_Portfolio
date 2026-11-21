"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/app/content/site";

const subscribe = () => () => {};
const getCurrentYear = () => new Date().getFullYear();
const getServerYear = () => null;

export default function Footer() {
  const currentYear = useSyncExternalStore(subscribe, getCurrentYear, getServerYear);

  return (
    <footer className="footer">
      <span>© {currentYear} {site.name}</span>
      <nav aria-label="Footer links">
        {site.socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
        ))}
        <a href={site.email}>Email</a>
      </nav>
      <a href="#top">{site.backToTop} ↑</a>
    </footer>
  );
}
