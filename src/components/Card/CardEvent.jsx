import React from "react";

const cardData = [
  {
    title: {},
  },
];
const Card = (props) => {
  return (
    <div className="card">
      <div className="cardImg"></div>
      <div className="cardTitle">
        <h4>{props.title}</h4>
        <span>{props.date}</span>
      </div>
      <div className="cardDesc">
        <p>{props.desc}</p>
      </div>
      <div className="btn-join">
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default Card;
