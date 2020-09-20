import React from "react";

export default function Experience() {
  return (
    <div id="experience" className="bg-gray-800 py-24">
      <div className="flex flex-row justify-center items-center">
        <div className="h-4 w-4 bg-white mr-2"></div>
        <h1 className="text-white uppercase text-3xl font-bold">Experience</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="flex flex-row bg-gray-200 border rounded-sm shadow-lg min-h-64 h-auto mb-24 p-4 w-full md:w-5/6 lg:w-2/5 ">
          <div className="flex flex-col w-1/3 justify-center items-start mb-8">
            <h1 className="text-2xl text-gray-800">2020 - Present</h1>
            <h2 className="text-xl text-black">Software Engineer</h2>
            <h3 className="text-base text-gray-800">BigBinary, Remote</h3>
          </div>
          <div className="flex justify-start items-center ml-4 w-2/3">
            Working remotely as Software Engineer. <br />
            Leading Project NitroQuiz.
            <br />
            Team player in NitroHelp UI revamp.
            <br />
            Code Reviews
          </div>
        </div>
        <div className="flex flex-row bg-gray-200 border rounded-sm shadow-lg min-h-64 h-auto mb-24 p-4 w-full md:w-5/6 lg:w-2/5">
          <div className="flex flex-col w-1/3 justify-center items-start mb-8">
            <h1 className="text-2xl text-gray-800">2019 - 2020</h1>
            <h2 className="text-xl text-black">Senior Software Engineer</h2>
            <h3 className="text-base text-gray-800">SurveySparrow, Kochi</h3>
          </div>
          <div className="flex justify-start items-center ml-4 w-2/3">
            Built Employee 360 Product from ground up. Build a scalable product
            where I worked closely with Product Management and was able to
            execute the requirements quickly. <br />
            Made SurveySparrow Offline App stable. Available on Play Store and
            App Store.
            <br />
            Team player in NPS development. Worked on NPS integrations, web-hook
            and scaling responses to Elastic Search.
          </div>
        </div>
        <div className="flex flex-row bg-gray-200 border rounded-sm shadow-lg min-h-64 h-auto p-4 w-full md:w-5/6 lg:w-2/5">
          <div className="flex flex-col w-1/3 justify-center items-start mb-8">
            <h1 className="text-2xl text-gray-800">2017 - 2020</h1>
            <h2 className="text-xl text-black">Programmer Analyst</h2>
            <h3 className="text-base text-gray-800">Cognizant, Chennai</h3>
          </div>
          <div className="flex justify-start items-center ml-4 w-2/3">
            Build multiple chat-bots and Virtual Assistants using various NLP
            services like Google Dialogflow, Microsoft Luis, Amazon Alexa and
            Lex.
            <br />
            Build a FAQs Chat Widget for e-commerce Website.
            <br />
            Created an Analytics Dashboard for Chat-bot Conversations.
            <br />
            Created a FB Chat Widget which handles queries related to airport
            lounges.
          </div>
        </div>
      </div>
    </div>
  );
}
