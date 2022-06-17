export default function Team() {
  return (
    <div className="flex w-screen flex-col">
      <img
        src="/team/lefthand.svg"
        alt="lefthand"
        className="z-20 -mb-[350px] w-[600px]"
      />
      <div className="relative">
        <img
          src="/team/cloudteam.svg"
          alt="teamcloud"
          className="mx-auto w-[70%]"
        />

        <p className="absolute top-[50%] left-[50%] w-[50%]  text-center text-3xl text-white">
          in a nutshell, we are a group of developers and designers who found
          that our skills are valuable. So we decided to merge our skills into
          one team having a structure and the motivation for researching
          prototyping and building technology. That’s how we got to build our
          team, and since then we have helped businesses freelancers, companies
        </p>
      </div>
      <img
        src="/team/righthand.svg"
        alt="righthand"
        className="z-20 -mt-[400px] ml-auto w-[600px]"
      />
    </div>
  );
}
