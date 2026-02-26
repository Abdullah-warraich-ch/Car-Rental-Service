import React from "react";
import styles from "./css/CityCard.module.css";
function CityCard({ picture, name }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "10px",
        borderRadius: "10px",
      }}
      className={styles.CityCard}
    >
      <img
        src={picture}
        alt={name}
        srcset=""
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
      <p style={{ fontWeight: "400", fontSize: "20px" }}>{name}</p>
    </div>
  );
}

export default CityCard;
