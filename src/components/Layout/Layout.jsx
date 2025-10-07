import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <AppBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
