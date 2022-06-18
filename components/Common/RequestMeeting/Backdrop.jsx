import { motion } from "framer-motion";

export default function Backdrop({ children }) {
  return (
    <motion.div
      style={{ margin: 0 }}
      className="fixed inset-0 z-40 flex h-full w-full items-center justify-center bg-[#4e4e4ee1] backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
