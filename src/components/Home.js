import React from "react";

export default function Home() {
  return (
    <>
      <div className="h-screen w-2/5 bg-blue-200 relative">
        <div className="h-screen w-screen flex flex-row justify-center items-center absolute left-0 top-0">
          <div className="bg-indigo-100 border shadow-lg p-12 w-5/12">
            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col">
                <img
                  src="edwin.png"
                  alt="Edwin Babu"
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    marginBottom: 4
                  }}
                />
                <h2 className="flex justify-center font-bold mb-4">
                  Edwin Babu
                </h2>
                <hr />
                <p className="flex justify-center my-4">SOFTWARE ENGINEER</p>
                <SocialLinks />
              </div>
              <div className="max-w-sm ml-8">
                <h1 className="text-6xl font-bold">Hello</h1>
                <h2 className="text-xl mb-4">Here's who I am & what I do</h2>
                <div className="flex flex-row justify-start mb-4 ml-6">
                  <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs leading-4 font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    Experience
                  </button>
                  <button className="ml-4 inline-flex items-center px-2 py-1 border border-black text-xs leading-4 font-medium rounded-xl text-black bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-black active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                    Projects
                  </button>
                </div>
                <p className="text-sm text-justify">
                  Full Stack Developer who leverages the latest technology to
                  build Web applications. Having around 3 years experience and
                  primarily focused on Node and React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center">
      <a
        target="_blank"
        href="https://www.facebook.com/edwin.babu.188"
        className="px-1"
      >
        <i className="ri-facebook-fill ri-xl"></i>
      </a>
      <a
        target="_blank"
        href="https://stackoverflow.com/users/6679159/edwin-babu?tab=profile"
        className="px-1"
      >
        <i className="ri-stack-overflow-line ri-xl"></i>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/edwin-babu-59a62214b"
        className="px-1"
      >
        <i className="ri-linkedin-fill ri-xl"></i>
      </a>
      <a target="_blank" href="https://github.com/edwinbbu" className="px-1">
        <i className="ri-github-fill ri-xl"></i>
      </a>
    </div>
  );
};
