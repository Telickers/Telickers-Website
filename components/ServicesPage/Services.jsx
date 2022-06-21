import RequestMeeting from "../Common/RequestMeeting";
import ServiceItem from "./ServiceItem";
import { services } from "data";

export default function ServicesSection() {
  return (
    <section className="bg-brand py-28">
      <div className="flex flex-col items-center justify-center space-y-44">
        {services.map((service) => (
          <ServiceItem service={service} key={service.title} />
        ))}
      </div>
      <div className="mt-28 flex justify-center">
        <RequestMeeting />
      </div>
    </section>
  );
}
