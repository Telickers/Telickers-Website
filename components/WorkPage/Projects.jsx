export default function Projects() {
  return (
    <section aria-label="our-projects" className=" mx-10 flex space-x-96">
      <div className="images relative flex hover:blur-sm">
        <img src="/icons/bgWorks.svg" alt="im2" className="z-10" />
        <img
          src="/projects/a2solution-project.png"
          alt="im1"
          className="z-20 -translate-y-10 -translate-x-[70%] transition-all hover:-translate-y-20"
        />
      </div>
      <div className="description text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo sed
        perspiciatis, quaerat quos aut unde hic repellendus saepe consequuntur
        ea fuga porro quod maiores modi deleniti eum voluptates quae!
      </div>
    </section>
  );
}
