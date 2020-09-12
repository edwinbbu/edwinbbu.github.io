import React, { useState } from "react";
import classnames from "classnames";

const navLinks = {
  home: "home",
  experience: "experience",
  hobbies: "hobbies"
};

export default function Navbar() {
  const [active, setActive] = useState(navLinks.home);
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
              <a
                href="#home"
                onClick={() => setActive(navLinks.home)}
                className={classnames({
                  "inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out": true,
                  "text-black": active === navLinks.home,
                  "text-gray-500 hover:text-gray-700": active !== navLinks.home
                })}
              >
                ABOUT ME
              </a>
              <a
                href="#experience"
                onClick={() => setActive(navLinks.experience)}
                className={classnames({
                  "ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out": true,
                  "text-black": active === navLinks.experience,
                  "text-gray-500 hover:text-gray-700":
                    active !== navLinks.experience
                })}
              >
                EXPERIENCE
              </a>
              {/* <a
                href="#a"
                className="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
              >
                PROJECTS
              </a> */}
              <a
                href="#hobbies"
                onClick={() => setActive(navLinks.hobbies)}
                className={classnames({
                  "ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out": true,
                  "text-black": active === navLinks.hobbies,
                  "text-gray-500 hover:text-gray-700":
                    active !== navLinks.hobbies
                })}
              >
                HOBBIES
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
