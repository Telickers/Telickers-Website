import RequestMeeting from "../Common/RequestMeeting";

export default function Why() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center">
      <div className="flex h-[600px] w-[600px] flex-col items-center justify-center space-y-20 rounded-full bg-[url('/abouticons/circle.svg')] bg-cover  px-20 text-center">
        <p className="text-5xl">Why Telickers</p>

        <p className="text-xl">
          It all started when we focused on the sound of our keyboards, clicking
          for the duty of technology. Technology Clickers We are here for you!
        </p>
        <RequestMeeting />
      </div>
    </section>
  );
}
