"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen flex items-center py-32 px-6 md:px-20 bg-background z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter"
          >
            Get In <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #ff3366" }}>Touch</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl font-sans text-gray-400 max-w-md"
          >
            Ready to craft a new digital experience or visual identity? Let's discuss your next massive project.
          </motion.p>

          <div className="flex flex-col gap-6 mt-8">
            {[
              { label: "Email Address", value: "tahirhussain66678@gmail.com", href: "mailto:tahirhussain66678@gmail.com" },
              { label: "Direct Line", value: "+92 302 7999986", href: "tel:+923027999986" },
              { label: "Location", value: "Pakistan • Remote", href: "#" },
            ].map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="flex flex-col"
              >
                <span className="text-sm uppercase tracking-widest text-gray-500 mb-1">{info.label}</span>
                <a href={info.href} className="text-2xl font-serif hover:text-accent transition-colors duration-300 magnetic inline-block w-max">
                  {info.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gray-900/50 p-10 md:p-14 rounded-3xl backdrop-blur-md border border-gray-800"
        >
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="group relative">
              <input type="text" id="name" required className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-accent transition-colors peer placeholder-transparent" placeholder="Name" />
              <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-valid:-top-6 peer-valid:text-sm">Your Name</label>
            </div>
            
            <div className="group relative">
              <input type="email" id="email" required className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-accent transition-colors peer placeholder-transparent" placeholder="Email" />
              <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-valid:-top-6 peer-valid:text-sm">Your Email</label>
            </div>

            <div className="group relative mt-4">
              <textarea id="message" required rows={4} className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-accent transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-valid:-top-6 peer-valid:text-sm">Project Details</label>
            </div>

            <button type="submit" className="mt-8 relative overflow-hidden group bg-white text-black font-display uppercase font-bold text-lg py-5 px-10 rounded-full w-max magnetic hover:text-white transition-colors duration-300">
              <span className="relative z-10">Send Inquiry</span>
              <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo rounded-full" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
