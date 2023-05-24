import React from "react";
import Header from "../components/Navigation/Header";

export default function Cisco() {
  return (
    <Header>
      <div className="min-h-screen w-full ">
        <div className="flex flex-col justify-center items-center py-10">
          <button
            className="border-2 border-black shadow-2xl shadow-cyan-400 bg-gradient-to-l rounded-xl cursor-pointer
          items-center mt-10 p-10 flex flex-col hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            onClick={() => {
              window.open("https://cfnng.cisco.com/mibs", "_blank");
            }}>
            <p className="font-mono text-white font-bold text-2xl">
              Cisco Mibs
            </p>
            <p className="font-mono text-white text-lg text-opacity-70 py-2">
              Get your device here!
            </p>
          </button>
          <button
            className="border-2 border-black shadow-2xl shadow-cyan-400 bg-gradient-to-l rounded-xl cursor-pointer
          items-center mt-10 p-10 flex flex-col hover:bg-gradient-to-r from-cyan-500 to-blue-500"
            onClick={() => {
              window.open(
                "https://sec.cloudapps.cisco.com/security/center/softwarechecker.x",
                "_blank"
              );
            }}>
            <p className="font-mono font-bold text-2xl">Cisco Checker</p>
            <p className="font-mono text-lg text-opacity-100 py-2 text-gray-500">
              Get your device here!
            </p>
          </button>
          <button
            className="border-2 border-black shadow-2xl shadow-cyan-400 bg-gradient-to-l rounded-xl cursor-pointer
          items-center mt-10 p-10 flex flex-col hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            onClick={() => {
              window.open(
                "https://bst.cloudapps.cisco.com/bugsearch",
                "_blank"
              );
            }}>
            <p className="font-mono text-white font-bold text-2xl">
              Cisco Bug Search
            </p>

            <p className="font-mono text-white text-lg text-opacity-70 py-2">
              Get your device here!
            </p>
          </button>
          <button
            className="border-2 border-black shadow-2xl shadow-cyan-400 bg-gradient-to-l rounded-xl cursor-pointer
          items-center mt-10 p-10 flex flex-col hover:bg-gradient-to-r from-cyan-500 to-blue-500"
            onClick={() => {
              window.open("https://software.cisco.com/research/home", "_blank");
            }}>
            <p className="font-mono font-bold text-2xl">Cisco Research</p>
            <p className="font-mono text-lg text-opacity-100 py-2 text-gray-500">
              Get your device here!
            </p>
          </button>
        </div>
      </div>
    </Header>
  );
}
