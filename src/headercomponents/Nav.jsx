import styles from "./modules/nav.module.css";
function click() {
  console.log("Hello");
}
export default function Nav() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li onClick={() => click()} className={styles.li}>
          Gallery
        </li>
        <li className={styles.li}>Contact Me</li>
        <li className={styles.li}>About Me</li>
      </ul>
    </div>
  );
}
