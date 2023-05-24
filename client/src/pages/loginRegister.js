import React, { useState } from "react";
import localStorage from "localStorage";
import { AiOutlineGooglePlus } from "react-icons/ai";
import {
  CiUser,
  CiLock,
  CiMail,
  CiTwitter,
  CiLinkedin,
  CiMedicalClipboard,
} from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const submitHanddler = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/*Sign In section*/}
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {!open ? (
            /* content items stay on left and show sign in form*/
            <div className="duration-500 w-3/5 p-5">
              <div className="text-left font-bold">
                <span className="text-green-500">Company</span>Name
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-green-500 mb-2">
                  Sign in to Account
                </h2>
                <div className="border-2 w-10 border-green-500 inline-block mb-2 rounded-full"></div>
                {/*Icons section*/}
                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:border-blue-300">
                    <AiOutlineGooglePlus className="text-lg text-green-500" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:border-blue-300">
                    <CiTwitter className="text-lg text-green-500" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:border-blue-300">
                    <CiLinkedin className="text-lg text-green-500" />
                  </a>
                </div>
                {/* form login Section */}
                <p className="text-gray-400 my-3">or use existing account</p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-full border-2 border-green-400 hover:border-blue-400">
                    <CiUser className="text-gray-400 m-2" />
                    <input
                      type="email/username"
                      name="email/username"
                      placeholder="email/username"
                      className="bg-gray-100 focus:outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 mt-2 w-64 p-2 flex items-center rounded-full border-2 border-green-400 hover:border-blue-400">
                    <CiLock className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="bg-gray-100 focus:outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-64 mb-5 mt-1 text-gray-500">
                    <label className="flex items-center text-xs">
                      <input
                        type="checkbox"
                        name="Remember"
                        className="mr-1 hover:rotate-45 accent-green-400"
                      />
                      Remember me
                    </label>
                    <a href="#" className="text-xs  hover:text-blue-300">
                      Forgot Password?
                    </a>
                  </div>
                  <NavLink
                    to="/Home"
                    className="border-2 border-green-500 text-green-400 rounded-full px-12 py-2 inline-block
                  font-semibold hover:bg-green-500 hover:text-white"
                    onSubmit={submitHanddler}>
                    Sign In
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            /* move content item on right then sign up form */
            <div className="duration-500 w-3/5 p-5 translate-x-96">
              <div className="text-left font-bold">
                <span className="text-green-500">Company</span>Name
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-green-500 mb-2">
                  Register your Account
                </h2>
                <div className="border-2 w-10 border-green-500 inline-block mb-2 rounded-full"></div>
                {/* form Sign up Section */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 mt-5 w-64 p-2 flex items-center rounded-full border-2 border-green-400 hover:border-blue-400">
                    <CiUser className="text-gray-400 m-2" />
                    <input
                      type="username"
                      name="username"
                      placeholder="username"
                      className="bg-gray-100 focus:outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 mt-2 w-64 p-2 flex items-center rounded-full border-2 border-green-400 hover:border-blue-400">
                    <CiMail className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="bg-gray-100 focus:outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 mt-2 w-64 p-2 flex items-center rounded-full border-2 border-green-400 hover:border-blue-400">
                    <CiLock className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="bg-gray-100 focus:outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 mt-2 w-64 p-2 flex items-center rounded-full border-2 border-green-400 hover:border-blue-400">
                    <CiMedicalClipboard className="text-gray-400 m-2" />
                    <input
                      type="confpassword"
                      name="confpassword"
                      placeholder="confirm password"
                      className="bg-gray-100 focus:outline-none text-sm flex-1"
                    />
                  </div>
                  <NavLink
                    to="/Landing"
                    className="border-2 mt-16 border-green-500 text-green-400 rounded-full px-12 py-2 inline-block
                  font-semibold hover:bg-green-500 hover:text-white">
                    Sign Up
                  </NavLink>
                </div>
              </div>
            </div>
          )}
          {/* Slider section */}
          {!open ? (
            /* slider stay on right Sign up content */
            <div
              className={
                "duration-500 w-2/5 bg-green-500 text-white rounded-r-2xl py-36 px-12"
              }>
              <p className="text-3xl font-bold mb-2 break-all">New Commers?</p>
              <div className="border-2 w-10 border-white inline-block mb-2 rounded-full"></div>
              <p className="mb-10">
                Fill up personal information and start jurney with us
              </p>
              <button
                className="border-4 border-white rounded-full px-12 py-2 inline-block
              font-semibold hover:bg-white hover:text-green-500"
                onClick={() => setOpen(!open)}>
                Register Here
              </button>
            </div>
          ) : (
            /* move slider to left change content to Sign in */
            <div
              className={
                "duration-500 -translate-x-[33.6rem] w-2/5 bg-green-500 rounded-l-2xl text-white py-36 px-12"
              }>
              <p className="text-3xl font-bold mb-2 break-all">
                Already, with Us?
              </p>
              <div className="border-2 w-10 border-white inline-block mb-2 rounded-full"></div>
              <p className="mb-10">
                why not try to login if you have existing account
              </p>
              <button
                className="border-4 border-white rounded-full mt-10 px-12 py-2 inline-block
              font-semibold hover:bg-white hover:text-green-500"
                onClick={() => setOpen(!open)}>
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
