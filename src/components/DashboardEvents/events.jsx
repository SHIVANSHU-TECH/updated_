import React from "react";
import Image from "next/image";
import accept from "../../../public/accept.svg"
import cancel from "../../../public/cancel.svg";
import "./dashboardEvents.css";
const events = () => {
  return (
    <div className="Events" style={{width: 1003, height: 1024, position: 'relative', background: '#CED4DA', borderRadius: 15}}>
  
  <div className="Active" style={{width: 903, height: 96, left: 50, top: 101, position: 'absolute'}}>
    <div className="Event" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute'}}>
      <div className="Rectangle7" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute', background: '#FDF8F8', borderRadius: 15}} />
      <div className="EventName" style={{left: 37, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Name</div>
      <div className="EventDate" style={{left: 223, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Date</div>
      <div className="EventVenue" style={{left: 398, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Venue</div>
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
  <div className="Active" style={{width: 903, height: 96, left: 50, top: 226, position: 'absolute'}}>
    <div className="Event" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute'}}>
      <div className="Rectangle7" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute', background: '#FDF8F8', borderRadius: 15}} />
      <div className="EventName" style={{left: 37, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Name</div>
      <div className="EventDate" style={{left: 223, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Date</div>
      <div className="EventVenue" style={{left: 398, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Venue</div>
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
  <div className="RecentEvents" style={{left: 79, top: 377, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 1.20, wordWrap: 'break-word'}}>Recent Events</div>
  <div className="Event" style={{width: 903, height: 96, left: 50, top: 461, position: 'absolute'}}>
    <div className="Rectangle7" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute', background: '#FDF8F8', borderRadius: 15}} />
    <div className="EventName" style={{left: 37, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Name</div>
    <div className="EventDate" style={{left: 223, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Date</div>
    <div className="EventVenue" style={{left: 398, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Venue</div>
    <div className="Approved" style={{left: 668, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Approved</div>
  </div>
  <div className="Event" style={{width: 903, height: 96, left: 50, top: 587, position: 'absolute'}}>
    <div className="Rectangle7" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute', background: '#FDF8F8', borderRadius: 15}} />
    <div className="EventName" style={{left: 37, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Name</div>
    <div className="EventDate" style={{left: 223, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Date</div>
    <div className="EventVenue" style={{left: 398, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Venue</div>
    <div className="Approved" style={{left: 668, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Approved</div>
  </div>
  <div className="Event" style={{width: 903, height: 96, left: 50, top: 713, position: 'absolute'}}>
    <div className="Rectangle7" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute', background: '#FDF8F8', borderRadius: 15}} />
    <div className="EventName" style={{left: 37, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Name</div>
    <div className="EventDate" style={{left: 223, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Date</div>
    <div className="EventVenue" style={{left: 398, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Venue</div>
    <div className="Approved" style={{left: 668, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Approved</div>
  </div>
  <div className="Event" style={{width: 903, height: 96, left: 50, top: 842, position: 'absolute'}}>
    <div className="Rectangle7" style={{width: 903, height: 96, left: 0, top: 0, position: 'absolute', background: '#FDF8F8', borderRadius: 15}} />
    <div className="EventName" style={{left: 37, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Name</div>
    <div className="EventDate" style={{left: 223, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Date</div>
    <div className="EventVenue" style={{left: 398, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Event Venue</div>
    <div className="Approved" style={{left: 668, top: 40, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.85, wordWrap: 'break-word'}}>Approved</div>
  </div>
</div>
  );
};

export default events;