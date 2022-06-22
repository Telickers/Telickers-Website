import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { feedbacks } from "data";

export default function Reviews() {
  return (
    <section aria-label="feedbacks" className="bg-brand pt-7 pb-10">
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
    </section>
  );
}

function SlideItem({ feedback }) {
  return (
    <article className="w-full ">
      <div className="z-10 -mt-24 grid grid-cols-1 items-center pb-16 sm:-mt-20 sm:pb-10 lg:grid-cols-2 lg:pr-10 lg:pb-5">
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
        <div className="-mt-2 flex items-center px-5 md:-mt-24 md:px-10 lg:-mt-0 lg:px-2">
          <p className="text-[165px] font-thin md:text-[400px]">{"{"}</p>
          <h3 className="pt-7 text-lg md:pt-24 md:text-3xl">{feedback.text}</h3>
          <p className="text-[165px]  font-thin md:text-[400px]">{"}"}</p>
        </div>
      </div>
    </article>
  );
}
