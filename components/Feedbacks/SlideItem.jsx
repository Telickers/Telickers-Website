export default function Slide({ feedback }) {
  return (
    <article className="relative flex h-screen flex-col bg-[#D9D9D9]">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:pr-10">
        {/* Client Details */}
        <div className="pt-44 md:pt-40 text-center lg:pt-12">
          <img
            src={feedback.img}
            alt={feedback.name}
            className="mx-auto mb-4 md:mb-6 w-36 h-36 md:w-56 md:h-56 rounded-full object-cover"
          />
          <p className="font-bold">{feedback.name}</p>
          <p className="text-gray-500">{feedback.comp}</p>
        </div>

        {/* Feedback Text */}
        <div className="-mt-2 md:-mt-24 lg:-mt-0 flex items-center px-5 md:px-10 lg:px-2">
          <p className="text-[165px] md:text-[400px]">{"{"}</p>
          <h3 className="pt-7 md:pt-24 text-xl md:text-4xl">{feedback.text}</h3>
          <p className="text-[165px]  md:text-[400px]">{"}"}</p>
        </div>
      </div>
      <div className="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M20285.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </article>
  );
}
