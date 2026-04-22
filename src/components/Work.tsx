"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
  { id: "01", title: "Visionaire", category: "Editorial / Print", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
  { id: "02", title: "Luxe Noir", category: "Brand Identity", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" },
  { id: "03", title: "FinFlow App", category: "Digital / UI/UX", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" },
  { id: "04", title: "Aura Beauty", category: "Packaging", image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=2000&auto=format&fit=crop" },
];

import Link from "next/link";

function ProjectCard({ project }: { project: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={`/project/${project.id}`} className="relative w-[85vw] md:w-[50vw] lg:w-[40vw] h-[65vh] shrink-0 rounded-[2rem] overflow-hidden cursor-pointer group magnetic shadow-2xl block">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full relative"
      >
        {/* Dynamic Image Background */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden rounded-[2rem]">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </div>
        
        <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between" style={{ transform: "translateZ(80px)" }}>
          <div className="flex justify-between items-start">
            <span className="text-xl md:text-2xl font-sans font-light text-white border border-white/30 px-6 py-2 rounded-full backdrop-blur-md">
              {project.id}
            </span>
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] bg-accent text-white px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,51,102,0.4)]">
              {project.category}
            </span>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter text-white group-hover:text-accent transition-colors duration-500">
              {project.title}
            </h3>
            <div className="overflow-hidden">
              <span className="inline-block transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out text-white/90 font-sans tracking-[0.2em] uppercase text-sm border-b border-accent pb-1">
                Explore Case Study →
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-card");
      const container = scrollWrapperRef.current;

      if (container) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: 1 / (sections.length - 1),
              duration: 0.5,
              ease: "power1.inOut"
            },
            end: () => "+=" + container.offsetWidth,
          }
        });

        tl.to(container, {
          xPercent: -100 * (sections.length - 1) / sections.length,
          ease: "none"
        });
      }
    }, sectionRef);

    return () => {
      // Kill all ScrollTriggers synchronously before React removes DOM nodes
      ScrollTrigger.getAll().forEach(t => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-background flex flex-col justify-center">
      <div className="absolute top-20 left-10 md:left-20 z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mix-blend-difference text-white">
          Selected <span className="text-transparent" style={{ WebkitTextStroke: "1px #fff" }}>Projects</span>
        </h2>
      </div>

      <div className="flex w-[400vw] h-full items-center px-10 md:px-[20vw] mt-10" ref={scrollWrapperRef}>
        {projects.map((project, i) => (
          <div key={i} className="project-card w-[100vw] flex justify-center perspective-[2000px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
