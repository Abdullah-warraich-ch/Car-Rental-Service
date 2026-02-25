import React from "react";

function CarCard({ picture, Heading }) {
  return (
    <div
      style={{
        padding: "15px 15px 0 15px",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={picture}
        alt={Heading}
        srcset=""
        style={{
          borderRadius: "10px",
          width: "250px",
          height: "170px",
          objectFit: "cover",
        }}
      />
      <p
        style={{
          margin: "10px 0",
          textAlign: "center",
          fontWeight: "semibold",
        }}
      >
        {Heading}
      </p>
    </div>
  );
}

export default CarCard;
