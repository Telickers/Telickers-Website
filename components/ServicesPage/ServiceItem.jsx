import Image from "next/image";

import { GoPrimitiveDot } from "react-icons/go";

export default function ServiceItem({ service }) {
  return (
    <article className="flex w-screen flex-col space-y-3 px-20">
      <div className="flex items-center">
        <div className="z-20 rounded-full bg-blue-300 p-3 text-blue-600">
          {service.Icon}
        </div>

        <div className="z-10 -ml-4 flex w-[320px] items-center justify-center rounded-r-full bg-[#4415ff33] py-2 text-2xl font-bold text-[#190A55]">
          <h2>{service.title}</h2>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-3 rounded-tl-md rounded-bl-md py-6 px-8 shadow-xl">
          {service.details.map((detail, idx) => (
            <p key={idx}>
              <GoPrimitiveDot className="inline text-3xl text-gray-500" />
              {detail}
            </p>
          ))}
        </div>

        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-br-[50%] rounded-tr-md shadow-xl">
          <div className="absolute left-0 z-10 flex h-full w-2/5 items-center justify-center bg-[#4315FF36] px-2 text-center text-5xl text-white">
            We Cover All your Web Needs
          </div>
          <Image
            src="/image-service-test.png"
            alt="image-service-test"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </article>
  );
}
