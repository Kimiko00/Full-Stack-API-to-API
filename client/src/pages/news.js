import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import NewsItem from "../components/news";
import Header from "../components/Navigation/Header";

export default function News() {
  const [users, setUser] = useState(); // hook for link handle

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5000/data/news`);
    // console.log(response.data)
    setUser(response.data);
  };

  return (
    <Header>
      <div className="container mx-auto px-4 py-8">
        <div className="min-h-screen flex flex-row flex-wrap justify-center mt-4">
          {users
            ? users.map((user) => {
                return <NewsItem key={uuidv4()} user={user} />;
              })
            : ""}
        </div>
      </div>
    </Header>
  );
}
