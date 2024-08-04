import styles from "./modules/nav.module.css";
export default function Nav() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>Gallery </li>
        <li className={styles.li}>Contact Me</li>
        <li className={styles.li}>About Me</li>
      </ul>
    </div>
  );
}
