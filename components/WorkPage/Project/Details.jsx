import BlurImage from "@/components/Common/BlurImage";
import useWindowSize from "@/hooks/useWindowSize";

export default function ProjectDetails({ details }) {
  return (
    <section className="flex min-h-screen flex-col items-center space-y-20 bg-brand py-16 px-12 lg:py-28 lg:px-20">
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
  const windowSize = useWindowSize();

  // reverse the rows for small screens (when there is only 1 column instead of 2)
  if (windowSize.width < 768) {
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
    // else swap them according to even & odd only
  } else {
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
}
