import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import Backdrop from "./Backdrop";
import Form from "./Form";
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
      <button onClick={open} className="rounded-[50px] bg-white p-4 shadow-xl text-black">
        REQUEST A MEETING
      </button>
      <AnimatePresence>
        {modalOpen && (
          <Backdrop>
            <motion.div
              className="modal z-50 m-auto w-full rounded-xl bg-white p-5"
              onClick={(e) => e.stopPropagation()}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex w-full items-center justify-between text-black">
                <span className="text-lg font-bold">Meeting Request</span>
                <AiOutlineClose
                  onClick={close}
                  className="cursor-pointer"
                  size={20}
                />
              </div>

              <Form />
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
}
