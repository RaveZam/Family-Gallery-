import styles from "./modules/mobilenav.module.css";

export default function Mobilenav({ show }) {
  let showdiv = show ? styles.show : "";

  return (
    <div className={`${styles.mobnav} ${showdiv}`}>
      <div className={styles.linkscontainer}>
        <ul className={styles.ul}>
          <li className={styles.li}>Gallery </li>
          <li className={styles.li}>Contact</li>
          <li className={styles.li}>About Me</li>
        </ul>
      </div>
    </div>
  );
}
