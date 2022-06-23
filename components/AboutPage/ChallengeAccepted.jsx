import { motion } from "framer-motion";

export default function ChallengeAccepted() {
  return (
    <section
      aria-label="challenge-accepted-shape"
      className="flex items-center py-10"
    >
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{
          width: "100%",
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: false, amount: 0.8 }}
        className="h-1 w-full bg-black"
      ></motion.div>
      <span className="-mt-[2.9px] text-2xl font-bold md:-mt-[13.3px] md:text-5xl lg:-mt-[12.7px]">
        {"{"}
      </span>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: false, amount: 0.8 }}
        className="w-[430ch] text-center text-sm font-semibold md:w-[180ch] md:text-lg lg:w-[150ch]"
      >
        NOTHING IMPOSSIBLE, CHALLENGE ACCEPTED;
      </motion.p>
      <span className="-mt-[2.9px] text-2xl font-bold md:-mt-[13.3px] md:text-5xl lg:-mt-[12.7px]">
        {"}"}
      </span>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{
          width: "100%",
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: false, amount: 0.8 }}
        className="h-1 w-full bg-black"
      ></motion.div>
    </section>
  );
}
