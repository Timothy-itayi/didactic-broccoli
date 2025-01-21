'use client'
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { clsx } from "clsx";


const  Navbar =  () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5 ">


      <Link href="/" className="font-bold text-3xl  dark:text-white text-black">
        Timothy&apos;s Blog
      </Link>
      <a href="https://timothyitayi.com">
        <button className="hover-button relative inline-flex items-center justify-center overflow-hidden transition-all  py-2 px-4  group sm:flex hidden">



          {/* Parent container with relative position */}
          <div className="relative text-center portfolio-font ">
            {/* Top set with higher z-index */}

      
            <div className="relative z-30 overflow-hidden button-font text-4xl  ">
              <p className="inline-block">
                <span className={clsx(
                  "inline-block animate-slide-up",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>P</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[5ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>O</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>R</span>
                      <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>T</span>
                      <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>F</span>
                      <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>O</span>
                      <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>L</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[15ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>I</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[25ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>O</span>

                <span className={clsx(
                  "inline-block animate-slide-up delay-[70ms] group-hover: -translate-y-full duration-500 ease-in-out"
                )}>&nbsp;</span>
              </p>
         
            
            </div>

            {/* Bottom set positioned below the top set */}
            <div className={clsx(
              "absolute text-center",
              "top-full", // This will position the bottom set below the top set
              "dark:text-[#8B1017] text-[#0773A8]",
              "button-font",
              "text-4xl"
            )}>
              <div className=" ">
                <p className="inline-block dark:text-white text-zinc-900" >
                  <span className={clsx(
                    "inline-block animate-slide-up",
                    "opacity-0 group-hover:opacity-100 group-hover: -translate-y-full duration-500 ease-in-out"
                  )}>P</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[50ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>O</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[100ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>R</span>
                       <span className={clsx(
                    "inline-block animate-slide-up delay-[150ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>T</span>
                       <span className={clsx(
                    "inline-block animate-slide-up delay-[200ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>F</span>
                       <span className={clsx(
                    "inline-block animate-slide-up delay-[10ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>O</span>
                       <span className={clsx(
                    "inline-block animate-slide-up delay-[250ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>L</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[300ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>I</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[350ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>O</span>
                </p>
   
               
              </div>
            </div>
          </div>

        </button>
      </a>
      <ModeToggle />
    </nav>
  );
}
export default Navbar
