"use client";
import React,  { useState } from 'react';
import "../form/efom.css";

export default function eform() {
    const [event, setEvent] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [event_category, setEvent_category] = useState('');
    const [eimg, setEimg] = useState('');
    const [elink, setElink] = useState('');
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(event, date, desc, event_category, eimg, elink);
      

      try {

      


        const res = await fetch("http://localhost:5000/api/v1/event/", {
          method: "POST",
          headers: {
           
            "Content-Type": "application/json",
          },
          body:{
            title : `${event}`,
            description:`${desc}`,
            image:`${elink}`,
            category:`${event_category}`,
            link:`${elink}`,
            DeadlineDate:`${data}`
           
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
      {/* <div className="containerForm"> */}
    <form className='eForm' onSubmit={handleSubmit}>
    <label for="event">Event Name</label>
    <input type="text"
     id="ename" 
     name="event" 
     value={event}
     onChange={(e) => setEvent(e.target.value)}
     placeholder="Event name" />
     
    <label for="date">date</label>
    <input type="date" 
    id="date"
    name="date" 
    value={date}
    onChange={(e) => setDate(e.target.value)}
    placeholder="date" />
   
    <label for="desc">event description</label>
    <input type="text" 
    id="text" 
    name="desc"
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    placeholder="description" />
  

    <label for="event_category">Category</label>
    <select id="event_category"
     name="event_category"
     value={event_category}
     onChange={(e) => setEvent_category(e.target.value)}>
      <option value="cultural">Cultural</option>
      <option value="technical">Technical</option>
      <option value="sports">Sports</option>
    </select>
    
    <label>event image</label>
    <input type="file"
     name="eimg"
     value={eimg}
     onChange={(e) => setEimg(e.target.value)}/>
    
    <label>event Link</label>
    <input type="url"
    name='elink'
    value={elink}
    onChange={(e) => setElink(e.target.value)}
     />
    
    <input type="submit" value="Submit"/>
  </form>
  {/* </div> */}
    </div>
  ) }