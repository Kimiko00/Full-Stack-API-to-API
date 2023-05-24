import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import SearchBar from "../../components/Navigation/SearchBar";
import StackItem from "../../components/StackItem";
import Header from "../../components/Navigation/Header";

export default function Stackoverflow() {
  const [users, setUser] = useState(); // hook for link handle
  const [search, setSearch] = useState(); // hook for search input

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      `http://localhost:5000/data/stack?query=${search ? search : "tensorflow"}`
    );
    // console.log(response.data)
    setUser(response.data);
  };

  return (
    <Header>
      <div className="container mx-auto px-4 py-8">
        <SearchBar setSearch={setSearch} getUsers={getUsers} />
        <div className="min-h-screen flex flex-row flex-wrap justify-center mt-4">
          {users
            ? users.map((user) => {
                return <StackItem key={uuidv4()} user={user} />;
              })
            : ""}
        </div>
      </div>
    </Header>
  );
}
