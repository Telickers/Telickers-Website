import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { wrap } from "popmotion";

import { members } from "data";
import Bio from "./Bio";

const imageVariants = {
  hidden: {
    filter: "blur(12px)",
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function TeamCarousel() {
  const [[page], setPage] = useState([0, 0]);

  const memberIndex = wrap(0, members.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="block py-24 lg:hidden">
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          id="about"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="pb-16 xs:text-2xl text-4xl font-bold"
        >
          {"Who's Behind This ?"}
        </motion.h2>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="flex items-center md:space-x-3 lg:space-x-8"
        >
          <img
            src="/icons/left-arrow.svg"
            alt="Left Arrow Icons"
            onClick={() => paginate(-1)}
            className="w-[55px] cursor-pointer"
          />
          <div className="flex w-[270px] flex-col items-center md:w-[300px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={page}
                src={members[memberIndex].image}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                alt="Team Member"
                loading="lazy"
                className="mb-3 h-[200px] w-[200px] rounded-full border-8 border-white object-cover shadow-md md:h-[300px] md:w-[300px]"
              />
            </AnimatePresence>
            <p className="text-linear font-semibold">
              {members[memberIndex].name}
            </p>
            <p className="text-center font-bold text-[#B7B7B7]">
              {members[memberIndex].role}
            </p>
          </div>
          <img
            src="/icons/right-arrow.svg"
            alt="Right Arrow Icons"
            className="w-[55px] cursor-pointer"
            onClick={() => paginate(1)}
          />
        </motion.div>
        <Bio
          bio={members[memberIndex].bio}
          facebookUrl={members[memberIndex].facebookUrl}
          instagramUrl={members[memberIndex].instagramUrl}
          linkedinUrl={members[memberIndex].linkedinUrl}
        />
      </div>
    </section>
  );
}
