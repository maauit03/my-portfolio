'use client'
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Path from "./Path";
import { useRef } from 'react';

export default function Navbar() {
  const [expanded, setExpanded] = useState(true);

function scrollToChapter(chapter: string) {
  let elementId: string | null = null;

  switch (chapter) {
    case "aboutme":
      elementId = "aboutme";
      break;
    case "education":
      elementId = "education";
      break;
    case "work":
      elementId = "work";
      break;
    case "projects":
      elementId = "projects";
      break;
    case "skills":
      elementId = "skills";
      break;
    case "contact":
      elementId = "contact";
      break;
    default:
      elementId = null;
  }
  if (elementId) {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  }
}



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setExpanded(true); // Expand when at the top
      } else {
        //setExpanded(false); // Collapse when scrolling down
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="flex items-center justify-center overflow-hidden">
        <motion.div
        initial={false}
        animate={expanded ? "expanded" : "collapsed"}
        variants={{
          collapsed: {
            width: 100,
            height: 100,
            borderRadius: "30%",
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          },
          expanded: {
            width: "100vw",
            height: 100,
            borderRadius: "0%",
            backgroundColor: "black",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
        transition={{ duration: .75, ease: "easeIn" }}
        className="flex px-10"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded && (
        <nav className="flex w-full justify-between items-center text-white font-medium text-lg">
          <div className="flex gap-1">
            <Path />
          </div>
          <ul className="flex gap-8 p-8" onClick={(e) => e.stopPropagation()}>
            <li><button onClick={() => scrollToChapter("aboutme")}>About Me</button></li>
            <li><button onClick={() => scrollToChapter("projects")}>Projects</button></li>
            <li><button onClick={() => scrollToChapter("skills")}>Skills</button></li>
            <li><button onClick={() => scrollToChapter("education")}>Education</button></li>
            <li><button onClick={() => scrollToChapter("work")}>Work Experience</button></li>
            <li><button onClick={() => scrollToChapter("contact")}>Contact</button></li>
          </ul>
        </nav>
        )}
        {!expanded && (
            <div>
                Click me!
            </div>
        )}
      </motion.div>
    </div>
  );
}