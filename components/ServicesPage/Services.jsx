import { motion } from "framer-motion";

import RequestMeeting from "../Common/RequestMeeting";
import ServiceItem from "./ServiceItem";
import { services } from "data";

export default function ServicesSection() {
  return (
    <section className="bg-brand py-28">
      <div className="flex flex-col items-center justify-center space-y-44">
        {services.map((service) => (
          <ServiceItem service={service} key={service.title} />
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
        className="mt-28 flex justify-center"
      >
        <RequestMeeting />
      </motion.div>
    </section>
  );
}
