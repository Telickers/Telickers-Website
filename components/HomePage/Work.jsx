import { motion } from "framer-motion";

import NoScrollLink from "../Common/NoScrollLink";
import BlurImage from "../Common/BlurImage";
import { work } from "data";

export default function Work() {
  return (
    <section aria-labelledby="featured-work" className="relative py-28">
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        id="featured-work"
        className="text-center text-5xl font-bold"
      >
        Featured Work
      </motion.h2>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.2, duration: 0.6 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="mx-auto mt-5 px-4 text-center text-2xl font-extralight lg:px-0"
      >
        Collection of the best websites we have worked on. Dont wait, start
        yours!
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
                <div className="text-left">
                  <h3 className="mb-5 mt-4 text-4xl">{project.name}</h3>
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
