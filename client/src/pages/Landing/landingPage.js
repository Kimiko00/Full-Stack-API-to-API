import React from "react";

export default function Landing() {
  return (
    <>
      <div className=" min-h-screen w-full bg-forest bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="md:flex md:flex-row md:items-center md:justify-between md:py-4 px-4 pt-4">
          <h1 className="font-black text-6xl font-mono antialiased md:ml-5">
            Wuzasos
          </h1>
          <div className="flex flex-row font-mono text-lg font-bold pt-4">
            <button
              className="md:p-2 md:ml-10 mr-2 md:mr-10 border-2 border-white rounded-lg hover:shadow-2xl
            hover:bg-white hover:shadow-blue-300 hover:border-blue-300 cursor-pointer">
              login
            </button>
            <button
              className="md:p-2 md:mr-10 border-2 border-white rounded-lg hover:shadow-2xl
            hover:bg-white hover:shadow-blue-300 hover:border-blue-300 cursor-pointer">
              logout
            </button>
          </div>
        </div>
        <div className="flex pt-44 md:pt-96 justify-center items-center antialiased">
          <div className="flex flex-col">
            <h1 className="pl-3 font-medium text-lg font-mono pb-1">
              Enjoy the current view
            </h1>
            <h1 className="border-4 rounded-xl p-2 font-black text-6xl font-mono">
              Hello, Welcome
            </h1>
            <h1 className="text-end pr-3 font-medium text-white text-lg font-mono pt-1">
              Prototype ver.0.0.1
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
