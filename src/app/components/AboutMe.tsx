'use client'

import React from 'react'
import Hologram from './Models/Hologram';
export default function AboutMe() {
  return (
    <section className="relative bg-zinc-900 text-white h-100 overflow-hidden">
      <div className="flex h-full w-full items-center justify-between px-10">

        {/* Content Left */}
        <div className="flex-1 ml-32 z-10">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold">Your Name</span> — a front-end developer focused on crafting clean,
            responsive, and accessible UIs using React and Tailwind CSS.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Outside of coding, I enjoy sketching, gaming, and exploring the intersection of technology and creativity.
          </p>
        </div>

        {/* Hologram Right */}
        <div className="relative h-full z-5 w-[50%] sm:w-[40%] md:w-[35%]">
            <Hologram />
        </div>
      </div>
    </section>
  );
}

