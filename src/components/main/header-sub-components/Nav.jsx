import styles from "./css/Nav.module.css";
import Button from "../../elements/Button";
import { useNavigate } from "react-router-dom";
function Nav({ style }) {
  const navigate = useNavigate();
  return (
    <ul className={styles.v} style={{ flexDirection: style }}>
      <li className={styles.li} onClick={() => navigate("/login")}>
        Log in
      </li>
      <li className={styles.li}>Questions</li>
      <li className={styles.li}>Blog</li>
      <li style={{ padding: "20px" }}>
        <Button>List Your Car</Button>
      </li>
    </ul>
  );
}

export default Nav;
