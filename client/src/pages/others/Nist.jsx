import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import NistItem from "../../components/NistItem";
import SearchBar from "../../components/Navigation/SearchBar";
import Header from "../../components/Navigation/Header";

export default function Nist() {
  const [users, setUser] = useState(); // hook for link handle
  const [search, setSearch] = useState(); // hook for search input
  const [limit, setLimit] = useState(); // hook for limit input

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      `http://localhost:5000/data/nist?query=${search}&limit=${
        limit ? limit : "15"
      }&page=1`
    );
    console.log(response.data);
    setUser(response.data);
  };

  return (
    <Header>
      <div className="container mx-auto px-4 py-8">
        <SearchBar
          setSearch={setSearch}
          getUsers={getUsers}
          // setLimit={setLimit}
        />

        <div className="flex flex-wrap justify-center mt-4">
          {users
            ? users.map((user) => {
                return <NistItem key={uuidv4()} user={user} />;
              })
            : ""}
        </div>
      </div>
    </Header>
  );
}
