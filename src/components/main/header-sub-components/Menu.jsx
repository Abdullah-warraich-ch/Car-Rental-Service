import React from "react";
import Nav from "./Nav";
import styles from "./css/Menu.module.css";

function MenuBar({ action }) {
  return (
    <div className={styles.mainDiv}>
      <div onClick={() => action(false)} className={styles.upperDiv}></div>
      <div className={styles.navDiv}>
        <Nav style="column" />
      </div>
    </div>
  );
}

export default MenuBar;
