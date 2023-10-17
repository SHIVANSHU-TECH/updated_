"use client";
import React,  { useState } from 'react';
import "../form/iform.css";


export default function eform() {
  const [post, setPost] = useState('');
  const [cname, setCname] = useState('');
  const [vdate, setVdate] = useState('');
  const [jd, setJd] = useState('');
  const [jl, setJl] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(post, cname, vdate, jd, jl);
    try {

      


      const res = await fetch("http://localhost:5000/api/v1/opp/", {
        method: "POST",
        headers: {
         
          "Content-Type": "application/json",
        },
        body:{
          title : `${post}`,
          description:`${jd}`,
          
          
          link:`${jl}`,
          DeadlineDate:`${vdate}`
         
        }

      });
      const data = await res.json();
     if( data){
     
      console.log(data)
     }
     else{

      console.log("error while adding jobs",data);
     } 
    } catch (err) {
    
      console.log(err);
    }
    
  };
  return (
    <div>
    <form className='iForm' onSubmit={handleSubmit}>
    <label for="post">Post Name</label>
    <input type="text" 
    id="pname" 
    name="post"
    value={post}
    onChange={(e) => setPost(e.target.value)}
    placeholder="Post name" />
     
    
   
    <label for="company">company_name</label>
    <input type="text" 
    id="text"
    name="cname" 
    value={cname} 
    onChange={(e) => setCname(e.target.value)}
    placeholder="company_name" />
  
    <label for="valid date">date</label>
    <input type="date" 
    id="vdate" 
    name="vdate"
    value={vdate} 
    onChange={(e) => setVdate(e.target.value)}
    placeholder="valid_date" />

    
    <label for="JD">Job Description</label>
    <input type="text" 
    id="text"
    name="jd"
    value={jd} 
    onChange={(e) => setJd(e.target.value)}
    placeholder="job_desciption" />
    
    
    
    <label>job Link</label>
    <input type="url"
    name="jl" 
    value={jl}
    onChange={(e) => setJl(e.target.value)}
    placeholder="job link" />
    
    <input type="submit" value="Submit"/>
  </form>
    </div>
  ) }