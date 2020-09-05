import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="contents fixed">
            <div className="flex items-center">
              <p className="text-lg font-bold">Edwin Babu</p>
            </div>
            <div className="flex justify-end sm:ml-6 sm:flex">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out"
              >
                About Me
              </Link>
              <Link
                to="/experience"
                className="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
              >
                Experience
              </Link>
              <Link
                to="/"
                className="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
              >
                Projects
              </Link>
              <Link
                to="/"
                className="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
