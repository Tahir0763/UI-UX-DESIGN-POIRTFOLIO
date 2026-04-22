"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (textRef.current && footerRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full bg-accent text-background overflow-hidden flex flex-col justify-between pt-20 pb-10 z-20 rounded-t-[3rem]">
      
      <div className="px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="flex flex-col gap-6 max-w-md">
          <h3 className="text-3xl font-display font-bold uppercase">Ready to start?</h3>
          <p className="text-background/80 font-sans text-lg">
            Let's build something extraordinary together. I'm currently available for freelance projects and full-time roles.
          </p>
          <a href="mailto:tahirhussain66678@gmail.com" className="w-max bg-background text-accent px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform magnetic">
            tahirhussain66678@gmail.com
          </a>
        </div>

        <div className="flex gap-16 font-sans">
          <div className="flex flex-col gap-4">
            <span className="text-background/50 uppercase tracking-widest text-xs font-bold">Socials</span>
            {["Instagram", "Twitter / X", "Behance", "LinkedIn"].map((social, i) => (
              <a key={i} href="#" className="hover:font-bold transition-all hover:translate-x-2 magnetic w-max">
                {social}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-background/50 uppercase tracking-widest text-xs font-bold">Location</span>
            <span>Pakistan<br/>Remote / Worldwide</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-32 flex justify-center overflow-hidden">
        <h1 ref={textRef} className="text-[12vw] md:text-[15vw] leading-none font-display font-bold uppercase whitespace-nowrap tracking-tighter">
          Let's Talk
        </h1>
      </div>

      <div className="w-full px-6 md:px-20 mt-10 flex flex-col md:flex-row justify-between items-center text-sm font-sans text-background/60 border-t border-background/20 pt-6">
        <span>© 2026 Tahir Hussain. All rights reserved.</span>
        <span className="mt-4 md:mt-0">Designed & Built with passion.</span>
      </div>
    </footer>
  );
}
