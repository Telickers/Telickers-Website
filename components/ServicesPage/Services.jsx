import { services } from "data";
import ServiceItem from "./ServiceItem";

export default function ServicesSection() {
  return (
    <section className="flex flex-col justify-center items-center space-y-16 bg-brand py-20">
      {services.map((service) => (
        <ServiceItem service={service} key={service.title} />
      ))}
    </section>
  );
}
