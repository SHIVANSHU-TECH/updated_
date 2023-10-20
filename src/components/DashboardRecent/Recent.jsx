<<<<<<< HEAD
import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import './dashboardRecent.css'
const Recent = ({heading, data}) => {
  return (
    <div className='recent-container'>
      <div className='recent-heading'>
        <h4 className="heading">Total {heading} this month</h4>
        <AiOutlineArrowRight />
      </div>
      <div className="desc">
        <div className="overlay">{data}</div>
        <p className='data'>{data}</p>
      </div>
    </div>
  )
}

export default Recent
=======
import React from "react";
// import rightArrow from "../../../public/right-arrow.svg";
// import Image from "next/image";
import "./dashboardRecent.css";
const Recent = () => {
    const data = [
        { name: "The great indian show", status : "Accepted" },
        { name: "A event", status : "Rejected" },
        { name: "an Internship", status: "Accepted" },
        { name: "A event", status : "Rejected" },
        { name: "an Internship", status: "Accepted" },
        { name: "A event", status : "Rejected" },
        { name: "an Internship", status: "Accepted" },
        { name: "A event", status : "Rejected" },
        { name: "an Internship", status: "Accepted" },
        { name: "A event", status : "Rejected" },
        { name: "an Internship", status: "Accepted" },
        { name: "A event", status : "Rejected" },
        { name: "an Internship", status: "Accepted" }
      ];
      return (
    <div className="recent"><div className="Dashboard" style={{width: 986, height: 'auto', position: 'relative', background: '#CED4DA', borderRadius: 25}}>
    
    <div className="events" style={{width: 418, height: 408, left: 50, top: 69, position: 'absolute', background: '#FDF8F8', borderRadius: 25}} />
    <div className="internships" style={{width: 418, height: 408, left: 535, top: 69, position: 'absolute', background: '#FDF8F8', borderRadius: 25}} />
    <div className="data" style={{width: 903, height: 434, left: 50, top: 529, position: 'absolute', background: '#FDF8F8', borderRadius: 25}} />
    <div className="Title" style={{left: 180, top: 109, position: 'absolute'}}>
        <div className="Heading" style={{left: 0, top: 5, position: 'absolute', color: 'black', fontSize: 19, fontFamily: 'Montserrat', fontWeight: '600', letterSpacing: 0.95}}>
            Total Events this month
        </div>
      
    

    </div>
    <div className="Title" style={{left: 560, top: 111, position: 'absolute'}}>
      <div className="Heading" style={{left: 0, top: 5, position: 'absolute', color: 'black', fontSize: 19, fontFamily: 'Montserrat', fontWeight: '600', letterSpacing: 0.95, wordWrap: 'break-word'}}>Total Internships this month</div>
      
    </div>
    <div className="eventCount" style={{width: 311, height: 241, left: 87, top: 175, position: 'absolute'}}>
      <div style={{width: 286, height: 206, left: 0, top: 0, position: 'absolute', color: '#D9D9D9', fontSize: 190, fontFamily: 'Montserrat', fontWeight: '600', letterSpacing: 9.50, wordWrap: 'break-word'}}>08</div>
      <div style={{width: 286, height: 206, left: 25, top: 35, position: 'absolute', color: 'black', fontSize: 190, fontFamily: 'Montserrat', fontWeight: '600', letterSpacing: 9.50, wordWrap: 'break-word'}}>08</div>
    </div>
    <div className="internshipCount" style={{width: 311, height: 241, left: 563, top: 175, position: 'absolute'}}>
      <div style={{width: 286, height: 206, left: 0, top: 0, position: 'absolute', color: '#D9D9D9', fontSize: 190, fontFamily: 'Montserrat', fontWeight: '600', letterSpacing: 9.50, wordWrap: 'break-word'}}>06</div>
      <div style={{width: 286, height: 206, left: 25, top: 35, position: 'absolute', color: 'black', fontSize: 190, fontFamily: 'Montserrat', fontWeight: '600', letterSpacing: 9.50, wordWrap: 'break-word'}}>06</div>
    </div>
    <table className="dataStatus" style={{ width:903 ,top: 557, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', letterSpacing: 0.85, wordWrap: 'break-word', columnWidth:300}}>
        <tr>
            <th>Name</th>
            <th>Status</th>
        </tr>
        {data.map(({ name, status }) => {
          return (
            <tr className="data-entry">
                <td>{name}</td>
                <td>{status}</td>
            </tr>
          );
        })}
    </table>
    
    
  </div>
  </div>
  );
};

export default Recent;
>>>>>>> a1905e9f3a707821294f714ce4230c42b4e80b97
