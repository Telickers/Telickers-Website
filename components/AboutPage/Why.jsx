import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

export default function Why() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <section className="relative flex h-screen flex-col items-center justify-center">
      <div className="flex h-[600px] w-[600px] flex-col items-center justify-center space-y-20 rounded-full bg-[url('/abouticons/circle.svg')] bg-cover  px-20 text-center">
        <p className="text-5xl">Why Telickers</p>

        <p className="text-xl">
          It all started when we focused on the sound of our keyboards, clicking
          for the duty of technology. Technology Clickers We are here for you!
        </p>

        <button
          className="rounded-[50px] bg-white p-4 shadow-xl transition-all hover:scale-[1.1]"
          onClick={() => (modalOpen ? close() : open())}
        >
          REQUEST A MEETING
        </button>
      </div>

      {modalOpen && (
        <Modal modalOpen={modalOpen} handleClose={close} text={"Hello World"} />
      )}
    </section>
  );
}
