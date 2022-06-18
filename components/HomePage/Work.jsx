import Image from "next/image";
import { useState } from "react";

const data = [
  {
    name: "Mogetee Menu",
    imageSrc: "/projects/mogetee.png",
    link: "https://mogetee-menu.vercel.app",
  },
  {
    name: "A2Solution",
    imageSrc: "/projects/a2solution-project.png",
    link: "https://a2solution.ca",
  },
  {
    name: "Elotarz Media",
    imageSrc: "/projects/elotarzmedia-project.png",
    link: "https://elotarzmedia.net",
  },
  {
    name: "Deebee",
    imageSrc: "/projects/deebee-project.png",
    link: "https://deebee.shop",
  },
  {
    name: "ABIS",
    imageSrc: "/projects/abis-project.png",
    link: "https://ahlul-bayt.ca",
  },
  {
    name: "Window Design",
    imageSrc: "/projects/window-design-project.png",
    link: "https://window-design.vercel.app",
  },
];

export default function Work() {
  return (
    <section className="relative py-28">
      <h2 className="text-center text-5xl font-bold">Featured Work</h2>
      <p className="mx-auto mt-5 px-4 text-center text-2xl font-extralight lg:px-0">
        Collection of the best websites we have worked on. Dont wait, start
        yours!
      </p>
      <div className="mx-12 mt-20 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <article key={project.name}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <BlurImage imageSrc={project.imageSrc} />
              <div className="text-left">
                <h3 className="mb-5 mt-4 text-4xl">{project.name}</h3>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlurImage({ imageSrc }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg">
      <Image
        alt={imageSrc}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        className={`duration-700 ease-in-out ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
