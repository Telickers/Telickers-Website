import { work } from "data";
import BlurImage from "../Common/BlurImage";
import NoScrollLink from "../Common/NoScrollLink";

export default function Projects() {
  return (
    <section
      aria-labelledby="our-projects"
      className="bg-brand px-8 py-20 pt-32 md:px-20"
    >
      <h2
        id="services-section"
        className="pb-12 md:pb-16 text-center text-xl font-bold text-gray-600 md:text-3xl"
      >
        We design and build for people. And we are pretty good at it.
      </h2>
      <section
        aria-labelledby="projects-grid"
        className="grid grid-cols-1 place-items-center gap-7 md:grid-cols-2 lg:grid-cols-3"
      >
        {work.map((project) => (
          <NoScrollLink href={`/work/${project.id}`} passhref>
            <div className="group relative h-full w-full cursor-pointer transition-all duration-300 ease-in-out lg:hover:scale-95">
              <BlurImage imageSrc={project.imageSrc} />
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-lg bg-black/70 opacity-0 transition-all duration-300 ease-in-out lg:group-hover:opacity-100">
                <p className="text-2xl font-bold text-white">{project.name}</p>
              </div>
            </div>
          </NoScrollLink>
        ))}
      </section>
    </section>
  );
}
