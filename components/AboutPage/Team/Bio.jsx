import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

export default function Bio({ bio, facebookUrl, instagramUrl, linkedinUrl }) {
  return (
    <div className="mt-2 flex w-[350px] flex-col items-center rounded-lg p-4 text-center shadow-xl">
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
    </div>
  );
}
