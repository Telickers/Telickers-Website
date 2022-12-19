export default function Tech() {
  return (
    <div className="bg-[#4415ff33] my-8">
      <div className="z-20 mx-auto w-full py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
          <span className="block text-[#190A55] ">Technologies We Use</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-xl text-gray-400">
          Interested in knowing what technologies we use to build these cool
          projects?
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-9 inline-flex rounded-md shadow">
            <a
              href=""
              className="w-full rounded-lg  bg-indigo-600 py-4 px-6 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
            >
              Check it here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
