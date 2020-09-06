import React from "react";

export default function Home() {
  return (
    <>
      <div className="h-screen w-2/5 bg-blue-200 relative">
        <div className="h-screen w-screen flex flex-row justify-center items-center absolute left-0 top-0">
          <div class="bg-indigo-100 font-bold border shadow-lg p-10 w-5/12 h-auto">
            <div class="flex flex-row justify-center items-center">
              <div className="flex flex-col bg-blue-100">
                <img
                  src="edwin.png"
                  alt="Edwin Babu"
                  style={{ width: 200, height: 200, borderRadius: "50%" }}
                />
                <h2 className="flex justify-center">Edwin Babu</h2>
                <hr />
                <p className="flex justify-center">Software Engineer</p>
              </div>
              <div>Right</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
