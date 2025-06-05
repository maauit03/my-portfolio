'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {words} from '../constants/index.js'

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // rotate every x seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden ">
      <div className="hero-layout max-w-5xl mx-auto ">
        <header className="flex flex-col justify-center md:w-full md:px-20 px-5">
          <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white text-xl md:text-4xl font-semibold tracking-widest"
          >
            HELLO WORLD
          </motion.h1>
            <div className="hero-text">
            <h1 className="flex items-center gap-3 text-yellow-300">
            Ready to maximize Stakeholder value in
                <span className="inline-block">
                  <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index].text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-2 text-red-600"
                    >
                      <img
                        alt='sample'
                        src={words[index].imgPath}
                        className="w-10 h-10 p-2 rounded-full bg-[var(--color-white-50)]"
                      />
                      <span>{words[index].text}</span>
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <h1></h1>
              <h1></h1>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
