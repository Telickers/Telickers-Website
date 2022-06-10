import Link from "next/link";
import { AiFillAccountBook } from "../node_modules/react-icons/ai";

export default function Services() {
  let services = [
    {
      src: "/tag.svg",
      title: "Web Development",
      desc: ["Generating new websites", "Fixing bugs", "Improving performance"],
    },
    {
      src: "/paint.svg",
      title: "Design",
      desc: ["Generating new websites", "Fixing bugs", "Improving performance"],
    },
    {
      src: "/brain.svg",
      title: "Teaching",
      desc: ["Generating new websites", "Fixing bugs", "Improving performance"],
    },
    {
      src: "/lamp.svg",
      title: "Consultation",
      desc: ["Generating new websites", "Fixing bugs", "Improving performance"],
    },
  ];

  return (
    <>
      <div className="">
        <header className="my-10 flex justify-center text-7xl">Services</header>
        <div className="-mb-2 grid w-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((serv, idx) => (
            <article key={idx}>
              <img
                src={serv.src}
                className="z-10 mx-auto h-32 rounded-full bg-white"
                alt=""
              />
              <div className="text text-center">
                <h1 className="mb-5 mt-2 text-3xl">{serv.title}</h1>
                {serv.desc.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="z-0 mx-44 h-0.5 -translate-y-48 bg-black"></div>
      </div>

      <div className="my-20 flex justify-center">
        <Link href="/">
          <a className=" rounded-3xl bg-black px-8 py-3 text-white">
            Read More
          </a>
        </Link>
      </div>
    </>
  );
}
