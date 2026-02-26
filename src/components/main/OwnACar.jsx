import React from "react";
import styles from "./css/OwnACar.module.css";
function OwnACar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Own a car? Put it to work!</h1>
        <p className={styles.p}>
          Earn up to €800 per month by sharing your car with Getaround Connect.
        </p>
        <button className={styles.button}>List My Car {"  >"}</button>
      </div>
      <div className={styles.image}>
        <img src="Driver.jpg" alt="Driver" srcset="" className={styles.img} />
      </div>
    </div>
  );
}

export default OwnACar;
