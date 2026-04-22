"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    role: "Lead Creative Director",
    company: "Studio Vision",
    description: "Leading the global design team to create award-winning digital experiences, focusing on webGL and immersive storytelling."
  },
  {
    year: "2021 - 2024",
    role: "Senior UI/UX Designer",
    company: "Nexus Digital",
    description: "Designed flagship products for Fortune 500 companies, setting new standards for accessibility and aesthetic minimalism."
  },
  {
    year: "2018 - 2021",
    role: "Art Director",
    company: "Creative Collective",
    description: "Spearheaded brand identity campaigns and directed high-profile photoshoots and interactive web launches."
  },
  {
    year: "2015 - 2018",
    role: "Visual Designer",
    company: "Freelance",
    description: "Worked independently with global startups to establish their initial visual presence and product interfaces."
  }
];

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (lineRef.current && containerRef.current) {
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-32 bg-background z-10 flex justify-center border-t border-gray-900">
      <div className="max-w-5xl w-full px-6 md:px-20">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase text-white">
            Career <span className="text-transparent" style={{ WebkitTextStroke: "1px #ff3366" }}>Journey</span>
          </h2>
        </div>

        <div className="relative flex flex-col gap-16 md:gap-24 pl-8 md:pl-0">
          
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-800">
            <div ref={lineRef} className="absolute top-0 left-0 w-full bg-accent shadow-[0_0_15px_rgba(255,51,102,0.8)]" />
          </div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col md:flex-row w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-37px] md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-background border-2 border-accent z-10" />

              <div className={`w-full md:w-[45%] flex flex-col gap-4 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                <span className="text-accent font-sans font-bold tracking-widest uppercase text-sm">
                  {exp.year}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-white">
                  {exp.role}
                </h3>
                <h4 className="text-xl font-serif text-gray-400 italic">
                  {exp.company}
                </h4>
                <p className="text-gray-500 font-sans leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
