import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Bio({ bio, facebookUrl, instagramUrl, linkedinUrl }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      viewport={{ once: true, amount: 0.7 }}
      className="mt-2 flex w-[350px] flex-col items-center rounded-lg p-4 text-center shadow-lg xs:w-[300px] xs:p-2"
    >
      <p className="py-1.5 font-medium text-slate-500">{bio}</p>
      <div className="flex space-x-3 pt-5">
        <a href={facebookUrl} target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <AiOutlineLine className="rotate-90 " />
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <AiOutlineLine className="rotate-90 " />
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </motion.div>
  );
}
