import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item, toggle }) => {
  return (
    <motion.li variants={variants}>
      <Link href={item.href} passHref>
        <p className="text-placeholder" onClick={toggle}>
          {item.text}
        </p>
      </Link>
    </motion.li>
  );
};
