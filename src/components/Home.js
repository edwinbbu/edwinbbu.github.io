import React from "react";

export default function Home() {
  return (
    <>
      <div className="h-screen w-2/5 bg-gray-800 relative">
        <div className="h-screen w-screen flex flex-row justify-center items-center absolute left-0 top-0">
          <div className="flex flex-row justify-center items-center w-5/12 relative">
            <LeftContents />
            <RightContents />
          </div>
        </div>
      </div>
    </>
  );
}

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center bg-white p-2 pt-4">
      <a
        target="_blank"
        href="https://www.facebook.com/edwin.babu.188"
        className="px-2"
      >
        <i className="ri-facebook-fill ri-xl"></i>
      </a>
      <a
        target="_blank"
        href="https://stackoverflow.com/users/6679159/edwin-babu?tab=profile"
        className="px-2"
      >
        <i className="ri-stack-overflow-line ri-xl"></i>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/edwin-babu-59a62214b"
        className="px-2"
      >
        <i className="ri-linkedin-fill ri-xl"></i>
      </a>
      <a target="_blank" href="https://github.com/edwinbbu" className="px-2">
        <i className="ri-github-fill ri-xl"></i>
      </a>
    </div>
  );
};

const LeftContents = () => {
  return (
    <div className="bg-gray-200 border rounded-sm shadow-lg w-2/5">
      <div className="p-10">
        <div className="flex flex-col items-center justify-start">
          <img
            src="edwin.png"
            alt="Edwin Babu"
            className="w-48 h-48 object-cover rounded-full mb-8"
          />
          <h2 className="flex justify-center text-2xl tracking-wide font-bold mb-2">
            Edwin Babu
          </h2>
          <div style={{ height: 2 }} className="w-12 bg-gray-800"></div>
          <hr />
          <p className="flex justify-center my-4 font-thin uppercase tracking-widest">
            Software Engineer
          </p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

const RightContents = () => {
  return (
    <div className="max-w-sm ml-12">
      <h1 className="text-6xl font-bold">Hello</h1>
      <h2 className="text-xl mb-4">Here's who I am & what I do</h2>
      <div className="flex flex-row justify-start mb-4">
        <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs leading-4 font-medium rounded-xl text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
          Experience
        </button>
        <button className="ml-4 inline-flex items-center px-2 py-1 border border-black text-xs leading-4 font-medium rounded-xl text-black bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-black active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
          Projects
        </button>
      </div>
      <p className="text-justify">
        Full Stack Developer who leverages the latest technology to build Web
        applications. Having around 3 years experience and primarily focused on
        Node and React.
      </p>
    </div>
  );
};
