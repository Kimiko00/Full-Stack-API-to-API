import React from "react";
import SearchBar from "../components/SearchBar";

export default function Stackoverflow() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar />
      <p className="text-gray-700 mt-4">Your app content goes here</p>
    </div>
  );
}
