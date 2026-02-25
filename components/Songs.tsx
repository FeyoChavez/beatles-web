"use client";
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-util'; 
import { songItems } from '@/data/data'; 

export default function Songs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null); 

  const handleNext = () => {
    setActiveIndex((prev) => (prev === songItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? songItems.length - 1 : prev - 1));
  };

  useGSAP(() => {
    if (!contentRef.current) return;
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [activeIndex] });

  const activeItem = songItems[activeIndex];

  return (
    <section id='songs' className="section py-5 md:py-15" ref={containerRef}>
      <div className="container">

        <div className="sm:mx-auto testimonials-wrapper mb-3 md:mb-1">
          <div className="flex gap-3 md:gap-5 items-end">
            <h2 className="section-title text-4xl md:text-6xl font-bebasNeue">Here, There</h2>
            <p className="max-w-60 uppercase font-medium hidden md:block text-sm">
                songs that your mother should know
            </p>
          </div>
          <h2 className="section-title text-4xl md:text-6xl font-bebasNeue">And Everywhere</h2>
          <p className="max-w-96 uppercase font-medium mt-1 md:hidden text-xs">
                songs that your mother should know
          </p>
        </div>

        <div className="border border-stone-300 mt-4 md:mt-2 relative overflow-hidden md:min-h-125">
        
           <div ref={contentRef} className="grid gap-4 md:gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-center p-4 md:p-6 pb-16 md:pb-6 h-full">
                
                <div className="w-32 h-32 md:w-full md:max-w-115 md:aspect-[7/8] md:h-auto mx-auto relative overflow-hidden bg-stone-200 rounded-lg shrink-0"> 
                    <Image 
                        src={activeItem.img} 
                        alt={activeItem.song} 
                        fill 
                        className="object-cover object-top" 
                        sizes="(max-width: 768px) 128px, (max-width: 1200px) 50vw, 33vw"
                        priority 
                    />
                </div>

                {/* text content */}
                <div className="lg:border-l border-stone-300 lg:pl-8 flex flex-col justify-start min-h-[250px] md:min-h-[300px]">
    
    
    <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-4 md:mb-8">
       
        <div className="uppercase min-h-[48px] md:min-h-[64px]">
            <span className="font-bold block text-[10px] tracking-wider text-stone-500">Song:</span>
            <span className="text-sm md:text-lg font-medium leading-tight">{activeItem.song}</span>
        </div>
        <div className="uppercase text-right md:text-left min-h-[48px] md:min-h-[64px]">
            <span className="font-bold block text-[10px] tracking-wider text-stone-500">Album:</span>
            <span className="text-sm md:text-lg font-medium leading-tight">{activeItem.album}</span>
        </div>
        <div className="uppercase min-h-[48px] md:min-h-[64px]">
            <span className="font-bold block text-[10px] tracking-wider text-stone-500">Release date:</span>
            <span className="text-sm md:text-lg font-medium leading-tight">{activeItem.release}</span>
        </div>
        <div className="uppercase text-right md:text-left min-h-[48px] md:min-h-[64px]">
            <span className="font-bold block text-[10px] tracking-wider text-stone-500">Genre:</span>
            <span className="text-sm md:text-lg font-medium leading-tight">{activeItem.genre}</span>
        </div>
    </div>

    {/* desc */}
    <p className="text-sm md:text-2xl font-light leading-snug md:leading-relaxed italic">
        &quot;{activeItem.desc}&quot;
    </p>
</div>
            </div>

            {/* arrow buttons */}
            <div className="absolute bottom-0 right-0 w-full lg:w-auto flex justify-between lg:justify-end items-center px-4 py-2 md:py-4 border-t border-stone-300 bg-white/90 backdrop-blur-md">

                <button onClick={handlePrev} className="group p-1 md:p-2 hover:bg-black hover:text-white transition-colors duration-300 rounded-full">
                    
                    <ArrowBigLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <span className="mx-4 md:mx-6 font-bebasNeue text-xl md:text-2xl tracking-widest">
                    0{activeIndex + 1} <span className="text-stone-400">/ 0{songItems.length}</span>
                </span>

                <button onClick={handleNext} className="group p-1 md:p-2 hover:bg-black hover:text-white transition-colors duration-300 rounded-full">
                    <ArrowBigRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
            </div>

        </div>
      </div>
    </section>
  );
}