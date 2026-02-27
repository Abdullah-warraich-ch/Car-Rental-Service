import React from "react";
import { Lock, Mail } from "lucide-react";
import Footer from "../components/main/Footer";
import styles from "./CSS/Login.module.css";
function Login() {
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
              <input type="password" name="" id="" placeholder="Password" />
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
