import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Notes = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose any notes</h1>
      <div className={styles.items}>
        <Link href="https://drive.google.com/drive/folders/1nxOz5FWRr-dBSXbPJxKznkIJVAs8hNmG?usp=drive_link" className={styles.item} rel="noopener noreferrer" target="_blank">
          <span className={styles.title}> CSE</span>
        </Link>
        <Link href="https://drive.google.com/drive/folders/1_JbLm1GRdAfwgeMzMXRv7tOdycXfvSU8?usp=drive_link" className={styles.item} rel="noopener noreferrer" target="_blank" >
          <span className={styles.title}>ECE</span>
        </Link>
        <Link href="https://drive.google.com/drive/folders/1NMRo_0xM9UqygGUR4e1BqtKC3JY2kEaj?usp=drive_link" className={styles.item} rel="noopener noreferrer" target="_blank">
          <span className={styles.title}>IT</span>
        </Link>
      </div>
    </div>
  );
};

export default Notes;
