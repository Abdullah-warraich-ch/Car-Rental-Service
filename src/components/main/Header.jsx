import React, { useState } from "react";
import styles from "./css/Header.module.css";
import Button from "./Button";
import { Menu } from "lucide-react";
import MenuBar from "./Menu";
import Nav from "./sub-components/Nav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className={styles.header}>
        <div>
          <img src="logo.svg" alt="Logo of the website" />
        </div>
        <div className={styles.div}>
          <div className={styles.navDiv}>
            <Nav />
          </div>
          <div
            onClick={() => setIsOpen(true)}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className={styles.menu}
          >
            <Menu />
          </div>
        </div>
      </header>
      {isOpen && <MenuBar action={setIsOpen} />}
    </div>
  );
}

export default Header;
