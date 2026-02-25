"use client";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/lib/gsap-util";
import { useRef } from "react";
import { albums } from "@/data/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Albums() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const textSplit = SplitText.create(".text", {
        type: "words lines",
        linesClass: "text-line",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".albums-wrapper",
          start: "top center",
          toggleActions: "play none none reverse",
          //markers: true,
        },
      });

      tl.from(textSplit.words, {
        yPercent: 100,
        autoAlpha: 0,
        ease: "power3.out",
        duration: 1,
        stagger: 0.02,
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="albums" className="section " ref={containerRef}>
      <div className="">
        {/* title */}
        <div className="container albums-wrapper">
          <h2 className="section-title text">Albums Across</h2>
          <h2 className="section-title text">the universe</h2>
        </div>

        {/* Wrapper */}
        <div className="py-15">
          
          <Marquee autoFill={true} speed={85} className="py-2">
            
            {albums.map((album) => (
              <div
                key={album.id}
                className="shrink-0 w-52 md:w-64 lg:w-72 mr-10 even:mt-8 lg:even:mt-18"
              >
               
                <div className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <Image
                    src={album.img}
                    alt={"image"}
                    width={208} // 208px coincide con w-52
                    height={208}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
