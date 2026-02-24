import React from "react";

function BulletPoints({ emoji, p1, p2 }) {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ color: "var(--primary)" }}>{emoji}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>{p1}</p>
        <p style={{ color: "var(--text)" }}>{p2}</p>
      </div>
    </div>
  );
}

export default BulletPoints;
