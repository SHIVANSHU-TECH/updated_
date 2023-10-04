  "useClient";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import FilterMenu from "@/components/FilterMenu/Filtermenu";
import React, { useState } from "react";
import "@/app/internships/internship.css";
import Link from "next/link";
import "./intern.css";

function Internship() {
  return (
    <div className="internshipSection">
      <div className="">
      <FilterMenu />
       <Link href="/internships/form" className="icreate">create</Link>
       </div>
      <main className="cardContainer">
        <Card
          role="Front-end Developer"
          company="ABC Pvt Ltd."
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos quas, esse optio maiores voluptatum reprehenderit id odit temporibus dolor!"
          link="/#link"
        />
        <Card
          role="Front-end Developer"
          company="ABC Pvt Ltd."
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos quas, esse optio maiores voluptatum reprehenderit id odit temporibus dolor!"
          link="/#link"
        />
        <Card
          role="Front-end Developer"
          company="ABC Pvt Ltd."
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos quas, esse optio maiores voluptatum reprehenderit id odit temporibus dolor!"
          link="/#link"
        />
        {/* <Card /> */}
      </main>
    </div>
  );
}

export default Internship;
