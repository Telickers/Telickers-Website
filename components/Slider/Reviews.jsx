import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Slide from "./Slide";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let data = [
  {
    name: "Mosh Hemadani",
    comp: "moshhamedani company",
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
    <section id="behind-the-animation" className="h-screen">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        grabCursor={true}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        {data.map((d, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Slide slide={d} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
