import React from "react";
import {
  AiFillFacebook,
  AiFillGoogleSquare,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="flex flex-row justify-end py-2">
        <p className="font-mono font-thin pt-2 text-white">
          Already have an account?{" "}
        </p>
        <button
          className="mx-2 border-2 p-1 rounded-md border-white text-white
        hover:border-black hover:bg-white hover:text-black hover:duration-500 hover:animate-pulse font-medium font-mono">
          Sign In
        </button>
      </div>
      <div className="border-2 rounded-xl mt-24 p-12 md:w-[30rem] m-auto shadow-2xl shadow-white">
        <div className="flex flex-col justify-center">
          <p className="text-center font-bold font-mono text-2xl">
            GET START WITH WUZASOS
          </p>
          <p className="text-center text-white font-mono font-thin pt-2">
            Hello, Create an Account is free
          </p>
        </div>
        <div className="m-auto mt-9 w-56">
          <p className="flex text-white flex-col">
            Username
            <input
              type="text"
              name="text"
              placeholder="KruzerX"
              className="bg-transparent placeholder:text-slate-600 border-2 border-slate-600 focus:outline-none rounded-md p-2"></input>
          </p>
        </div>
        <div className="m-auto mt-2 w-56">
          <p className="flex text-white flex-col">
            Email
            <input
              type="text"
              name="text"
              placeholder="KruzerX@sanghayang.com"
              className="bg-transparent placeholder:text-slate-600 border-2 border-slate-600 focus:outline-none rounded-md p-2"></input>
          </p>
        </div>
        <div className="m-auto mt-2 w-56">
          <p className="flex text-white flex-col">
            Password
            <input
              type="password"
              name="password"
              placeholder="At least 8 Character"
              className="border-2 border-slate-600 bg-transparent placeholder:text-slate-600 focus:outline-none rounded-md p-2"></input>
          </p>
          <div className="rounded-md p-2 font-bold text-black bg-white text-center mt-10 cursor-pointer hover:bg-white hover:text-black">
            <button>Sign Up to WUZASOS</button>
          </div>
          <div className="flex flex-row justify-between mt-10">
            <div className="border-2 mt-3 h-1 w-24 border-black inline-block rounded-full"></div>
            <div className="text-md font-sans text-black">OR</div>
            <div className="border-2 mt-3 h-1 w-24 border-black inline-block rounded-full"></div>
          </div>
          <button
            className="border-2 border-black flex flex-row cursor-pointer w-56 mt-4"
            onClick={() => {
              window.open("https://www.w3schools.com", "_blank");
            }}>
            <AiFillFacebook className="text-2xl text-white m-2 border-2 border-black" />
            <p className="mt-2 text-white ">Sign Up with Facebook</p>
          </button>
          <button
            className="border-2 border-black flex flex-row cursor-pointer w-56 mt-4"
            onClick={() => {
              window.open("https://www.w3schools.com", "_blank");
            }}>
            <AiFillGoogleSquare className="text-2xl text-white m-2 border-2 border-black" />
            <p className="mt-2 text-white ">Sign Up with Google</p>
          </button>
          <button
            className="border-2 border-black flex flex-row cursor-pointer w-56 mt-4"
            onClick={() => {
              window.open("https://www.w3schools.com", "_blank");
            }}>
            <AiFillTwitterSquare className="text-2xl text-white m-2 border-2 border-black" />
            <p className="mt-2 text-white ">Sign Up with Twitter</p>
          </button>
        </div>
      </div>
    </div>
  );
}
