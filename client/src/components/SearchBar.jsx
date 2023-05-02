import React from "react";

export default function SearchBar({ setSearch, getUsers, setLimit }) {
  return (
    <div className="flex items-center border-b border-teal-500 py-2">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search..."
        aria-label="Search"
        onChange={(text) => {
          setSearch(text.target.value);
        }}
      />
      <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
        onClick={() => {
          getUsers();
        }}
      >
        Search
      </button>
      <div className="container px-20">
        <input 
        type="number" 
        className="container  bg-blue-200 rounded-md flex-auto px-2" 
        placeholder="how many?"
        onChange={(number) => {
          setLimit(number.target.value)
        }}
        />
        <button 
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
        onClick={() => {
          getUsers()
        }}
        >
          apply
        </button>
      </div>
    </div>
  );
}
