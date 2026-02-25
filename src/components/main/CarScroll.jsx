import React from "react";
import styles from "./css/CarScroll.module.css";
import CarCard from "../elements/CarCard";
function CarScroll() {
  return (
    <div className={styles.carScrollContainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <p className={styles.carScrollText}>Cars for your every need</p>
      </div>
      <div className={styles.carScrollCardsContainer}>
        <CarCard picture="carscroll1.jpg" Heading="Family" />
        <CarCard picture="carscroll2.jpg" Heading="SUV" />
        <CarCard picture="carscroll3.jpg" Heading="Commercial" />
        <CarCard picture="carscroll4.jpg" Heading="Business" />
      </div>
    </div>
  );
}

export default CarScroll;
