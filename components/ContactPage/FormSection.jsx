import Image from "next/image";
import { motion } from "framer-motion";

import Form from "../Common/Form";

export default function ContactForm() {
  return (
    <section
      aria-labelledby="contact-form"
      className="grid grid-cols-1 gap-x-10 gap-y-5 bg-brand py-20 px-10 lg:grid-cols-2 lg:px-32"
    >
      <div className="my-auto">
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="mb-2 text-center xs:text-lg text-xl font-bold"
        >
          Great Relationships begin with a smart conversation
        </motion.h2>
        <Form />
      </div>
      <motion.div
        initial={{ x: 90, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="aspect-w-3 aspect-h-3"
      >
        <Image
          alt="Man working on computer"
          src="/general/man-working-on-computer.svg"
          layout="fill"
        />
      </motion.div>
    </section>
  );
}
