"use client";
import Link from 'next/link';
import { navItems } from '@/data/data';
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap-util";
import { useLenis } from 'lenis/react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
const lenis = useLenis();  
const router = useRouter();
const pathname = usePathname();
 
  useGSAP(() => {
    const showAnim = gsap.timeline({ paused: true }).fromTo(
      ".header",
      { yPercent: 0 },
      { yPercent: -100, duration: 0.3, ease: "power2.inOut" }
    );

    ScrollTrigger.create({
      start: "top top",
      end: 'max',
      onUpdate: (self) => {
        self.direction === 1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, {});

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element && lenis) {
        lenis.scrollTo(element, {
          offset: +120, 
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  };

const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (pathname === "/") {
    e.preventDefault();
    
    if (lenis) {
      lenis.scrollTo(0, { 
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
      });
    }
  }

};

  return (
    <header className='sticky top-0 left-0 bg-white/40 backdrop-blur-md w-full py-4 z-50 header'>
      <div className="container flex items-center justify-between">
        <Link 
          href='/'
          onClick={handleLogoClick}  
          className='font-bold text-2xl sm:text-3xl'
        >
            The Beatles FanPage
        </Link>
        <nav className='flex items-center gap-5'>
          <ul className='flex flex-col sm:flex-row sm:items-center sm:gap-5'>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)} // 3. Interceptamos el evento
                  className='uppercase font-medium hover:opacity-75 transition-opacity'
                >
                  {item.label}
                </Link>
            </li>
          ))}
        </ul>
        <button className='bg-neutral-900 text-white uppercase
        px-5 py-3 rounded-lg hover:opacity-85 transition-opacity
        focus:opacity-85 hidden md:block'>+Beatles</button>
      </nav>
    </div>
  </header>
  )
}
