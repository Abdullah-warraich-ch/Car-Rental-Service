import React from "react";
import { useState } from "react";
import { Lock, Mail, Eye, EyeClosed } from "lucide-react";
import Footer from "../components/main/Footer";
import styles from "./CSS/Login.module.css";
function Login() {
  const [passwordType, setPasswordType] = useState("password");
  

  let EyeIcon = (
    <EyeClosed
      className={styles.icon}
      onClick={togglePass}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: "10",
      }}
    />
  );

  function togglePass() {
    if (passwordType === "password") {
      setPasswordType("text");
      EyeIcon = (
        <Eye
          className={styles.icon}
          onClick={togglePass}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "10",
          }}
        />
      );
    } else {
      setPasswordType("password");
      EyeIcon = (
        <EyeClosed
          className={styles.icon}
          onClick={togglePass}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "10",
          }}
        />
      );
    }
    console.log("Toggle Clicked");
  }
  return (
    <div className={styles.loginCon}>
      <div className={styles.formcon}>
        <div className={styles.logo}>
          <img src="logo.svg" alt="Logo" srcset="" />
        </div>
        <form action="" method="post" className={styles.form}>
          <div className={styles.inputDiv}>
            <h1>Enter Your Credentials</h1>
            <div
              className={styles.subInput}
              style={{ position: "relative", width: "100%" }}
            >
              <Mail
                className={styles.icon}
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                }}
              />
              <input type="text" placeholder="Email" />
            </div>
            <div
              className={styles.subInput}
              style={{ position: "relative", width: "100%" }}
            >
              <Lock
                className={styles.icon}
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  zIndex: "10",
                }}
              />
              <input type={passwordType} name="" id="" placeholder="Password" />
              {EyeIcon}
            </div>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.signupbtn}>Sign Up</button>

            <button className={styles.loginbtn}>LogIn</button>
          </div>
        </form>
        <div>
          <Footer />
        </div>
      </div>
      <div className={styles.imagediv}>
        <img src="driver2.jpg" alt="" srcset="" />
      </div>
    </div>
  );
}

export default Login;
