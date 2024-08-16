import styles from "./footer.module.css";
export default function Footernav() {
  return (
    <div>
      <ul className={styles.footernav}>
        <li className={styles.footerli}>@OlatsFilm2024</li>
        <li className={styles.footerli}>About Us</li>
        <li className={styles.footerli}>Gallery</li>
      </ul>
    </div>
  );
}
