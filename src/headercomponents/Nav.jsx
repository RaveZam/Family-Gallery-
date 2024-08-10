import styles from "./modules/nav.module.css";
function click() {
  console.log("Hello");
}

export default function Nav({ show, setShow }) {
  function burgerclick() {
    setShow(!show);
  }
  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li onClick={() => click()} className={styles.li}>
          Gallery
        </li>
        <li className={styles.li}>Contact</li>
        <li className={styles.li}>About Us</li>
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
