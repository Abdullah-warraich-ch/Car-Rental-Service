import React from "react";

function Heading({ children }) {
  return (
    <div
      style={{
        fontSize: "56px",
        lineHeight: "56px",
        textWrap: "wrap",
        letterSpacing: "-2.24px",
      }}
    >
      {children}
    </div>
  );
}

export default Heading;
