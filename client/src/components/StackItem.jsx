import React from "react";
import { AiOutlineLink } from "react-icons/ai";

export default function Content({ user }) {
  return (
    <div className="flex">
      <div
        className="m-2 p-2 flex-col max-w-sm rounded-xl space-y-2 sm:py-4
        sm:flex sm:space-y-0 sm:space-x-2 border-2">
        <div className="flex flex-row">
          {user.owner ? (
            <img
              className="object-cover rounded-full h-[50px] w-[50px] border-white"
              src={user.owner.profile_image}
            />
          ) : (
            <img
              className="object-cover rounded-full h-[50px] w-[50px] border-2 border-white"
              src="https://cdn.onlinewebfonts.com/svg/img_542388.png"
            />
          )}
          <div className="flex-col mx-2">
            <h1 className="text-lg font-mono font-bold">
              {user.owner.display_name}
            </h1>
            <div className="text-sm text-gray-500 font-extralight">
              {user.owner.user_type}
            </div>
          </div>
          <div className="flex ml-auto m-1">
            <AiOutlineLink
              className="text-xl text-gray-500 cursor-pointer hover:text-blue-400  hover:animate-spin"
              onClick={() => window.open(user.link)}
            />
          </div>
        </div>
        <div className="text-justify pr-2 pt-2 align-middle break-words">
          {user.title}
        </div>
      </div>
    </div>
  );
}
