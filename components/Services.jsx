import Link from "next/link";
import { AiFillAccountBook } from "../node_modules/react-icons/ai";

export default function Services() {
  let services = [
    {
      src: "/icons/code.svg",
      title: "Web Development",
      desc: [
        "will enter the text here later",
        "will enter the text here later",
        "will enter the text here later",
      ],
    },
    {
      src: "/icons/palet.svg",
      title: "UI / UX Design",
      desc: [
        "will enter the text here later",
        "will enter the text here later",
        "will enter the text here later",
      ],
    },
    {
      src: "/icons/brain.svg",
      title: "Tutoring",
      desc: [
        "will enter the text here later",
        "will enter the text here later",
        "will enter the text here later",
      ],
    },
    {
      src: "/icons/lamp.svg",
      title: "Software Consultation",
      desc: [
        "will enter the text here later",
        "will enter the text here later",
        "will enter the text here later",
      ],
    },
  ];

  return (
    <section className="py-4">
      <div className="flex justify-center flex-col items-center">
        <h2 className="pb-16 text-center text-5xl font-bold">Our Services</h2>
        <div className="grid w-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
          {services.map((serv) => (
            <article key={serv.src}>
              <div className="flex items-center justify-center bg-black w-20 h-20 rounded-full mx-auto">
                <img
                  src={serv.src}
                  className="mx-auto w-10 h-10"
                  alt={serv.title}
                />
              </div>
              <div className="text text-center pt-3">
                <span className="block pb-1 text-2xl font-bold">
                  {serv.title}
                </span>
                {serv.desc.map((d, i) => (
                  <p className="text-sm" key={i}>{d}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        {/* <div className="z-0 mx-44 h-0.5 -translate-y-48 bg-black"></div> */}
      </div>

      <div className="mt-20 flex justify-center">
        <Link href="/services">
          <a className="rounded-3xl bg-black px-8 py-3 text-white">
            Read More
          </a>
        </Link>
      </div>
    </section>
  );
}
