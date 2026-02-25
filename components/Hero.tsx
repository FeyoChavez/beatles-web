"use client"
import { gsap, useGSAP, SplitText, ScrollTrigger  } from "@/lib/gsap-util";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        const textSplit = SplitText.create('.text', {
            type: 'words',
            lineClass: 'text-line',
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-wrapper',
                start: 'top center',
            },
        });

        tl.from(textSplit.words, {
            yPercent: 100,
            ease: 'power2.inOut',
            duration: 1,
            stagger: 0.03,
        });
    }, {
        scope: containerRef,
    });

  return (
  <section className='py-20 lg:py-28' ref={containerRef}>
    <div className="container flex flex-col">
        {/* Wrapper */}
        <div className="hero-wrapper">
            <h1 className='hero-title text'>timeless</h1>
            <h2 className='hero-title text'>revolution</h2>

            {/* Wrapper */}
            <div className='flex items-center gap-6'>
                <h2 className='hero-title text'>melodies</h2>
                <div className='font-medium tracking-wider uppercase 
                -space-y-1 sm:text-2xl text-neutral-800 hidden sm:block'>
                    <p className="hero-text text">the more</p>
                    <p className="hero-text text">i am, the</p>
                    <p className="hero-text text">less i know</p>
                </div>
            </div>

            {/* text */}
            <h2 className='hero-title mb-2.5 text'>forever</h2>

            {/* sm text */}
            <div className='font-medium tracking-wider uppercase 
                -space-y-1 sm:text-2xl text-neutral-800 sm:hidden'>
                <p className='hero-text text'>the more</p>
                <p className='hero-text text'>i learn, the</p>
                <p className='hero-text text'>less i know</p>
            </div>

        </div>
    </div>
  </section>
  )
}
