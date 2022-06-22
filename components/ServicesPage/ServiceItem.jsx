import Image from "next/image";

import { BsStars } from "react-icons/bs";

export default function ServiceItem({ service }) {
  return (
    <article className="flex w-screen flex-col space-y-3 px-5 lg:px-20">
      {/* Service Title */}
      <div className="flex items-center">
        <div className="z-20 rounded-full bg-blue-300 p-3 text-blue-600">
          {service.Icon}
        </div>
        <div className="z-10 -ml-4 flex w-[320px] items-center justify-center rounded-r-full bg-[#4415ff33] py-2 text-lg font-bold text-[#190A55] sm:text-xl md:text-2xl">
          <h2>{service.title}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-3">
        {/* Image for mobiles */}
        <div className="aspect-w-16 aspect-h-9 relative block overflow-hidden rounded-tr-md rounded-tl-md lg:hidden lg:rounded-tl-[0]">
          <div className="absolute left-0 z-10 flex h-full w-full items-center justify-center bg-[#4415ff57] px-2 text-center capitalize text-3xl text-white">
            {service.caption}
          </div>
          <Image
            src={service.imageSrc}
            alt="image-service-test"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-3 rounded-bl-md rounded-br-[50%] p-6 pb-8 shadow-xl lg:rounded-tl-md lg:rounded-br-[0%] lg:pt-8 lg:pb-6">
          {service.details.map((detail, idx) => (
            <div
              key={idx}
              className="flex max-w-[80%] items-center space-x-1 md:max-w-full"
            >
              <BsStars size={20} color="gold" />
              <p className="lg:text-lg">{detail}</p>
            </div>
          ))}
        </div>

        {/* Image for large screens */}
        <div className="aspect-w-16 aspect-h-9 relative hidden overflow-hidden rounded-br-[50%] rounded-tr-md shadow-xl lg:block">
          <div className="absolute left-0 z-10 flex h-full w-2/5 items-center justify-center bg-[#4415ff57] px-2 text-center text-4xl capitalize text-white">
            {service.caption}
          </div>
          <Image
            src={service.imageSrc}
            alt="image-service-test"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </article>
  );
}
