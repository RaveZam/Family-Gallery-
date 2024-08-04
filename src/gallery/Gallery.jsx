import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.images}>
        <img className={styles.image} src="./images/image1.png" alt="" />
        <img className={styles.image} src="./images/image10.jpg" alt="" />
        <img className={styles.image} src="./images/image3.jpg" alt="" />
        <img className={styles.image} src="./images/image4.jpg" alt="" />
        <img className={styles.image} src="./images/image5.jpg" alt="" />
        <img className={styles.image} src="./images/image6.jpg" alt="" />
        <img className={styles.image} src="./images/image7.jpg" alt="" />
        <img className={styles.image} src="./images/image8.jpg" alt="" />
        <img className={styles.image} src="./images/image9.jpg" alt="" />
        <img className={styles.image} src="./images/image2.jpg" alt="" />
      </div>
    </div>
  );
}
