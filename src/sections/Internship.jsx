  "useClient";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import FilterMenu from "@/components/FilterMenu/Filtermenu";
import React, { useEffect, useState } from "react";
import "@/app/internships/internship.css";
import Link from "next/link";
import "./intern.css";

function Internship() {

  const [Alljobs, setAlljobs] = useState([])
  


  useEffect(() => {

    addjobs();

  }, [])


  const addjobs=async()=>{

    try {
      const res = await fetch("http://localhost:5000/api/v1/opp/get", {
        method: "GET",
        headers: {
         
          "Content-Type": "application/json",
        },
       
      });
      const data = await res.json();
     if( data.allJobs && data.allJobs.length>0){
      await setAlljobs(data.allJobs);
      console.log(Alljobs)
     }
     else{

      console.log("error while adding jobs",data);
     } 
    } catch (err) {
    
      console.log(err);
    }
  }

  return (
    <div className="internshipSection">
      <div className="">
      <FilterMenu />
       <Link href="/internships/form" className="icreate">create</Link>
       </div>


       {Alljobs.length > 0 &&
        Alljobs.map((event) => (
          <main key={event._id} className="cardContainer">
          
              <Card role={event.title} date={event.DeadlineDate} desc={event.description} link={event.link} company={event.companyName} />


            

           
          </main>
        ))}


      {/* <main className="cardContainer">
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



      {/* </main> */} */
    </div>
  );
}

export default Internship;
