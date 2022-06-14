import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const statements = [
  {
    text: "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, magni",
  },
  {
    text: "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, magni",
  },
  {
    text: "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, magni",
  },
];

const animation = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.4,
    },
  },
  transition: {
    duration: 0.7,
  },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = () => {
    if (currentIndex === 2) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="hero relative flex flex-col items-center justify-center bg-black text-white md:items-start md:pl-24">
      <AnimatePresence exitBeforeEnter={true}>
        {statements
          .filter((s, idx) => idx === currentIndex)
          .map((s, index) => (
            <motion.h1
              key={index}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animation.variants}
              transition={animation.transition}
              className="text-center text-3xl font-bold md:text-start md:text-6xl"
            >
              Lorem ipsum dolor sit amet consectetur.
            </motion.h1>
          ))}
      </AnimatePresence>
      <div className="mt-6 flex items-center space-x-2">
        <button
          className="flex items-center space-x-3 text-xl"
          onClick={handleChange}
        >
          <span>FIND OUT MORE</span> <BsArrowRightCircle />
        </button>
        <AiOutlineLine className="rotate-90" />
        <button className="text-md rounded-3xl bg-white py-2 px-4 text-black">
          Request a meeting
        </button>
      </div>
    </section>
  );
}
