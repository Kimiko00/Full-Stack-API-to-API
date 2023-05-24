import React from "react";
import { AiOutlineLink } from "react-icons/ai";

export default function NewsItem({ user }) {
  return (
    <div className="w-full justify-center items-center">
      <div className="flex border-2 border-black mb-10">
        <div className="md:shrink-0 ">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://img.freepik.com/free-vector/news-concept-landing-page_52683-18565.jpg?w=1380&t=st=1684953399~exp=1684953999~hmac=86cd8f7c084787e302156cf8e07c5a712f8d48b49458991eecf1500b140d04c4"
            alt="news"
          />
        </div>
        <div className="p-8">
          <AiOutlineLink
            className="text-xl text-gray-500 cursor-pointer hover:text-blue-400  hover:animate-spin"
            /*guarding untuk kalau ada url ke 3 kalau tidak pakai url ke 1*/
            onClick={() => window.open(user.link)}
          />
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Mandiant Blog News
          </h1>
          <p className="mt-2 text-slate-500">{user.text}</p>
        </div>
      </div>
    </div>
  );
}
