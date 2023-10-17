import React from "react";
import "./card.css";
const cardData = [
  {
    title: {},
  },
];
const Card = (props) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.image}  className="img"/>
        </div>
      <div className="cardTitle">
        <h4>{props.title}</h4>
        <span>{props.date}</span>
      </div>
      <div className="cardDesc">
        <p>{props.desc}</p>
      </div>
      <div className="btn-join">
        <button><a href={props.mainLink}>Join Now</a></button>
      </div>
    </div>
  );
};

export default Card;
