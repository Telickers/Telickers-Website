import RequestMeeting from "../Common/RequestMeeting";

export default function Why() {
  return (
    <section className="flex items-center justify-center bg-brand py-12">
      <div className="h-[400px] w-[330px] bg-[url('/abouticons/square.svg')] bg-contain bg-center bg-no-repeat md:w-[600px] md:h-[600px] md:bg-[url('/abouticons/circle.svg')]">
        <div className="flex h-full flex-col items-center justify-center px-3 md:px-12 text-center">
          <p className="mb-2 md:mb-6 text-3xl font-bold md:text-6xl">Why Telickers</p>
          <p className="mb-4 md:mb-8 text-xl md:text-3xl">
            It all started when we focused on the sound of our keyboards,
            clicking for the duty of technology. Technology Clickers We are here
            for you!
          </p>
          <RequestMeeting />
        </div>
      </div>
    </section>
  );
}
