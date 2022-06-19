import { useState, useRef } from "react";
import toast from "react-hot-toast";

import Spinner from "../Spinner";

export default function Form({ closeModal }) {
  const name = useRef();
  const email = useRef();
  const company = useRef();
  const phone = useRef();
  const service = useRef();
  const meetingType = useRef();
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
          Service: service.current.value,
          "Meeting Type": meetingType.current.value,
          Phone: phone.current.value,
          Message: message.current.value,
        }),
      });

      setLoading(false);
      closeModal();
      const t = toast.success("Your message was sent successfully!");
      setTimeout(() => toast.dismiss(t.id), 2500);

      name.current.value = "";
      email.current.value = "";
      phone.current.value = "";
      company.current.value = "";
      service.current.value = "";
      meetingType.current.value = "";
      message.current.value = "";
    } catch (error) {
      setLoading(false);
      closeModal();
      const t = toast.error(
        "An error occured while sending the message. Please try again"
      );
      setTimeout(() => toast.dismiss(t.id), 2500);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 py-6 sm:space-y-7"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          ref={name}
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Full Name*"
          required
        />
        <input
          ref={company}
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Company Name"
        />
      </div>
      <div className="grid  grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          ref={email}
          type="email"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Email*"
          required
        />
        <input
          ref={phone}
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Phone Number"
        />
      </div>
      <div className="grid  grid-cols-1 gap-5 sm:grid-cols-2">
        <select
          ref={service}
          className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-700 shadow-sm focus:outline-none"
          name="serviceType"
          required
        >
          <option value="">Service Type</option>
          <option value="Web Design">Web Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Software Consultation">Software Consultation</option>
          <option value="Tutoring">Tutoring</option>
        </select>

        <select
          ref={meetingType}
          className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-700 shadow-sm focus:outline-none"
          name="meetingType"
          required
        >
          <option value="">Meeting Type</option>
          <option value="Online">Online</option>
          <option value="In Person">In Person</option>
        </select>
      </div>
      <div>
        <textarea
          ref={message}
          className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your message*"
          name="Message"
          required
          rows="4"
          cols="40"
        ></textarea>
      </div>
      <div className="ml-auto">
        <button
          disabled={!name || !email || !message}
          type="submit"
          aria-label="send"
          className="w-full rounded-lg  bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
        >
          {loading ? <Spinner /> : "Send"}
        </button>
      </div>
    </form>
  );
}
