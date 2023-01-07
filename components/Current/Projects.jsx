import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { work } from "data";
import BlurImage from "./Utils/BlurImage";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Portfolio");
  const [filtered, setFiltered] = useState(
    work.filter((project) => project.category === selectedCategory)
  );

  useEffect(() => {
    setFiltered(
      work.filter((project) => project.category.includes(selectedCategory))
    );
  }, [selectedCategory]);

  return (
    <section
      aria-labelledby="our-projects"
      className="bg-brand px-8 py-20 pt-32 md:px-20"
    >
      <motion.h2
        id="work"
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
        className="m-4 pb-4 text-center text-xl font-bold text-gray-600 md:text-3xl"
      >
        We design and build for people. And we are pretty good at it.
      </motion.h3>
      <div className="grid grid-cols-2 place-items-center gap-3 pb-12 md:grid-cols-4 md:pb-16">
        <div
          className="flex w-fit cursor-pointer flex-col items-center justify-center space-y-1"
          onClick={() => setSelectedCategory("Portfolio")}
        >
          <span>Portfolios</span>
          {selectedCategory === "Portfolio" && (
            <motion.div
              layoutId="underline"
              className="h-1 w-full bg-black"
            ></motion.div>
          )}
          {selectedCategory !== "Portfolio" && (
            <motion.div className="h-1 w-full bg-brand"></motion.div>
          )}
        </div>
        <div
          className="flex w-fit cursor-pointer flex-col items-center justify-center space-y-1"
          onClick={() => setSelectedCategory("E-commerce")}
        >
          <span>E-Commerce</span>
          {selectedCategory === "E-commerce" && (
            <motion.div
              layoutId="underline"
              className="h-1 w-full bg-black"
            ></motion.div>
          )}
          {selectedCategory !== "E-commerce" && (
            <motion.div className="h-1 w-full bg-brand"></motion.div>
          )}
        </div>
        <div
          className="flex w-fit cursor-pointer flex-col items-center justify-center space-y-1"
          onClick={() => setSelectedCategory("Digital Menu")}
        >
          <span>Digital Menus</span>
          {selectedCategory === "Digital Menu" && (
            <motion.div
              layoutId="underline"
              className="h-1 w-full bg-black"
            ></motion.div>
          )}
          {selectedCategory !== "Digital Menu" && (
            <motion.div className="h-1 w-full bg-brand"></motion.div>
          )}
        </div>
        <div
          className="flex w-fit cursor-pointer flex-col items-center justify-center space-y-1"
          onClick={() => setSelectedCategory("Community")}
        >
          <span>Community</span>
          {selectedCategory === "Community" && (
            <motion.div
              layoutId="underline"
              className="h-1 w-full bg-black"
            ></motion.div>
          )}
          {selectedCategory !== "Community" && (
            <motion.div className="h-1 w-full bg-brand"></motion.div>
          )}
        </div>
      </div>
      <section
        aria-labelledby="projects-grid"
        className="grid grid-cols-1 place-items-center gap-9 md:grid-cols-2"
      >
        {filtered.map((project) => (
          <div
            key={project.name}
            className={`group relative z-50 h-full w-full transition-all duration-300 ease-in-out lg:hover:scale-95 ${
              project.inProgress && "card"
            }`}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <BlurImage imageSrc={project.imageSrc} />
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center space-x-1 rounded-lg bg-black/90 opacity-0 transition-all duration-300 ease-in-out lg:group-hover:opacity-100">
                <p className="text-3xl font-bold text-white">{project.name}</p>
                <FiExternalLink size={22} color="white" className="mt-1" />
              </div>
              <div className="mt-3 flex items-center space-x-2 lg:hidden">
                <h3 className="text-2xl">{project.name}</h3>
                <FiExternalLink size={20} className="mt-1 animate-pulse" />
              </div>
            </a>
          </div>
        ))}
      </section>
    </section>
  );
}
