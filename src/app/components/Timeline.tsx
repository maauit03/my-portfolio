'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { timelineData_work, timelineData_education, TimelineItem } from '../constants/work_xp';

// Utility to split long strings into sentences
function splitTextIntoLines(text: string): string[] {
  return text
    .split('. ')
    .filter(line => line.trim() !== '')
    .map(line => (line.trim().endsWith('.') ? line.trim() : line.trim() + '.'));
}

type TimelineProps = {
  type: 'work' | 'education';
};

export default function Timeline({ type }: TimelineProps) {
  const timelineData =
    type === 'work' ? timelineData_work : timelineData_education;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-12 text-center">
          {type === 'work' ? 'Work Experience' : 'Education'}
        </h2>

        <div className="relative border-l-2 border-yellow-300 pl-6 sm:pl-10 space-y-20">
          {timelineData.map((item, index) => (
            <TimelineItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItemCard({ item }: { item: TimelineItem }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -10% 0px', once: true });
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimateIn(true);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      animate={animateIn ? { opacity: 1, x: 0 } : { opacity: 0, x: 75 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300">{item.title}</h3>

      <h3 className="block text-xl text-yellow-300 mt-1">{item.company}</h3>
      <span className="block text-sm text-yellow-300 mt-1">{item.time}</span>

      <div className="mt-3 space-y-2">
        {Array.isArray(item.description)
          ? item.description.map((point, i) =>
              splitTextIntoLines(point).map((line, j) => (
                <motion.li
                  key={`${i}-${j}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={animateIn ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: (i * 0.3) + j * 0.1, duration: 0.4 }}
                  className="ml-4 text-white-300 text-base sm:text-lg leading-snug"
                >      
                {line}
                </motion.li>
              ))
            )
          : splitTextIntoLines(item.description).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={animateIn ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-white-300 text-base sm:text-lg leading-snug"
            >
                {line}
              </motion.p>
            ))}
      </div>
    </motion.div>
  );
}
