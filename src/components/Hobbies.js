import React from "react";

export default function Experience() {
  return (
    <div
      id="hobbies"
      className="flex flex-col justify-start items-center h-screen bg-gray-800 p-4 md:p-12 lg:p-24"
    >
      <div className="flex flex-row justify-center items-center">
        <div className="h-4 w-4 bg-white mr-2"></div>
        <h1 className="text-white uppercase text-3xl font-bold">Hobbies</h1>
      </div>
      <ul className="list-disc flex flex-col items-start justify-center self-center my-auto p-2 lg:p-8 text-white text-xl">
        <li>
          Apart from being a web developer, I enjoy playing football, cricket,
          batminton.
        </li>
        <li>When forced indoors. I like to play fifa, watch movies.</li>
        <li>
          I also like to read technical articles to my interest and also likes
          to write answers in quora.
        </li>
      </ul>
    </div>
  );
}
