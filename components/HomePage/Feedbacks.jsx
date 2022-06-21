import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { feedbacks } from "data";

export default function Reviews() {
  return (
    <section aria-label="feedbacks" className="bg-brand py-10">
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
          <img
            src={feedback.img}
            alt={feedback.name}
            className="mx-auto mb-4 h-36 w-36 rounded-full object-cover md:mb-6 md:h-56 md:w-56"
          />
          <p className="font-bold">{feedback.name}</p>
          <p className="text-gray-500">{feedback.comp}</p>
        </div>

        {/* Feedback Text */}
        <div className="-mt-2 flex items-center px-5 md:-mt-24 md:px-10 lg:-mt-0 lg:px-2">
          <p className="text-[165px] font-thin md:text-[400px]">{"{"}</p>
          <h3 className="pt-7 text-xl md:pt-24 md:text-4xl">{feedback.text}</h3>
          <p className="text-[165px]  font-thin md:text-[400px]">{"}"}</p>
        </div>
      </div>
    </article>
  );
}
