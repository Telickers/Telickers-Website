import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import SlideItem from "./SlideItem";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let data = [
  {
    name: "Mosh Hamedani",
    comp: "Code With Mosh",
    img: "/pfp/im1.png",
    text: " I’ve worked with many companies my business needs fast and organized work. Telickers gave me what I needed. Great thanks",
  },
  {
    name: "Bill Gates",
    comp: "Microsoft",
    img: "/pfp/im2.png",
    text: "None of my employess worked better than Telickers team. Trust them, they should lead your website.",
  },
  {
    name: "Steve Jobs",
    comp: "Apple",
    img: "/pfp/im3.jpg",
    text: "I wish I'am still alive, so that I can deal with Telickers. People are so lucky to have this company",
  },
  {
    name: "Mosh Hamedani",
    comp: "Code With Mosh",
    img: "/pfp/im1.png",
    text: " I’ve worked with many companies my business needs fast and organized work. Telickers gave me what I needed. Great thanks",
  },
  {
    name: "Bill Gates",
    comp: "Microsoft",
    img: "/pfp/im2.png",
    text: "None of my employess worked better than Telickers team. Trust them, they should lead your website.",
  },
  {
    name: "Steve Jobs",
    comp: "Apple",
    img: "/pfp/im3.jpg",
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
