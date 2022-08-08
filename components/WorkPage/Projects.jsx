import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { work } from "data";
import BlurImage from "../Common/BlurImage";
import RequestMeeting from "../Common/RequestMeeting";

export default function Projects() {
  return (
    <section
      aria-labelledby="our-projects"
      className="bg-brand px-8 py-20 pt-32 md:px-20"
    >
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.9 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="pb-12 text-center text-xl font-bold text-gray-600 md:pb-16 md:text-3xl"
      >
        We design and build for people. And we are pretty good at it.
      </motion.h2>
      <section
        aria-labelledby="projects-grid"
        className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2"
      >
        {work.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ x: index % 2 === 0 ? -90 : 90, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4 },
            }}
            viewport={{ once: true, amount: 0.7 }}
            className="group relative h-full w-full transition-all duration-300 ease-in-out lg:hover:scale-95"
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <BlurImage imageSrc={project.imageSrc} />
              <div className="absolute  top-0 left-0 flex h-full w-full items-center justify-center space-x-1 rounded-lg bg-black/70 opacity-0 transition-all duration-300 ease-in-out lg:group-hover:opacity-100">
                <p className="text-2xl font-bold text-white">{project.name}</p>
                <FiExternalLink size={22} color="white" className="mt-1" />
              </div>
              <div className="mt-3 flex items-center space-x-2 lg:hidden">
                <h3 className="text-3xl">{project.name}</h3>
                <FiExternalLink size={20} className="mt-1" />
              </div>
            </a>
          </motion.div>
        ))}
      </section>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          rotateY: [0, 24, 90, 0],
          scale: 1,
          opacity: 1,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="mt-20 flex justify-center"
      >
        <RequestMeeting />
      </motion.div>
    </section>
  );
}
