'use client'

import { motion } from 'motion/react'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.2
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.2, bounce: 0 },
        opacity:   { delay, duration: 0.01 },
      },
    }
  },
}

export default function Path() {
  return (
    <>
      <motion.svg
        width="100%"
        height="auto"
        viewBox="0 75 700 150"
        initial="hidden"
        animate="visible"
      >
        {/* M */}
        <motion.line x1="10"  y1="200" x2="10"  y2="100" stroke="#ffffff" variants={draw} custom={0}  style={shape} />
        <motion.line x1="10"  y1="100" x2="30"  y2="130" stroke="#ffffff" variants={draw} custom={0.1} style={shape} />
        <motion.line x1="30"  y1="130" x2="50"  y2="100" stroke="#ffffff" variants={draw} custom={0.2} style={shape} />
        <motion.line x1="50"  y1="100" x2="50"  y2="200" stroke="#ffffff" variants={draw} custom={0.3} style={shape} />

        {/* A */}
        <motion.line x1="70"  y1="200" x2="90"  y2="100" stroke="#ffffff" variants={draw} custom={0.4} style={shape} />
        <motion.line x1="90"  y1="100" x2="110" y2="200" stroke="#ffffff" variants={draw} custom={0.5} style={shape} />
        <motion.line x1="80"  y1="160" x2="100" y2="160" stroke="#ffffff" variants={draw} custom={0.6} style={dash} />

        {/* R */}
        <motion.line x1="130" y1="200" x2="130" y2="100" stroke="#ffffff" variants={draw} custom={0.7} style={shape} />
        <motion.line x1="130" y1="100" x2="160" y2="100" stroke="#ffffff" variants={draw} custom={0.8} style={shape} />
        <motion.line x1="160" y1="100" x2="160" y2="150" stroke="#ffffff" variants={draw} custom={0.9} style={shape} />
        <motion.line x1="160" y1="150" x2="130" y2="150" stroke="#ffffff" variants={draw} custom={1.0} style={shape} />
        <motion.line x1="130" y1="150" x2="165" y2="200" stroke="#ffffff" variants={draw} custom={1.1} style={dash} />

        {/* T */}
        <motion.line x1="180" y1="100" x2="220" y2="100" stroke="#ffffff" variants={draw} custom={1.2} style={shape} />
        <motion.line x1="200" y1="100" x2="200" y2="200" stroke="#ffffff" variants={draw} custom={1.3} style={shape} />

        {/* I */}
        <motion.line x1="240" y1="100" x2="240" y2="200" stroke="#ffffff" variants={draw} custom={1.4} style={shape} />
        <motion.line x1="235" y1="100" x2="245" y2="100" stroke="#ffffff" variants={draw} custom={1.45} style={dash} />

        {/* N */}
        <motion.line x1="260" y1="200" x2="260" y2="100" stroke="#ffffff" variants={draw} custom={1.5} style={shape} />
        <motion.line x1="260" y1="100" x2="290" y2="200" stroke="#ffffff" variants={draw} custom={1.6} style={shape} />
        <motion.line x1="290" y1="200" x2="290" y2="100" stroke="#ffffff" variants={draw} custom={1.7} style={shape} />

        {/* A */}
        <motion.line x1="320" y1="200" x2="340" y2="100" stroke="#FFD700" variants={draw} custom={1.8} style={shape} />
        <motion.line x1="340" y1="100" x2="360" y2="200" stroke="#FFD700" variants={draw} custom={1.9} style={shape} />
        <motion.line x1="330" y1="160" x2="350" y2="160" stroke="#FFD700" variants={draw} custom={2.0} style={dash} />

        {/* U */}
        <motion.line x1="380" y1="100" x2="380" y2="200" stroke="#FFD700" variants={draw} custom={2.1} style={shape} />
        <motion.line x1="380" y1="200" x2="420" y2="200" stroke="#FFD700" variants={draw} custom={2.2} style={shape} />
        <motion.line x1="420" y1="200" x2="420" y2="100" stroke="#FFD700" variants={draw} custom={2.3} style={shape} />
        <motion.line x1="300" y1="220" x2="440" y2="220" stroke="#FFD700" variants={draw} custom={2.3} style={shape} />

      </motion.svg>

      {/* flicker keyframes (global) */}
      <style jsx global>{`
        @keyframes flicker {
          0%, 18%, 22%, 25%, 57%, 100% { opacity: 1; }
          19%, 23%, 26%, 56%    { opacity: 0.2; }
        }
        .flicker {
          animation: flicker 1.8s infinite ease-in-out;
        }
      `}</style>
    </>
  )
}

/**
 * SVG & line style objects
 */
const shape: React.CSSProperties = {
  strokeWidth:   2.5,
  strokeLinecap: 'round',
  fill:          'transparent',
  filter:        'drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 12px #ffffff)',
}

const dash: React.CSSProperties = {
  ...shape,
  strokeDasharray: '4 3',
  opacity:         0.7,
  strokeWidth:     1.5,
}

const detail: React.CSSProperties = {
  ...shape,
  strokeDasharray: '2 2',
  stroke:          '#ffffff',
  opacity:         0.4,
  strokeWidth:     1,
}
