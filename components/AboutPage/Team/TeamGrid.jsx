import { members } from "data";
import Bio from "./Bio";

export default function TeamGrid() {
  return (
    <section className="hidden py-24 lg:block">
      <h2 className="pb-16 text-center text-5xl font-bold">Meet Our Team</h2>
      <div className="grid grid-cols-3 place-items-center gap-5">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div className="flex w-[270px] flex-col items-center md:w-[300px]">
              <img
                src={member.image}
                alt="Team Member"
                loading="lazy"
                className="mb-3 h-[200px] w-[200px] rounded-full border-8 border-white object-cover shadow-md transition-opacity duration-300 ease-in-out hover:opacity-90 md:h-[300px] md:w-[300px]"
              />
              <p className="text-linear font-semibold">{member.name}</p>
              <p className="text-center font-bold text-[#B7B7B7]">
                {member.role}
              </p>
            </div>
            <Bio
              bio={member.bio}
              facebookUrl={member.facebookUrl}
              instagramUrl={member.instagramUrl}
              linkedinUrl={member.linkedinUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
