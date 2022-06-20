import BlurImage from "@/components/Common/BlurImage";

export default function ProjectDetails({ details }) {
  return (
    <section className="flex flex-col items-center space-y-20 bg-brand py-16 lg:py-28 px-12 lg:px-20 min-h-screen">
      {details?.map((detail, index) => (
        <Detail
          key={index}
          index={index}
          description={detail.description}
          imageSrc={detail.imageSrc}
        />
      ))}
    </section>
  );
}

function Detail({ index, description, imageSrc }) {
  if (index % 2 === 0)
    return (
      <article className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <p className="text-center md:text-left">{description}</p>
        </div>
        <div className="h-full w-full">
          <BlurImage imageSrc={imageSrc} />
        </div>
      </article>
    );
  return (
      <article className="grid grid-cols-1 gap-7 md:grid-cols-2">
      <div className="h-full w-full">
        <BlurImage imageSrc={imageSrc} />
      </div>
        <div className="flex items-center justify-center">
        <p className="text-center md:text-left">{description}</p>
      </div>
    </article>
  );
}
