import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import NistItem from "../components/NistItem";
import SearchBar from "../components/SearchBar";

export default function Nist() {
  const [users, setUser] = useState(); // hook for link handle
  const [search, setSearch] = useState(); // hook for search input
  const [limit, setLimit] = useState(); // hook for limit input

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      `http://localhost:5000/nist/data?query=${
        search ? search : "azure"
      }&limit=${limit ? limit : "2"}&page=1`
    );
    console.log(response.data);
    setUser(response.data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar
        setSearch={setSearch}
        getUsers={getUsers}
        setLimit={setLimit}
      />
      <p className="text-gray-700 mt-4">Your app content goes here</p>
      <div className="flex flex-wrap justify-center">
        {users
          ? users.map((user) => {
              return <NistItem key={uuidv4()} user={user} />;
            })
          : ""}
      </div>
    </div>
  );
}
