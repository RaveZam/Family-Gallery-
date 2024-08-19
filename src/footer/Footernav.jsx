import styles from "./footer.module.css";
export default function Footernav({
  scrollToGallery,
  scrollToAbout,
  scrollToContact,
}) {
  return (
    <div>
      <ul className={styles.footernav}>
        <li className={styles.footerli}>@ OlatsFilm2024</li>
        <li onClick={() => scrollToGallery()} className={styles.footerli}>
          Gallery
        </li>
        <li onClick={() => scrollToAbout()} className={styles.footerli}>
          About Us
        </li>
        <li onClick={() => scrollToContact()} className={styles.footerli}>
          Contact
        </li>
      </ul>
    </div>
  );
}
