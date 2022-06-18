import RequestMeeting from "../Common/RequestMeeting";

export default function Why() {
  return (
    <section className="relative p-6 flex h-screen flex-col items-center justify-center bg-brand">
      <div className="flex h-full w-full flex-col items-center justify-center md:space-y-20 space-y-10 bg-[url('/abouticons/square.svg')] bg-contain bg-center bg-no-repeat md:px-20 px-10 text-center md:h-[700px] md:w-[700px] md:rounded-full md:bg-[url('/abouticons/circle.svg')]">
        <p className="text-3xl font-bold md:text-6xl">Why Telickers</p>

        <p className="md:text-3xl text-2xl">
          It all started when we focused on the sound of our keyboards, clicking
          for the duty of technology. Technology Clickers We are here for you!
        </p>
        <RequestMeeting />
      </div>
    </section>
  );
}
