import React from "react";
import Link from "next/link";
import Heading from "@/components/HeadingEvent/Heading";
const Section = (props) => {
  return (
    <section id={props.ID} className="sectionContainer">
      <div className="headings">
        <Heading title={props.title} />
        <Link href={props.link} className="link">
          View more
        </Link>
      </div>
      {props.children}
    </section>
  );
};

export default Section;
