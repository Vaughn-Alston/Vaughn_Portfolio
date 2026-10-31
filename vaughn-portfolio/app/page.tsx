import Image from "next/image";

export default function Home() {
 
  return (



    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">


      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        {/* This is the image ICON */}
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />




        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">


          {/* First Text Section To get Started edit the Page.tsx file */}
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            My name is Vaughn {" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              Computer Science student at El Camino College with experience in Full-Stack-Development, 
              AWS Cloud Services, and LLM Model Integration. Previously at Snap.Inc, Workz.inc,
             
            </code>{" "}
            file.
          </h1>



          {/* Looking for A starting point section section */}
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}


            {/* Start of a anchor Tag */}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >


              Templates
            </a>  {/* we intentionally put a space after ward */}
            {" "} 
            {/* End of a anchor Tag */}


            or the{" "} {/* we intentionally put a space after ward */}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "} {/* we intentionally put a space after ward */}
            center.
          </p>


        </div>
       
       
     

        {/*Container Holding the buttons for Deploy and documentation  */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">  

          {/* Deploy Now Button */}
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          {/* End of Button */}

          {/* Documentation Button */}
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          {/* End of Button */}




        </div>
      </main>
    </div>
  );
}
