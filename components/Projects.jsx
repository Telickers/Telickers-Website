"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { work } from "data";
import BlurImage from "./Utils/BlurImage";

export default function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="our-projects"
      className="bg-brand px-8 py-20 pt-32 md:px-20"
    >
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-center text-5xl font-bold xs:text-4xl"
      >
        Our Work
      </motion.h2>
      <motion.h3
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.9 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="m-4 pb-6 text-center text-xl font-bold text-gray-600 md:text-3xl"
      >
        We design and build for people. And we are pretty good at it.
      </motion.h3>
      <section
        aria-labelledby="projects-grid"
        className="grid grid-cols-1 place-items-center gap-12 gap-y-20 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3"
      >
        {work.map((project) => (
          <div
            key={project.name}
            className="group relative z-50 h-full w-full transition-all duration-300 ease-in-out lg:hover:scale-95"
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <BlurImage imageSrc={project.imageSrc} />
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl">{project.name}</h3>
                  <FiExternalLink size={20} className="mt-1 animate-pulse" />
                </div>

                <span
                  className={`rounded-full py-1 px-1.5 text-sm text-white ${project.bgColor}`}
                >
                  {project.category}
                </span>
              </div>
            </a>
          </div>
        ))}
      </section>
    </section>
  );
}
