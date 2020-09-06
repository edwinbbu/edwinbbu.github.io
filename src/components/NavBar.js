import React from "react";
import { Link } from "react-router-dom";
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
            <div className="flex justify-end sm:ml-6 sm:flex">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-black focus:outline-none transition duration-150 ease-in-out"
              >
                ABOUT ME
              </Link>
              <Link
                to="/experience"
                className="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
              >
                EXPERIENCE
              </Link>
              <Link
                to="/"
                className="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
              >
                PROJECTS
              </Link>
              <Link
                to="/"
                className="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
              >
                HOBBIES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
