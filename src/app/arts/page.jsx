// import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "@/app/globals.css";
import Card from "@/components/Card/CardEvent";

const page = () => {
  return (
    <main>

      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default page;
