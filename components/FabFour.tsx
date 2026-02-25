"use client";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/lib/gsap-util";
import { useRef } from "react";
import { fabFourItems } from "@/data/data";
import Image from "next/image";

export default function FabFour() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const textSplit = SplitText.create(".text", {
        type: "words lines",
        linesClass: "overflow-hidden",
      });

      gsap.from(textSplit.words, {
        yPercent: 100,
        autoAlpha: 0,
        ease: "power3.out",
        duration: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".works-wrapper",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      const images = gsap.utils.toArray<HTMLElement>(".section-img");

      images.forEach((img) => {
        gsap.to(img, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Estado Final: Visible
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: img, 
            start: "top 80%", 
            toggleActions: "play none ",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="fabfour" className="section" ref={containerRef}>
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-6 works-wrapper">
          <div>
            <h2 className="section-title text">The Fab</h2>
            <h2 className="section-title text">Four</h2>
          </div>
          <div className="sm:text-2xl uppercase font-medium">
            <p className="text">Four Pillars</p>
            <p className="text">One Collective Legacy</p>
          </div>
        </div>

        <div className="space-y-32 lg:space-y-44 mt-24 lg:mt-36">
          {fabFourItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row lg:even:flex-row-reverse 
                         lg:justify-center lg:items-center gap-6 lg:gap-8 xl:gap-16 group"
            >
              <div className="space-y-1.5 lg:w-5/12">
                <h3 className="text-4xl uppercase font-medium text">{item.title}</h3>
                <p className="max-w-md text">{item.text}</p>
              </div>

              <div
                className="section-img lg:w-5/12 overflow-hidden"
                style={{
                  clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={583}
                  height={260}
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}