import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar({ setSearch, getUsers }) {
  return (
    <div className="realtive flex flex-col">
      <div className="flex flex-col space-y-4 w-full items-center">
        <div className="flex group">
          <p
            className="text-center font-semibold font-mono text-2xl text-red-400
            hover:text-blue-300  group-hover:animate-pulse">
            Search any something here
          </p>
        </div>
        <div className="flex w-full rounded-full justify-center pt-1">
          <div className="flex bg-slate-400 flex-row rounded-full w-6/12">
            <AiOutlineSearch className="aboslute text-white m-3 text-2xl" />
            <input
              type="text"
              className="bg-slate-400 placeholder-white -mx-2
              rounded-r-full text-lg font-mono focus:outline-none w-full"
              placeholder="search..."
              onChange={(text) => {
                setSearch(text.target.value);
              }}
            />
            <button
              className="flex items-center justify-center bg-blue-400 text-white
              rounded-r-full w-20 hover:bg-red-400 text-sm font-mono"
              onClick={() => {
                getUsers();
              }}>
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
