import Nav from "./Nav";
import styles from "./modules/header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.name}>Selwyn Amoncio</h1>
      <Nav />
    </div>
  );
}
