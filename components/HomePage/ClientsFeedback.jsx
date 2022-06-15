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
    <section className="h-screen">
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
    <article className="relative flex h-screen flex-col bg-[#D9D9D9]">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:pr-10">
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
      <div className="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M20285.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </article>
  );
}
