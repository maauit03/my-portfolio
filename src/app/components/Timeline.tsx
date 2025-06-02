'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';

type TimelineItem = {
    company: string;
    title: string;
    time: string;
    description: string[] | string;
};

const timelineData: TimelineItem[] = [
  {
    company: 'adesso SE',
    title: 'Bachelor’s Thesis/Working Student as Software Developer',
    time: '2023 – Present',
    description: [
      "Training and fine-tuning of a Large Language Model on a self-created dataset.",
      "Integration of the AI model into a Spring Backend, Deployment of the AI model in Azure.",
      "Implementation of the functional model in the internal employee management program."
    ]
  },
  {
    company: 'doubleSlash Net-Business GmbH',
    title: 'Internship as Software Developer',
    time: '09/2022 – 02/2023',
    description: [
      "Backend development and refactoring with Java and Spring Boot",
      "Creation of unit tests with JUnit 5",
      "Frontend development with Angular",
      "Development of a Jenkins pipeline for automated deployment in Groovy",
      "Proof of concept and implementation of a shared library in Java",
      "Support in a customer project with agile software development (Scrum)"
    ]
  },
  {
    company: 'adesso SE',
    title: 'Bachelor’s Thesis/Working Student as Software Developer',
    time: '2023 – Present',
    description: [
      "Training and fine-tuning of a Large Language Model on a self-created dataset.",
      "Integration of the AI model into a Spring Backend, Deployment of the AI model in Azure.",
      "Implementation of the functional model in the internal employee management program."
    ]
  },
  {
    company: 'adesso SE',
    title: 'Bachelor’s Thesis/Working Student as Software Developer',
    time: '2023 – Present',
    description: [
      "Training and fine-tuning of a Large Language Model on a self-created dataset.",
      "Integration of the AI model into a Spring Backend, Deployment of the AI model in Azure.",
      "Implementation of the functional model in the internal employee management program."
    ]
  },
  {
    company: 'adesso SE',
    title: 'Bachelor’s Thesis/Working Student as Software Developer',
    time: '2023 – Present',
    description: [
      "Training and fine-tuning of a Large Language Model on a self-created dataset.",
      "Integration of the AI model into a Spring Backend, Deployment of the AI model in Azure.",
      "Implementation of the functional model in the internal employee management program."
    ]
  },  {
    company: 'adesso SE',
    title: 'Bachelor’s Thesis/Working Student as Software Developer',
    time: '2023 – Present',
    description: [
      "Training and fine-tuning of a Large Language Model on a self-created dataset.",
      "Integration of the AI model into a Spring Backend, Deployment of the AI model in Azure.",
      "Implementation of the functional model in the internal employee management program."
    ]
  },

];

// Utility to split long strings into sentences
function splitTextIntoLines(text: string): string[] {
  return text
    .split('. ')
    .filter(line => line.trim() !== '')
    .map(line => (line.trim().endsWith('.') ? line.trim() : line.trim() + '.'));
}

export default function Timeline() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-12 text-center">
          Work Experience
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
