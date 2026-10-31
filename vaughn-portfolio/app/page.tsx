import Image from "next/image";

import heading from "./heading.module.css"

export default function Home() {
 
  return (



    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">


      <main>

    {/* This will hold the profile picture which I want to be a circle */}
        <Image
          className={heading.profilePicture}
          src="/images/Profile.svg"
          alt="Profile Picture"
          width={128}
          height={128}
          priority
        />




<h2 className={heading.purpleName}> My name is Vaughn</h2>{" "}

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">


          {/* First Text Section To get Started edit the Page.tsx file */}
          <h1 className="">

            
            




            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              Computer Science student at El Camino College with experience in Full-Stack-Development, 
              AWS Cloud Services, and LLM Model Integration. Previously at Snap.Inc, Workz.inc,
             
            </code>{" "}
            file.
          </h1>



         </div>
      </main>
    </div>
  );
}
