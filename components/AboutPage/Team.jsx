export default function Team() {
  return (
    <div className="flex w-screen flex-col ">
      <img
        src="/team/lefthand.svg"
        alt="lefthand"
        className="z-10 -mb-[150px] w-[250px] md:-mb-[350px] md:w-[600px]"
      />
      <div className="relative">
        <img
          src="/team/cloudteam.svg"
          alt="teamcloud"
          className="mx-auto rotate-[270deg] md:w-[70%] md:rotate-0"
        />

        <p className="absolute top-[20%] left-[25%] w-[50%] text-center text-xl text-white md:top-[25%] md:text-3xl">
          <span className="mb-10 block text-4xl font-bold">Team Telickers</span>
          in a nutshell, we are a group of developers and designers who found
          that our skills are valuable. So we decided to merge our skills into
          one team having a structure and the motivation for researching
          prototyping and building technology. That&apos;s how we got to build
          our team, and since then we have helped businesses freelancers,
          companies
        </p>
      </div>
      <img
        src="/team/righthand.svg"
        alt="righthand"
        className="z-10 ml-auto -mt-[150px] w-[250px] md:-mt-[370px] md:w-[600px]"
      />
    </div>
  );
}
