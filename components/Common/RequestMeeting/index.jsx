import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import { useState } from "react";

import useScrollBlock from "@/hooks/useScrollBlock";
import Backdrop from "./Backdrop";
import Form from "../Form";

export default function RequestMeeting() {
  const [isOpen, setIsOpen] = useState(false);

  const [blockScroll, allowScroll] = useScrollBlock();

  const open = () => {
    setIsOpen(true);
    blockScroll();

    toast(
      (t) => {
        const closeModal = () => {
          toast.dismiss(t.id);
          setIsOpen(false);
          allowScroll();
        };

        return (
          <section>
            <div className="flex w-full items-center justify-between text-black">
              <span className="text-lg font-bold">Meeting Request</span>
              <AiOutlineClose
                onClick={closeModal}
                className="cursor-pointer"
                size={20}
              />
            </div>
            <Form closeModal={closeModal} />
          </section>
        );
      },
      {
        position: "top-center",
        duration: 10000000,
      }
    );
  };

  return (
    <>
      {isOpen && <Backdrop />}
      <button
        onClick={open}
        className="btn-secondary"
      >
        REQUEST A MEETING
      </button>
    </>
  );
}
