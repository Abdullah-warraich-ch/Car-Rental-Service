import React from "react";
import Heading from "../elements/Heading";
import styles from "./css/Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBG}>
        <img src="zigzag-tight-blue.svg" alt="" />
      </div>
      <div className={styles.details}>
        <Heading>
          Rent a car <br /> in just a few taps
        </Heading>
        <p style={{ fontSize: "25px" }}>
          <span className="unique">Unlock cars 24/7 </span> with your phone, and
          go!
        </p>
        <input
          className={styles.heroInput}
          type="text"
          placeholder="Precise Address"
        />
        <button className={styles.heroButton}>Search</button>
        <div className={styles.center}>
          <p style={{ color: "gray" }}>
            Car rental by locals with trip liability insurance included
          </p>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img src="play.png" alt="" srcset="" />
            <img src="apple.png" alt="" srcset="" />
          </div>
          <p style={{ color: "gray" }}>
            4.6/5 from 100 000+ ratings in app stores
          </p>
        </div>
      </div>
      <div className={styles.heroPngDiv}>
        <img src="hand-ga-app-phone2-US.png" alt="" srcset="" />
      </div>
    </div>
  );
}

export default Hero;
