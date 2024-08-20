import { useState } from "react";
import styles from "./modules/mobilenav.module.css";

export default function Mobilenav({ show, setShow }) {
  const [close, setClose] = useState();
  // let showdiv = show ? styles.show : "";

  function closeBtn() {
    setShow(!show);
    setClose(true);
  }

  return (
    <div
      className={`${styles.mobnav} ${show ? styles.show : ""} ${
        close ? styles.close : ""
      }`}
    >
      <div className={styles.linkscontainer}>
        <ul className={styles.ul}>
          <li className={styles.li}>Gallery </li>
          <li className={styles.li}>Contact</li>
          <li className={styles.li}>About Me</li>
          <li onClick={() => closeBtn()} className={styles.li}>
            X
          </li>
        </ul>
      </div>
    </div>
  );
}
