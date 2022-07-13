import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import { feedbacks } from "data";

export default function Reviews() {
  return (
    <section aria-label="feedbacks" className="bg-brand py-16">
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.7 }}
        className="xs:text-4xl text-center text-5xl font-bold"
      >
        Clients Love Us
      </motion.h2>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {feedbacks.map((feedback) => {
            return (
              <SwiperSlide key={feedback.name}>
                <SlideItem feedback={feedback} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
}

function SlideItem({ feedback }) {
  return (
    <article className="w-full ">
      <div className="z-10 -mt-24 grid grid-cols-1 items-center pb-16 sm:-mt-20 sm:pb-10 lg:grid-cols-2 lg:pr-10 lg:mt-14">
        {/* Client Details */}
        <div className="pt-44 text-center md:pt-40 lg:pt-12">
          <Image
            src={feedback.img}
            alt={feedback.name}
            objectFit="cover"
            width="200"
            height="200"
            className="mx-auto mb-4 rounded-full md:mb-6 md:h-56 md:w-56"
          />
          <p className="text-xl font-bold tracking-wider">{feedback.name}</p>
          <p className="text-gray-500">{feedback.comp}</p>
        </div>

        {/* Feedback Text */}
        <div className="xs:mt-6 mt-2 flex items-center px-5 md:px-10 lg:px-2">
          <p className="font-['Poppins'] text-[125px] font-thin md:text-[200px]">
            {"{"}
          </p>
          <p className="leading-[2rem] xs:text-sm text-[1rem] md:text-2xl md:leading-[2.45rem] xl:text-3xl">
            {feedback.text}
          </p>
          <p className="font-['Poppins'] text-[125px] font-thin md:text-[200px]">
            {"}"}
          </p>
        </div>
      </div>
    </article>
  );
}
