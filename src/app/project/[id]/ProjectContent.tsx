"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectContentProps {
  id: string;
  title: string;
  category: string;
  image: string;
}

export default function ProjectContent({ id, title, category, image }: ProjectContentProps) {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground z-20">
      
      {/* Hero Header */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end p-6 md:p-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="text-xl font-sans font-light text-white border border-white/30 px-6 py-2 rounded-full backdrop-blur-md">
              {id}
            </span>
            <span className="text-sm uppercase tracking-[0.2em] bg-accent text-white px-6 py-3 rounded-full font-bold">
              {category}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase tracking-tighter"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="max-w-4xl mx-auto px-6 py-32 flex flex-col gap-12">
        <div className="flex justify-between items-center border-b border-gray-800 pb-10">
          <h2 className="text-3xl font-display uppercase font-bold text-gray-300">Overview</h2>
          <Link href="/" className="text-accent hover:text-white uppercase tracking-widest text-sm transition-colors inline-block border border-accent/20 px-6 py-3 rounded-full hover:bg-accent/10">
            Close Case Study ✕
          </Link>
        </div>
        
        <p className="text-xl md:text-2xl font-serif text-gray-400 leading-relaxed italic">
          This is a placeholder case study page. In a full production environment, this page would contain detailed insights into the design process, early wireframes, typography choices, and the final high-fidelity results for {title}.
        </p>

        <p className="text-lg font-sans text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

    </div>
  );
}
