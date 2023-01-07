import { motion } from "framer-motion";

import RequestMeeting from "./RequestMeeting";

export default function Why() {
  return (
    <section
      aria-label="why telickers"
      className="flex items-center justify-center bg-brand py-20"
    >
      <motion.div
        id="contact"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 1 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="h-[400px] w-[330px] bg-[url('/icons/square.svg')] bg-contain bg-center bg-no-repeat md:h-[600px] md:w-[600px] md:bg-[url('/icons/circle.svg')] xs:w-[310px]"
      >
        <div className="flex h-full flex-col items-center justify-center px-3 text-center md:px-12">
          <p className="mb-2 text-3xl font-bold md:mb-6 md:text-6xl">
            Why Telickers
          </p>
          <p className="mb-8 text-xl md:mb-8 md:text-3xl">
            It all started when we focused on the sound of our keyboards,
            clicking for the duty of technology. Technology Clickers We are here
            for you!
          </p>
          <RequestMeeting />
        </div>
      </motion.div>
    </section>
  );
}
