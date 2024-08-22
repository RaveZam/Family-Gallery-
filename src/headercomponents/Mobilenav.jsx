import { useState } from "react";
import styles from "./modules/mobilenav.module.css";

export default function Mobilenav({ show, setShow }) {
  const [close, setClose] = useState(false);
  // let showdiv = show ? styles.show : "";

  function closeBtn() {
    setShow(!show);
    setClose(!close);
  }

  return (
    <div
      className={`${styles.mobnav} ${show ? styles.show : ""} ${
        close ? styles.close : ""
      }`}
    >
      <div className={styles.mobnamecontainer}>
        <h1 className={styles.mobname}>OLATS FILM</h1>
      </div>
      <div className={styles.linkscontainer}>
        <ul className={styles.ul}>
          <li className={`${styles.li} ${show ? styles.slide : ""}`}>
            <img className={styles.icons} src="./images/photo.png" alt="" />
            Gallery
          </li>
          <li className={`${styles.li} ${show ? styles.slide : ""}`}>
            <img className={styles.icons} src="./images/user.png" alt="" />
            Contact
          </li>
          <li className={`${styles.li} ${show ? styles.slide : ""}`}>
            <img className={styles.icons} src="./images/info.png" alt="" />
            About Us
          </li>
          <li
            onClick={() => closeBtn()}
            className={`${styles.li} ${show ? styles.slide : ""}`}
          >
            <img className={styles.icons} src="./images/close.png" alt="" />
            Close
          </li>
        </ul>
      </div>
    </div>
  );
}
