import styles from "./landingpage.module.css";
export default function Landingpage() {
  return (
    <div className={styles.page}>
      <div className={styles.imgcontainer}>
        <img className={styles.image} src="/images/image6.jpg" alt="" />
        <img className={styles.image2} src="/images/image7.jpg" alt="" />
      </div>
      <h1 className={styles.title}>Our Family</h1>
    </div>
  );
}
