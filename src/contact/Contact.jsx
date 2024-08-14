import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div className={styles.contactpage}>
      <div className={styles.column1}>
        <h1 className={styles.contacttxt}>Contact Us</h1>
        <span className={styles.contactspan}>
          Questions About Immigration or Photography?
        </span>
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
