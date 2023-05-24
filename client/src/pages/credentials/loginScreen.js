import React from "react";
import {
  AiFillFacebook,
  AiFillGoogleSquare,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex flex-row justify-end py-2">
        <p className="mx-2 font-mono font-thin pt-2 text-white">
          Don't have an account yet?
        </p>
        <button
          className="mx-2 border-2 md:p-1 rounded-md border-white text-white
        hover:border-black hover:bg-white hover:text-black hover:duration-500 hover:animate-pulse font-medium font-mono">
          Sign Up
        </button>
      </div>
      <div className="border-2 rounded-xl mt-36 md:p-10 md:w-80 m-auto shadow-2xl shadow-white">
        <div className="flex flex-col justify-center">
          <p className="text-center font-bold font-mono text-2xl">WUZASOS</p>
          <p className="text-center text-white font-mono font-thin pt-2">
            Hello, Who's this?
          </p>
        </div>
        <div className="m-auto mt-10 w-56">
          <p className="flex text-white flex-col">
            Email
            <input
              type="text"
              name="text"
              placeholder="JohnDoe@sanghayang.com"
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
            <p className="pt-1 hover:text-blue-400 cursor-pointer underline">
              Forgot Password?
            </p>
          </p>
          <div className="rounded-md p-2 font-bold text-white bg-black text-center mt-10 cursor-pointer hover:bg-white hover:text-black">
            <button>Log In to WUZASOS</button>
          </div>
          <div className="flex flex-row justify-between mt-10">
            <div className="border-2 mt-3 h-1 w-24 border-green-500 inline-block rounded-full"></div>
            <div className="text-md font-sans text-green-500">OR</div>
            <div className="border-2 mt-3 h-1 w-24 border-green-500 inline-block rounded-full"></div>
          </div>
          <button
            className="border-2 flex flex-row cursor-pointer w-56 mt-4"
            onClick={() => {
              window.open("https://www.w3schools.com", "_blank");
            }}>
            <AiFillFacebook className="text-2xl text-white m-2 border-2 border-green-500" />
            <p className="mt-2 text-white ">Facebook</p>
          </button>
          <button
            className="border-2 flex flex-row cursor-pointer w-56 mt-4"
            onClick={() => {
              window.open("https://www.w3schools.com", "_blank");
            }}>
            <AiFillGoogleSquare className="text-2xl text-white m-2 border-2 border-green-500" />
            <p className="mt-2 text-white ">Google</p>
          </button>
          <button
            className="border-2 flex flex-row cursor-pointer w-56 mt-4"
            onClick={() => {
              window.open("https://www.w3schools.com", "_blank");
            }}>
            <AiFillTwitterSquare className="text-2xl text-white m-2 border-2 border-green-500" />
            <p className="mt-2 text-white ">Twitter</p>
          </button>
        </div>
      </div>
    </div>
  );
}
