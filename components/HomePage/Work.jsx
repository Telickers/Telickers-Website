import BlurImage from "../Common/BlurImage";
import { work } from "data";

export default function Work() {
  return (
    <section aria-labelledby="featured-work" className="relative py-28">
      <h2 id="featured-work" className="text-center text-5xl font-bold">
        Featured Work
      </h2>
      <p className="mx-auto mt-5 px-4 text-center text-2xl font-extralight lg:px-0">
        Collection of the best websites we have worked on. Dont wait, start
        yours!
      </p>
      <div className="mx-12 mt-20 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        {work.map((project) => (
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

