import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLine } from "react-icons/ai";
import { useState } from "react";
import { wrap } from "popmotion";

import { members } from "data";

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
        <h2 className="pb-16 text-5xl font-bold">Meet Our Team</h2>
        <div className="flex items-center md:space-x-3 lg:space-x-8">
          <img
            src="/icons/left-arrow.svg"
            alt="Left Arrow Icons"
            onClick={() => paginate(-1)}
            className="w-[55px] cursor-pointer"
          />
          <div className="flex w-[270px] flex-col items-center space-y-2 md:w-[300px]">
            <AnimatePresence exitBeforeEnter={true}>
              <motion.img
                key={page}
                src={members[memberIndex].image}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                alt="Team Member"
                loading="lazy"
                className="h-[200px] w-[200px] rounded-full border-8 border-white object-cover shadow-md md:h-[300px] md:w-[300px]"
              />
            </AnimatePresence>
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
        </div>

        <div className="mt-4 flex w-[350px] flex-col items-center rounded-lg p-4 text-center shadow-xl">
          <p className="font-medium text-slate-500 py-1.5">
            {members[memberIndex].bio}
          </p>
          <div className="flex space-x-3 pt-5">
            <a>
              <FaFacebookF />
            </a>
            <AiOutlineLine className="rotate-90 " />
            <a>
              <FaInstagram />
            </a>
            <AiOutlineLine className="rotate-90 " />
            <a>
              <FaLinkedinIn />
            </a>
          </div>
          <p className="pt-1.5">
            <a href="mailto:hello@telickers.net">hello@telickers.net</a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
