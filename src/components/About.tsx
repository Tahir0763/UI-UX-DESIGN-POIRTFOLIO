"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      textRefs.current.forEach((text, i) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: any) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center py-32 px-6 md:px-20 z-10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="flex flex-col gap-8">
          <h2 ref={addToRefs} className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
            The <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #ff3366" }}>Vision</span>
          </h2>
          
          <p ref={addToRefs} className="text-xl md:text-2xl font-serif text-gray-300 leading-relaxed">
            I am Tahir Hussain, an award-winning creative director specializing in immersive digital experiences and bold visual identities.
          </p>
          
          <p ref={addToRefs} className="text-lg md:text-xl font-sans text-gray-400 font-light">
            Merging aesthetic precision with cutting-edge technology to build brands that refuse to be ignored. I believe in physics-based motion, cinematic reveals, and design that breathes life into the digital space.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-10 border-t border-gray-800 pt-10">
            {[
              { num: "50+", label: "Projects" },
              { num: "5+", label: "Years" },
              { num: "12", label: "Awards" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl font-display text-accent font-bold">{stat.num}</span>
                <span className="text-sm uppercase tracking-widest text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[600px] w-full flex justify-center items-center">
          {/* Animated Circle / Visual Element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-80 h-80 rounded-full border border-gray-800 flex justify-center items-center p-4 magnetic"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <defs>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text fontSize="11" fill="#ededed" letterSpacing="2" className="uppercase font-sans">
                <textPath href="#circlePath" startOffset="0%">
                  TAHIR HUSSAIN • CREATIVE DIRECTOR • TAHIR HUSSAIN • CREATIVE DIRECTOR • 
                </textPath>
              </text>
            </svg>
          </motion.div>
          <div className="absolute w-32 h-32 rounded-full bg-accent/10 backdrop-blur-xl flex justify-center items-center border border-accent/20">
             <span className="text-3xl font-display font-bold">TH</span>
          </div>
        </div>

      </div>
    </section>
  );
}
