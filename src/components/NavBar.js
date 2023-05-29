import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fixed-navbar">
        <div className="flex justify-between h-24">
          <div className="contents">
            <div className="flex flex-row items-center">
              <div className="h-4 w-4 bg-gray-800 mr-2"></div>
              <h2 className="text-xl font-bold">Edwin Babu</h2>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <h2 className="text-base">SOFTWARE ENGINEER</h2>
            </div>
            <div className="hidden md:flex md:justify-end">
              <button
                onClick={() => {
                  window.open("https://github.com/edwinbbu", "_blank");
                }}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out text-gray-500 hover:text-gray-700 uppercase"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  window.open("https://medium.com/@edwinbbu", "_blank");
                }}
                className="ml-6 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out uppercase text-gray-500 hover:text-gray-700"
              >
                Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
