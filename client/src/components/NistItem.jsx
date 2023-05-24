import React from "react";
import { AiOutlineLink } from "react-icons/ai";

export default function NistItem({ user }) {
  const timestamp = Date.now();

  return (
    <div className="flex">
      <div
        className="m-2 p-2 flex-col max-w-sm rounded-xl space-y-2 sm:py-4
        sm:flex sm:space-y-0 sm:space-x-2 border-2">
        <div className="flex flex-row">
          <img
            className="object-cover rounded-full h-[50px] w-[50px] border-2 border-white"
            src="https://static.vecteezy.com/system/resources/previews/000/497/896/original/code-optimization-icon-design-vector.jpg"
          />
          <div className="flex-col mx-2">
            <div className="text-lg font-mono font-bold">{user.id}</div>
            <div className="flex flex-row mb-2">
              <div className="p-1 mr-2 text-sm bg-black rounded-md text-white font-mono font-extralight">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).format(timestamp)}
              </div>
              <div className="p-1 mr-2 text-sm font-mono font-extralight bg-blue-400 rounded-full">
                {user.vulnStatus}
              </div>
              <div className="p-1 text-sm font-extralight font-mono text-black bg-red-300 rounded-full">
                {user.metrics.cvssMetricV2[0].baseSeverity}
              </div>
            </div>
          </div>
          <div className="flex ml-auto m-1">
            <AiOutlineLink
              className="text-xl text-gray-500 cursor-pointer hover:text-blue-400  hover:animate-spin"
              /*guarding untuk kalau ada url ke 3 kalau tidak pakai url ke 1*/
              onClick={() => window.open(user.references[0].url)}
            />
          </div>
        </div>
        <div className="flex text-justify pr-2">
          {user.descriptions[0].value}
        </div>
        <div className="flex flex-row pt-2 justify-between">
          <p className="p-1 font-mono font-semibold bg-blue-50 rounded-full">
            open:{" "}
            {new Date(user.published).toLocaleDateString(undefined, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
          <p className="p-1 font-mono font-semibold bg-red-100 rounded-full">
            modified:{" "}
            {new Date(user.lastModified).toLocaleDateString(undefined, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
