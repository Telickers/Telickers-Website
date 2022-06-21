import { motion } from "framer-motion";

import { services } from "data";
import NoScrollLink from "../Common/NoScrollLink";

export default function Services() {
  return (
    <section aria-labelledby="services-section" className="bg-brand py-24">
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: 0.7 }}
          id="services-section"
          className="pb-16 text-center text-5xl font-bold"
        >
          Our Services
        </motion.h2>
        <div className="grid w-screen grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((serv) => (
            <motion.article
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true, amount: 0.7 }}
              key={serv.src}
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                <img
                  src={serv.src}
                  className="mx-auto h-full w-full"
                  alt={serv.title}
                />
              </div>
              <div className="text pt-3 text-center">
                <span className="block pb-1 text-2xl font-bold">
                  {serv.title}
                </span>
                {serv.desc.map((d, i) => (
                  <p className="text-sm" key={i}>
                    {d}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
        {/* <div className="z-0 mx-44 h-0.5 -translate-y-48 bg-black"></div> */}
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.7 }}
        className="mt-20 flex justify-center"
      >
        <NoScrollLink href="/services" passhref>
          <a className="flex items-center justify-center rounded-full border border-white/10 bg-slate-700/40 px-4 py-3 font-semibold text-white hover:border-white/20 hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
            Read More
          </a>
        </NoScrollLink>
      </motion.div>
    </section>
  );
}
