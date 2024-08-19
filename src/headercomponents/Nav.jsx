import styles from "./modules/nav.module.css";

export default function Nav({
  show,
  scrollToGallery,
  setShow,
  scrollToContact,
  scrollToAbout,
}) {
  function burgerclick() {
    setShow(!show);
  }

  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li onClick={() => scrollToGallery()} className={styles.li}>
          Gallery
        </li>
        <li onClick={() => scrollToContact()} className={styles.li}>
          Contact
        </li>
        <li onClick={() => scrollToAbout()} className={styles.li}>
          About Us
        </li>
      </ul>
      <img
        onClick={() => burgerclick()}
        className={styles.burger}
        src="./images/hamburger.png"
        alt="burger"
      />
    </div>
  );
}
