import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 IPSC. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/facebook-logo.png" width={15} height={15} className={styles.icon} alt="Facebook Logo" />
        <Image src="/Instagram-logo.png" width={15} height={15} className={styles.icon} alt="Instagram Logo" />
        <Image src="/twitter-logo.png" width={15} height={15} className={styles.icon} alt="Twitter Logo" />
        <Image src="/Youtube-logo.png" width={15} height={15} className={styles.icon} alt="Twitter Logo" />
      </div>
    </div>
  );
};

export default Footer;
