import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div className={styles.contactpage}>
      <div className={styles.column1}>
        <h1 className={styles.contacttxt}>Contact Us</h1>
        <div className={styles.contactscontainer}>
          <div className={styles.instagram}>@loremipsum</div>
          <div className={styles.gmail}>@loremimsup@gmail.com</div>
        </div>
      </div>
      <div
        className={styles.column2}
        style={{ backgroundImage: `url('./images/image31.JPG')` }}
      >
        <h1></h1>
      </div>
    </div>
  );
}
