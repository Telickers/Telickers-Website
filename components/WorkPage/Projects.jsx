import { work } from 'data'
import BlurImage from '../Common/BlurImage';

export default function Projects() {
  return (
    <section aria-labelledby="our-projects" className="px-8 py-20 md:px-20">
      <h2
        id="services-section"
        className="pb-20 text-center text-xl font-bold md:text-3xl text-gray-600"
      >
        We design and build for people. And we are pretty good at it.
      </h2>
      <section
        aria-labelledby="projects-grid"
        className="grid grid-cols-1 place-items-center gap-7 md:grid-cols-2 lg:grid-cols-3"
      >
        {work.map((project) => (
          <BlurImage imageSrc={project.imageSrc} />
        ))}
      </section>
    </section>
  );
}
