import React from "react";
import css from "@/app/page.module.css";
const Heading = (props) => {
  return (
    <div className={css.headingContainer}>
      <span className={css.upperLine}></span>
      <h3 className={css.text}>{props.title}</h3>
      <span className={css.lowerLine}></span>
    </div>
  );
};

export default Heading;
