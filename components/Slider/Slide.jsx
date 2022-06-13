import React from "react";

export default function Slide({ slide }) {
  return (
    <article className="relative flex h-[100vh] min-h-[400px] flex-col bg-[#D9D9D9] py-[100px] text-3xl">
      <h2 className="mb-20 ml-20 text-left text-5xl font-bold ">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="text-center">
          <img
            src={slide.img}
            alt=""
            className="mx-auto mb-6 h-56 rounded-full"
          />
          <h3 className="font-bold">{slide.name}</h3>
          <h4 className="text-gray-500">{slide.comp}</h4>
        </div>
        <div className="col-span-2 flex">
          <p className="mt-20 text-[400px]">{"{"}</p>
          <h3 className="text-center text-5xl">{slide.text}</h3>
          <p className="mt-20 text-[400px]">{"}"}</p>
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
