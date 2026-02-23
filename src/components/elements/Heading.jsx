import React from "react";

function Heading({ children }) {
  return (
    <div
      style={{
        fontSize: "70px",
        lineHeight: 1,
        textWrap: "wrap",
        letterSpacing: "-2px",
      }}
    >
      {children}
    </div>
  );
}

export default Heading;
