import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let data = [
  {
    name: "Mosh Hamedani 1",
    comp: "Code With Mosh",
    img: "/clients/im1.png",
    text: " I’ve worked with many companies my business needs fast and organized work. Telickers gave me what I needed. Great thanks",
  },
  {
    name: "Bill Gates 1",
    comp: "Microsoft",
    img: "/clients/im2.png",
    text: "None of my employess worked better than Telickers team. Trust them, they should lead your website.",
  },
  {
    name: "Steve Jobs 1",
    comp: "Apple",
    img: "/clients/im3.jpg",
    text: "I wish I'am still alive, so that I can deal with Telickers. People are so lucky to have this company",
  },
  {
    name: "Mosh Hamedani 2",
    comp: "Code With Mosh",
    img: "/clients/im1.png",
    text: " I’ve worked with many companies my business needs fast and organized work. Telickers gave me what I needed. Great thanks",
  },
  {
    name: "Bill Gates 2",
    comp: "Microsoft",
    img: "/clients/im2.png",
    text: "None of my employess worked better than Telickers team. Trust them, they should lead your website.",
  },
  {
    name: "Steve Jobs 2",
    comp: "Apple",
    img: "/clients/im3.jpg",
    text: "I wish I'am still alive, so that I can deal with Telickers. People are so lucky to have this company",
  },
];

export default function Reviews() {
  return (
    <section className=" pb-10">
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
        {data.map((feedback) => {
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
    <article className="relative flex w-screen flex-col bg-[url('/cloud3.svg')] bg-contain bg-no-repeat md:bg-cover">
      <div className="z-10 grid grid-cols-1 items-center lg:grid-cols-2 lg:pr-10">
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
          <p className="text-[165px] md:text-[400px]">{"{"}</p>
          <h3 className="pt-7 text-xl md:pt-24 md:text-4xl">{feedback.text}</h3>
          <p className="text-[165px]  md:text-[400px]">{"}"}</p>
        </div>
      </div>
    </article>
  );
}
