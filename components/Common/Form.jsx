import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import Spinner from "./Spinner";

export default function Form({ closeModal, initialFocus }) {
  const name = useRef();
  const email = useRef();
  const company = useRef();
  const phone = useRef();
  const message = useRef();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await fetch("https://formspree.io/f/mlezkewo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name.current.value,
          Email: email.current.value,
          Company: company.current.value,
          Phone: phone.current.value,
          Message: message.current.value,
        }),
      });

      setLoading(false);
      closeModal && closeModal();
      toast.success("Your message was sent successfully!");

      name.current.value = "";
      email.current.value = "";
      phone.current.value = "";
      company.current.value = "";
      message.current.value = "";
    } catch (error) {
      setLoading(false);
      closeModal && closeModal();
      toast.error(
        "An error occured while sending the message. Please try again"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 py-6 sm:space-y-7"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <motion.input
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          ref={name}
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Full Name*"
          required
        />
        <motion.input
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          ref={company}
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Company Name"
        />
      </div>
      <div className="grid  grid-cols-1 gap-5 sm:grid-cols-2">
        <motion.input
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          ref={email}
          type="email"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Email*"
          required
        />
        <motion.input
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          ref={phone}
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Phone Number"
        />
      </div>
      <div>
        <motion.textarea
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.9, duration: 0.4 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          ref={message}
          className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Your message*"
          name="Message"
          required
          rows="4"
          cols="40"
        ></motion.textarea>
      </div>
      <motion.button
        ref={initialFocus}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { delay: 0.95, duration: 0.4 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        disabled={!name || !email || !message}
        type="submit"
        aria-label="send"
        className="w-full rounded-lg  bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
      >
        {loading ? <Spinner /> : "Send"}
      </motion.button>
    </form>
  );
}
