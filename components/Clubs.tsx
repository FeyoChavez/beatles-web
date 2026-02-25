"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";
import { useRef } from "react";
import { clubItems } from "@/data/data";
import Image from "next/image";

export default function Clubs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {

      const textSplit = SplitText.create(".text", {
        type: "words lines",
        linesClass: "overflow-hidden",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-wrapper",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(textSplit.words, {
        yPercent: 100,
        autoAlpha: 0,
        ease: "power3.out",
        duration: 1,
        stagger: 0.03,
      });

      const cleanupFns: (() => void)[] = [];

      projectRef.current.forEach((item) => {
        if (!item) return;
        const imageWrapper = item.querySelector(".project-img");
        if (!imageWrapper) return;

        // Image centering
        gsap.set(imageWrapper, { xPercent: -50, yPercent: -50 });

        const xTo = gsap.quickTo(imageWrapper, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(imageWrapper, "y", { duration: 0.4, ease: "power3" });

        const onMove = (e: MouseEvent) => {
          const rect = item.getBoundingClientRect();
          xTo(e.clientX - rect.left);
          yTo(e.clientY - rect.top);
        };

        const onEnter = () => {
          gsap.to(imageWrapper, { autoAlpha: 1, scale: 1, duration: 0.3, overwrite: "auto" });
        };

        const onLeave = () => {
          gsap.to(imageWrapper, { autoAlpha: 0, scale: 0.5, duration: 0.2, overwrite: "auto" });
        };

        item.addEventListener("mousemove", onMove);
        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        cleanupFns.push(() => {
          item.removeEventListener("mousemove", onMove);
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => cleanupFns.forEach((fn) => fn());
    },
    { scope: containerRef }
  );

  return (
    <section id="clubs" className="section" ref={containerRef}>
      <div className="container space-y-14 lg:space-y-20">
        <div className="projects-wrapper">
          <p className="uppercase font-medium text">With a Litlle help from my friends</p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium max-w-2xl lg:max-w-4xl mt-2 text">
            The legendary settings that witnessed the birth of an era.
          </h2>
        </div>

        <div className="divide-y divide-neutral-300 border-t border-neutral-t border-neutral-300 flex-1 max-w-[80%]">
          {clubItems.map((item, index) => (
            <div
              ref={(el) => { projectRef.current[index] = el; }}
              key={item.id}
              className="p-8 hover:bg-neutral-50 transition-all hover:pl-12 cursor-pointer relative group hover:z-30"
            >
              <h3 className="text-3xl font-medium sm:text-4xl lg:text-7xl relative z-10 pointer-events-none">
                {item.title}
              </h3>

              <div className="absolute top-0 left-0 pointer-events-none opacity-0 w-60 h-40 project-img z-20 rounded-lg shadow-2xl ">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}