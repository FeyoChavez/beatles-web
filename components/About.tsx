"use client";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/lib/gsap-util";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const textSplit = SplitText.create(".text", {
        type: "words lines",
        linesClass: "overflow-hidden", 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-wrapper",
          start: "top 80%", 
          toggleActions: "play none none reverse", 
          //markers: true,
        },
      });

      tl.from(textSplit.words, {
        yPercent: 100,
        autoAlpha: 0, // Asegura que no se vea al recargar
        ease: "power3.out",
        duration: 1,
        stagger: 0.02,
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="about" className="pt-20 sm:pt-24 min-h-[50vh]" ref={containerRef}>
      <div className="container flex justify-end">
        <div className="max-w-5xl w-full about-wrapper">
          <div className="flex flex-col md:items-center md:flex-row">
           
            <p className="uppercase text-xl md:px-7 font-medium text mb-2 sm:mb-0">
              about
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-5xl text">
              The Beatles were architects of change
            </h2>
          </div>

          <div className="text-xl sm:text-2xl lg:text-5xl text">
            <p>
              Pioneers of a cultural revolution, they believed in every song as an 
              opportunity to redefine human connection, turning emotional ideas 
              into masterpieces that still shape the world today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}