import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

import { members } from "data";

export default function TeamGrid() {
  return (
    <section className="hidden py-24 lg:block">
      <h2 className="pb-16 text-center text-5xl font-bold">Meet Our Team</h2>
      <div className="grid grid-cols-3 place-items-center gap-5">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div className="flex w-[270px] flex-col items-center space-y-2 md:w-[300px]">
              <img
                src={member.image}
                alt="Team Member"
                loading="lazy"
                className="h-[200px] w-[200px] rounded-full border-8 border-white object-cover shadow-md md:h-[300px] md:w-[300px]"
              />
              <p className="text-center font-bold text-[#B7B7B7]">
                {member.role}
              </p>
            </div>
            <div className="mt-4 flex w-[350px] flex-col items-center rounded-lg p-4 text-center shadow-xl">
              <p className="py-1.5 font-medium text-slate-500">{member.bio}</p>
              <div className="flex space-x-3 pt-5">
                <a>
                  <FaFacebookF />
                </a>
                <AiOutlineLine className="rotate-90 " />
                <a>
                  <FaInstagram />
                </a>
                <AiOutlineLine className="rotate-90 " />
                <a>
                  <FaLinkedinIn />
                </a>
              </div>
              <p className="pt-1.5">
                <a href="mailto:hello@telickers.net">hello@telickers.net</a>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
