import { motion } from "framer-motion";
import { FiExternalLink } from 'react-icons/fi'

import NoScrollLink from "../NoScrollLink";
import BlurImage from "../../Utils/BlurImage";
import { work } from "data";

export default function Work() {
  return (
    <section
      aria-labelledby="featured-work"
      className="relative bg-brand py-28"
    >
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        id="featured-work"
        className="text-center text-5xl font-bold xs:text-4xl"
      >
        Our Work
      </motion.h2>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.2, duration: 0.6 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="mx-auto mt-3 px-4 text-center text-2xl font-bold text-gray-600 lg:px-0 xs:text-xl"
      >
        We design and build for people. And we are pretty good at it.
      </motion.p>
      <div className="mx-12 mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
        {work
          .filter((w) => w.featured)
          .map((project, index) => (
            <motion.article
              initial={{ x: index % 2 === 0 ? -90 : 90, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              key={project.name}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity duration-300 ease-in-out lg:hover:opacity-90"
              >
                <BlurImage priority imageSrc={project.imageSrc} />
                <div className="mb-5 mt-4 flex items-center space-x-2">
                  <h3 className="text-4xl xs:text-3xl">{project.name}</h3>
                  <FiExternalLink size={20} className="mt-2 animate-pulse" />
                </div>
              </a>
            </motion.article>
          ))}
      </div>
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
        <NoScrollLink href="/work" passhref>
          <span className="btn-primary">All Our Work</span>
        </NoScrollLink>
      </motion.div>
    </section>
  );
}
