export default function ChallengeAccepted() {
  return (
    <section
      aria-label="challenge-accepted-shape"
      className="flex items-center py-10"
    >
      <div className="h-1 w-full bg-black"></div>
      <span className="-mt-[2.9px] text-2xl font-bold md:-mt-[13.3px] md:text-5xl lg:-mt-[12.7px]">
        {"{"}
      </span>
      <p className="w-[430ch] text-center text-sm font-semibold md:w-[180ch] md:text-lg lg:w-[150ch]">
        NOTHING IMPOSSIBLE, CHALLENGE ACCEPTED;
      </p>
      <span className="-mt-[2.9px] text-2xl font-bold md:-mt-[13.3px] md:text-5xl lg:-mt-[12.7px]">
        {"}"}
      </span>
      <div className="h-1 w-full bg-black"></div>
    </section>
  );
}
