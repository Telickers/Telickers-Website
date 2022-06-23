import { motion } from "framer-motion";

export default function Team() {
  return (
    <section
      aria-labelledby="story-title"
      className="flex flex-col items-center justify-center px-4 pb-24"
    >
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        id="story-title"
        className="text-with-shadow my-24 text-center text-6xl font-bold leading-[4rem] tracking-wide"
      >
        We <br /> MAKE <br /> IMPACT
      </motion.h2>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="mb-3 text-3xl font-bold"
      >
        <span className="text-linear text-2xl font-medium italic">
          Our Story
        </span>{" "}
        Telickers Team
      </motion.p>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-center text-lg lg:mx-auto lg:w-[70vw]"
      >
        In a nutshell, we are a group of developers and designers who found that
        our skills are valuable. So we decided to merge our skills into one team
        having a structure and the motivation for researching, prototyping and
        building technology. That is how we got to build our team, and since
        then we have helped businesses, freelancers {"&"} companies reach their
        goals {"&"} improve their workflow.
      </motion.p>
    </section>
  );
}
