import React from "react";
import Header from "../components/Navigation/Header";

export default function Home() {
  return (
    <Header>
      <div className="flex min-h-screen flex-row">
        <iframe
          style={{ background: "#FFFFFF" }}
          src="https://darkfeed.io/"
          title="darkfeed.io"
          className="rounded-xl m-2 w-full text-white "></iframe>
      </div>
    </Header>
  );
}
