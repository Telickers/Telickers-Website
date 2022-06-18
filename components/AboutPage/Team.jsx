import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const imageVariants = {
  hidden: {
    filter: "blur(12px)",
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const members = [
  {
    name: "Hussein Hassan",
    image: "/team/hussein.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequuntur voluptatem aliquam nemo quo quae nesciunt, omnis sint commodi voluptatibus",
    roleType: "Founder",
    workType: "Full-Stack Developer",
  },
  {
    name: "Jawad Nouredeen",
    image: "/team/jawad.png",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequuntur voluptatem aliquam nemo quo quae ff4f43f 4f 4f 4nt commodi voluptatibus",
    roleType: "Co-Founder",
    workType: "UI/UX Designer",
  },
  {
    name: "Abed Al-Hussein Saade",
    image: "/team/abed.jpg",
    bio: "Lorem ipsum 4f4f4f4 f4f4f4fdipisicing elit. Incidunt consequuntur voluptatem aliquam nemo quo quae nesciunt, omnis sint commodi voluptatibus",
    roleType: "Co-Founder",
    workType: "Frontend Developer",
  },
];

export default function Team() {
  const [[page], setPage] = useState([0, 0]);

  const memberIndex = wrap(0, members.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="py-24">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center md:space-x-3 lg:space-x-8">
          <img
            src="/icons/left-arrow.svg"
            alt="Left Arrow Icons"
            onClick={() => paginate(-1)}
            className="w-[55px] cursor-pointer"
          />
          <div className="flex w-[270px] flex-col items-center space-y-2 md:w-[300px]">
            <AnimatePresence exitBeforeEnter={true}>
              <motion.img
                key={page}
                src={members[memberIndex].image}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                alt="Team Member"
                loading="lazy"
                className="h-[200px] w-[200px] rounded-full border-8 border-white object-cover shadow-md md:h-[300px] md:w-[300px]"
              />
            </AnimatePresence>
            <div className="flex space-x-5 font-bold text-[#B7B7B7]">
              <span>{members[memberIndex].roleType}</span>
              <span>{members[memberIndex].workType}</span>
            </div>
          </div>
          <img
            src="/icons/right-arrow.svg"
            alt="Right Arrow Icons"
            className="w-[55px] cursor-pointer"
            onClick={() => paginate(1)}
          />
        </div>

        <div className="mt-4 flex w-[350px] flex-col items-center rounded-lg p-4 text-center shadow-xl">
          <p className="font-medium text-slate-500">
            {members[memberIndex].bio}
          </p>
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
    </section>
  );
}
