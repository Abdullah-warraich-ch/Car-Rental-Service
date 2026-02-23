import styles from "./css/Button.module.css";
function Button({ children }) {
  return <span className={styles.button}>{children}</span>;
}
export default Button;
