"use client";

import { motion } from "framer-motion";

const awards = [
  { year: "2025", title: "Site of the Month", issuer: "Awwwards", project: "Visionaire" },
  { year: "2024", title: "FWA of the Day", issuer: "The FWA", project: "Luxe Noir" },
  { year: "2023", title: "Best UI/UX", issuer: "CSS Design Awards", project: "FinFlow" },
  { year: "2022", title: "Developer Award", issuer: "Awwwards", project: "Aura Beauty" },
  { year: "2021", title: "Gold Distinction", issuer: "Communicator Awards", project: "Personal Portfolio" }
];

export default function Awards() {
  return (
    <section className="relative w-full py-32 bg-background z-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-10">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-bold">Recognition</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold uppercase text-white">
              Selected <span className="text-transparent" style={{ WebkitTextStroke: "1px #fff" }}>Awards</span>
            </h3>
          </div>
          <p className="max-w-sm text-gray-400 font-sans mt-6 md:mt-0 text-lg">
            Honored by the global design community for pushing the boundaries of digital experiences.
          </p>
        </div>

        <div className="flex flex-col">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-gray-800/50 hover:bg-white/5 px-6 -mx-6 rounded-2xl transition-colors duration-300 cursor-default"
            >
              <div className="flex items-center gap-8 md:w-1/3">
                <span className="text-accent font-sans text-sm tracking-widest">{award.year}</span>
                <h4 className="text-2xl md:text-3xl font-display font-bold uppercase text-white group-hover:text-accent transition-colors">
                  {award.title}
                </h4>
              </div>
              
              <div className="md:w-1/3 mt-2 md:mt-0">
                <span className="text-lg font-serif text-gray-400 italic">
                  {award.issuer}
                </span>
              </div>
              
              <div className="md:w-1/3 text-left md:text-right mt-2 md:mt-0">
                <span className="text-sm uppercase tracking-[0.2em] font-bold text-gray-600 bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
                  {award.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
