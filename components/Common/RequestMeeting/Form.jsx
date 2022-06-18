export default function Form() {
  return (
    <form className="flex flex-col space-y-5 py-6 sm:space-y-7">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Full Name*"
          required
        />
        <input
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Company Name"
        />
      </div>
      <div className="grid  grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          type="email"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Email*"
          required
        />
        <input
          type="text"
          className="w-full appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Phone Number"
        />
      </div>
      <div className="grid  grid-cols-1 gap-5 sm:grid-cols-2">
        <select
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
          className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-700 shadow-sm focus:outline-none"
          name="meetingType"
        >
          <option value="">Meeting Type</option>
          <option value="Online">Online</option>
          <option value="In Person">In Person</option>
        </select>
      </div>
      <div>
        <textarea
          className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your message*"
          name="Message"
          required
          rows="4"
          cols="40"
        ></textarea>
      </div>
      <div className="ml-auto">
        <button
          type="submit"
          className="w-full rounded-lg  bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
        >
          Send
        </button>
      </div>
    </form>
  );
}
