'use client'

import React from 'react'
import Hologram from './Models/Hologram';

export default function AboutMe() {
  return (
    <section className="relative bg-zinc-900 text-white overflow-hidden py-10 px-6 sm:px-10">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
        
        {/* Content Left */}
        <div className="z-10 lg:flex-1 md:w-1/2 sm:w-full mb-10 md:mb-0 ml-0 md:ml-16">
          <h2 className="text-4xl text-yellow-300 font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi, I'm <span className="font-semibold">Martin Au</span> — a software developer with an interest in media on the side.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of coding, I enjoy fitness, gaming, and exploring the intersection of technology and creativity.
          </p>
        </div>

        {/* Hologram Right */}
        <div className="relative z-10 md:w-1/2 sm:w-full h-80 md:h-96">
          <Hologram />
        </div>

      </div>
    </section>
  );
}
