import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import useScrollBlock from "@/hooks/useScrollBlock";

export default function RequestMeeting() {
  const [modalOpen, setModalOpen] = useState(false);

  const [blockScroll, allowScroll] = useScrollBlock();

  const close = () => {
    setModalOpen(false);
    allowScroll();
  };
  const open = () => {
    setModalOpen(true);
    blockScroll();
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <>
      <button onClick={open} className="rounded-[50px] bg-white p-4 shadow-xl">
        REQUEST A MEETING
      </button>
      <AnimatePresence>
        {modalOpen && (
          <Backdrop onClick={close}>
            <motion.div
              className="modal z-50 m-auto flex flex-col items-center rounded-xl bg-white py-0 px-[2rem]"
              onClick={(e) => e.stopPropagation()}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button onClick={close}>Close</button>
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
}

function Backdrop({ children, onClick }) {
  return (
    <motion.div
      style={{ margin: 0 }}
      className="fixed inset-0 z-40 flex h-full w-full items-center justify-center overflow-y-hidden bg-[#4e4e4ee1] backdrop-blur"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
