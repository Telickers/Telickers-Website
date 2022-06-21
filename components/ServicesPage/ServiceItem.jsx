export default function ServiceItem({ service }) {
  return (
    <article className="flex flex-col">
      <div className="flex items-center">
        <div className="z-20 rounded-full bg-blue-300 p-3 text-blue-600">
          {service.Icon}
        </div>

        <div className="z-10 -ml-4 flex w-[220px] items-center justify-center rounded-full bg-[#4415ff33] py-1 font-bold text-[#190A55]">
          <h2>{service.title}</h2>
        </div>
      </div>
    </article>
  );
}
