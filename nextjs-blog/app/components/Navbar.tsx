'use client'
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { clsx } from "clsx";
import { Divide } from "lucide-react";

const  Navbar =  () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5 ">

  <a href="/">
        <button className="hover-button relative inline-flex items-center justify-center overflow-hidden transition-all text-white py-2 px-4  group sm:flex hidden">



          {/* Parent container with relative position */}
          <div className="relative text-center">
            {/* Top set with higher z-index */}

      
            <div className="relative z-30 overflow-hidden text-white button-font text-4xl ">
              <p className="inline-block">
                <span className={clsx(
                  "inline-block animate-slide-up",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>T</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[5ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>i</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>m</span>
                      <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>o</span>
                      <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>t</span>
                      <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>h</span>
                      <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>y</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[15ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>&apos;</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[25ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>s</span>

                <span className={clsx(
                  "inline-block animate-slide-up delay-[70ms] group-hover: -translate-y-full duration-500 ease-in-out"
                )}>&nbsp;</span>
              </p>
              <p className="inline-block">
                <span className={clsx(
                  "inline-block animate-slide-up",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>B</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[90ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>l</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[100ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>o</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[150ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>g</span>
              </p>
            </div>

            {/* Bottom set positioned below the top set */}
            <div className={clsx(
              "absolute text-center",
              "top-full", // This will position the bottom set below the top set
              "text-[#4670AA]",
              "button-font",
              "text-4xl"
            )}>
              <div className=" ">
                <p className="inline-block">
                  <span className={clsx(
                    "inline-block animate-slide-up",
                    "opacity-0 group-hover:opacity-100 group-hover: -translate-y-full duration-500 ease-in-out"
                  )}>T</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[50ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>i</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[100ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>m</span>
                       <span className={clsx(
                    "inline-block animate-slide-up delay-[150ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>o</span>
                       <span className={clsx(
                    "inline-block animate-slide-up delay-[200ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>t</span>
                       <span className={clsx(
                    "inline-block animate-slide-up delay-[10ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>h</span>
                       <span className={clsx(
                    "inline-block animate-slide-up delay-[250ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>y</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[300ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>&apos;</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[350ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>s</span>

                  <span className={clsx(
                    "inline-block animate-slide-up delay-[400ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>&nbsp;</span>
                </p>
                <p className="inline-block">
                  <span className={clsx(
                    "inline-block animate-slide-up",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>B</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[450ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>l</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[500ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>o</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[550ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>g</span>
          
                </p>
               
              </div>
            </div>
          </div>

        </button>
      </a>
      <Link href="https://timothyitayi.com" className="font-bold text-3xl text-color">
        Portfolio 
      </Link>

      <ModeToggle />
    </nav>
  );
}
export default Navbar
