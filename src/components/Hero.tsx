"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom cubic-bezier for super smooth motion
      },
    }),
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="z-10 text-center flex flex-col items-center">
        <div className="overflow-hidden mb-2">
          <motion.h2
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl uppercase tracking-[0.3em] font-sans text-accent"
          >
            Creative Director
          </motion.h2>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase leading-none tracking-tighter"
          >
            Tahir
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: "2px #ededed" }}
          >
            Hussain
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-8 max-w-lg">
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl font-serif text-gray-400 italic"
          >
            Crafting high-end digital experiences, visual identities, and interactive worlds that refuse to be ignored.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 font-sans">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-accent/50"
        />
      </motion.div>
    </section>
  );
}
