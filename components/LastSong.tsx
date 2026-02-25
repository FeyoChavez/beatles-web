"use client";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/lib/gsap-util";
import { useRef } from "react";

export default function LastSong() {

const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const textSplit = SplitText.create(".text", {
        type: "words lines",
        linesClass: "overflow-hidden", 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".lastSong-wrapper",
          start: "top 10%", 
          toggleActions: "play none", 
          //markers: true,
        },
      });

      tl.from(textSplit.words, {
        yPercent: 100,
        autoAlpha: 0, 
        ease: "power3.out",
        duration: 1,
        stagger: 0.05,
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-100 mb-[80vh]" ref={containerRef}>
        <div className="container">
            <div className="lastSong-wrapper">
            <p className="text text-6xl md:text-7xl lg:text-9xl font-medium text-center uppercase mb-2">
                the fool on the hill
            </p>
            <p className="text text-sm md:text-lg text-stone-500 text-center font-light mb-2">
                And nobody seems to like him, they can tell what he wants to do,
            </p>
            <p className="text text-sm md:text-lg  text-stone-500 text-center font-light">
                And he never show his feelings...
            </p>
            </div>
        </div>
    </section>
  )
}