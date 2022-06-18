import RequestMeeting from "../Common/RequestMeeting";

export default function ContactHero() {
  return (
    <section className="radial-bg flex h-screen flex-col items-center justify-center text-white lg:items-start lg:px-32">
      <h1 className="text-left text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
        GET IN TOUCH
      </h1>
      <div className="flex w-full flex-col items-center justify-between space-y-7 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <p className="mt-4 text-xl font-bold md:text-2xl lg:mt-10">
            Interested in hiring us?
          </p>
          <p className="mt-1 text-xl font-thin md:text-2xl">
            Contact us and let&apos;s talk it over.
          </p>
        </div>
        <div>
          <RequestMeeting />
        </div>
      </div>
    </section>
  );
}
