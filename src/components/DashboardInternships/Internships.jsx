import React from "react";
import Image from "next/image";
import accept from "../../../public/accept.svg"
import cancel from "../../../public/cancel.svg";
import "./dashboardInternships.css";
const acceptThis = () =>{

}
const internships = () => {
  
  const data = [
    { name: "SDE Intern", status : "Accepted" },
    { name: "HR", status : "Rejected" },
    { name: "SDE-1", status: "Accepted" }
  ];
  return (
    <div className="Internships" style={{width: 1103, height: 1024, position: 'relative', background: '#CED4DA',borderRadius: 25}}>
  
  <div className="Active" style={{width: 903, height: 96, left: 100, top: 101, position: 'absolute'}}>
    <div className="Event" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute'}}>
      <div className="active1" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute', background: '#FDF8F8', borderRadius: 15}} />
      <div className="Name" style={{left: 37, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Name</div>
      <div className="Role" style={{left: 223, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Role</div>
      <div className="Venue" style={{left: 398, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Venue</div>
    </div>
    <div className="Accept" style={{width: 40, height: 40, left: 729, top: 32, position: 'absolute'}}>
    <div className="image" >
        <Image src={accept} alt="accept-symbol" />
      </div>
    </div>
    <div className="Cancel" style={{width: 40, height: 40, left: 805, top: 32, position: 'absolute'}}>
      <div className="Vector" style={{width: 33.33, height: 33.33, left: 3.33, top: 3.33, position: 'absolute'}}><div className="image">
        <Image src={cancel} alt="cancel-symbol" />
      </div></div>
    </div>
    <div className="TeenyiconsTickCircleSolid" style={{width: 15, height: 15, left: 790, top: 44, position: 'absolute'}} />
  </div>
  <div className="Active" style={{width: 903, height: 96, left: 100, top: 226, position: 'absolute'}}>
    <div className="Event" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute'}}>
      <div className="Rectangle7" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute', background: '#FDF8F8', borderRadius: 15}} />
      <div className="Name" style={{left: 37, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Name</div>
      <div className="Role" style={{left: 223, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Role</div>
      <div className="Venue" style={{left: 398, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Venue</div>
    </div>
    <div className="Accept" style={{width: 40, height: 40, left: 729, top: 32, position: 'absolute'}}>
    <div className="Vector" style={{width: 33.33, height: 33.33, left: 3.33, top: 3.33, position: 'absolute'}}>
        <div className="image" >
        <Image src={accept} alt="accept-symbol" />
      </div></div>
    </div>
    <div className="Cancel" style={{width: 40, height: 40, left: 805, top: 32, position: 'absolute'}}>
      <div className="Vector" style={{width: 33.33, height: 33.33, left: 3.33, top: 3.33, position: 'absolute'}}><div className="image">
        <Image src={cancel} alt="cancel-symbol" />
      </div></div>
    </div>
    <div className="TeenyiconsTickCircleSolid" style={{width: 15, height: 15, left: 790, top: 44, position: 'absolute'}} />
  </div>
  <div className="RecentInternships" style={{left: 129, top: 377, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 1.20, wordWrap: 'break-word'}}>Recent Internships</div>
  
  <div className="data-wrapper" style={{
  width: 100, background: '#CED4DA',position:'absolute',
  left:129
}}>

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

export default internships;