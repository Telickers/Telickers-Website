"use client";

import { motion } from "framer-motion";

import ServiceItem from "./ServiceItem";
import { services } from "data";

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-section" className="py-24">
      <div className="flex flex-col items-center justify-center" id="services">
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-center text-5xl font-bold xs:text-4xl"
        >
          What We Do
        </motion.h2>
      </div>
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.9 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 pb-12 text-center text-lg font-bold text-gray-600 md:pb-16 md:text-2xl"
      >
        FULL-SERVICE DESIGN AND DEVELOPMENT.
      </motion.h2>
      <div className="flex flex-col items-center justify-center space-y-28">
        {services.map((service) => (
          <ServiceItem service={service} key={service.title} />
        ))}
      </div>
    </section>
  );
}
