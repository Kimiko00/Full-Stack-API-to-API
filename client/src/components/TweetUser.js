import React from "react";
import { AiOutlineLink } from "react-icons/ai";

export default function TweetUser({ user }) {
  return (
    <div className="flex">
      <div
        className="m-2 p-2 flex-col max-w-sm rounded-xl space-y-2 sm:py-4
        sm:flex sm:space-y-0 sm:space-x-2 border-2">
        <div className="flex flex-row">
          <img
            className="object-cover rounded-full h-[50px] w-[50px] border-2 border-r-red-100
            border-t-red-100 border-b-red-100 border-l-white"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=826&t=st=1684390168~exp=1684390768~hmac=71f378bd2b25ba081010aac11d7aca6f57fc71602fcfe718d5f8110555fb9a2d"
          />
          <div className="flex-col mx-2">
            <h1 className="text-lg font-mono font-bold">{user.id}</h1>
            <div className="text-sm text-gray-500 font-extralight">
              @username
            </div>
          </div>
          <div className="flex ml-auto m-1">
            <AiOutlineLink className="text-xl text-gray-500 cursor-pointer hover:text-blue-400  hover:animate-spin" />
          </div>
        </div>
        <p className="text-justify pr-2 pt-2 align-middle">{user.text}</p>
      </div>
    </div>
  );
}
