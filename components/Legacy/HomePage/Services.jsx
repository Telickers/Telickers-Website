import { motion } from "framer-motion";

import { services } from "data";
import NoScrollLink from "../NoScrollLink";
import ServicesSection from "../ServicesPage/Services";

export default function Services() {
  return (
    <section aria-labelledby="services-section" className="py-24">
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: 0.7 }}
          id="services-section"
          className="xs:text-4xl text-center text-5xl font-bold"
        >
          What We Do
        </motion.h2>
      <ServicesSection/>  
      </div>
    </section>
  );
}
