import React from "react";
import Navbar from "@/components/navbar/Navbar";
import css from "@/styles/landing.module.css";
import Image from "next/image";

import banner from "public/banner.jpg";
const Landing = () => {
  return (
    <div>
      <div className={css.banner}>
        <Image src={banner} alt="banner" />
      </div>

      <div>
        <p className={css.textBanner}>Explore the events.<br /> Live your life</p>
      </div>
    </div>
  );
};

export default Landing;
