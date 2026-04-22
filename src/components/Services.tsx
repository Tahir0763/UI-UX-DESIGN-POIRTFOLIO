"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Digital Design",
    description: "Crafting intuitive and immersive UI/UX experiences that seamlessly merge aesthetics with functionality.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Art Direction",
    description: "Establishing bold visual identities and guiding the creative vision to ensure a cohesive and premium brand presence.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "WebGL & Motion",
    description: "Bringing interfaces to life with physics-based animations, 3D elements, and cinematic storytelling.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Brand Strategy",
    description: "Positioning brands for the future through deep market research, core values alignment, and strategic execution.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen py-32 flex flex-col justify-center bg-background z-10 overflow-hidden border-t border-gray-900">
      
      {/* Background Image Reveal */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.img
              key={hoveredIndex}
              src={services[hoveredIndex].image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-all duration-500" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20">
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-bold">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase text-white">
            What I <span className="text-transparent" style={{ WebkitTextStroke: "1px #fff" }}>Do</span>
          </h3>
        </div>

        <div className="flex flex-col border-t border-gray-800">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-gray-800 cursor-pointer magnetic relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-0" />
              
              <div className="relative z-10 flex items-center gap-8 md:gap-16 w-full md:w-1/2">
                <span className="text-xl md:text-2xl font-serif text-gray-500 transition-colors duration-300 group-hover:text-accent">
                  {service.id}
                </span>
                <h4 className="text-3xl md:text-5xl font-display font-bold uppercase text-white transition-transform duration-500 group-hover:translate-x-4">
                  {service.title}
                </h4>
              </div>

              <div className="relative z-10 w-full md:w-1/3 mt-6 md:mt-0">
                <p className="text-lg font-sans text-gray-400 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
