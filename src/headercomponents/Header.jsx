import { useState } from "react";
import Mobilenav from "./Mobilenav";
import Nav from "./Nav";
import styles from "./modules/header.module.css";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.namecontainer}>
        <h1 className={styles.name}>IVAN PINTO</h1>
      </div>
      <Nav show={show} setShow={setShow} />
      <Mobilenav show={show} />
    </div>
  );
}
