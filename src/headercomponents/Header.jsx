import { useState } from "react";
import Mobilenav from "./Mobilenav";
import Nav from "./Nav";
import styles from "./modules/header.module.css";
export default function Header({
  scrollToGallery,
  scrollToContact,
  scrollToAbout,
}) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.namecontainer}>
        <h1 className={styles.name}>OLATS FILM</h1>
      </div>
      <Nav
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout}
        show={show}
        setShow={setShow}
      />
      <Mobilenav
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout}
        show={show}
        setShow={setShow}
      />
    </div>
  );
}
