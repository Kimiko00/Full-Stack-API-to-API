import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TweetItem from "../components/TweetItem";

export default function Twitter() {
  const [users, setUser] = useState(); // hook for link handle
  const [search, setSearch] = useState(); // hook for search input
  const [limit, setLimit] = useState(); // hook for limit input

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      `http://localhost:5000/tweet/data?query=${search ? search : "gundam"}&limit=${limit ? limit : "10"}`
    );
    // console.log(response.data)
    setUser(response.data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar 
        setSearch = {setSearch}
        getUsers = {getUsers}
        setLimit={setLimit}
      />
      <p className="text-gray-700 mt-4">Your app content goes here</p>
      <div className="flex flex-wrap justify-center">
        {users ? users.map((user) => {
              return <TweetItem key={uuidv4()} user={user} />;
            }): ""}
      </div>
    </div>
  );
}
