import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "50px 0",
        borderTopLeftRadius:"50px",
        borderTopRightRadius:"50px"
      }}
    >
      <p style={{ textAlign: "center" }}>
        <img
          style={{ width: "20px", height: "20px" }}
          src="github.svg"
          alt="github"
          srcset=""
        />
      </p>
      <p style={{ textAlign: "center", padding: "20px" }}>
        © 2024 Getaround. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
