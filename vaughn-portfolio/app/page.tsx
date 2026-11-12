import Image from "next/image";
import File from ".//projectexp"


import heading from "./heading.module.css";


export default function Home() {
  const navLinkClass =
    "nav-link rounded-lg px-4 py-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white";
  const socialLinks = [
    { name: "Instagram", href: "#", image: "/logo/instagram.svg" },
    { name: "LinkedIn", href: "#", image: "/logo/linkedin.svg" },
    { name: "GitHub", href: "#", image: "/logo/github.svg" },
  ];

  <script> 

  </script>
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:gap-16 md:px-10 md:py-0">
        <aside className="md:sticky md:top-0 md:flex md:h-screen md:w-[28rem] md:shrink-0 md:flex-col md:justify-center md:py-12">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <div className="flex flex-col items-center gap-4 md:items-start">
              <Image
                className={heading.profilePicture}
                src="/images/Profile.svg"
                alt="Profile Picture"
                width={192}
                height={192}
                priority
              />
              <div className={heading.socialsSection} aria-label="Social profiles">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    className={heading.socialLink}
                    href={social.href}
                    aria-label={social.name}
                  >
                    <Image
                      className={heading.socialIcon}
                      src={social.image}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>

            <h1>
              <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
                Computer Science student at El Camino College with experience in
                Full-Stack-Development, AWS Cloud Services, and LLM Model
                Integration. Previously at Snap.Inc, Workz.inc,
              </code>{" "}
              file.
            </h1>


            <File> </File>


            
          </div>

          <nav aria-label="Main navigation" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-3 md:flex-col md:items-start">
              <li>
                <a className={navLinkClass} href="#about">
                  About
                </a>
              </li>
              <li>
                <a className={navLinkClass} href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className={navLinkClass} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className={navLinkClass} href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </nav>


          <div className = "Project-section">

                <div className = "projectbox">

               
                  <p>  Project 1</p>

                </div>
                <div className = "projectbox">

               
                  <p>  Project 1</p>

                </div>





          </div>





          
        </aside>

        <main
          aria-label="Portfolio content"
          className="min-h-[60vh] flex-1 md:py-12"
        />



      </div>
    </div>
  );
}
