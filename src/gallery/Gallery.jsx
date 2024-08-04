import styles from "./gallery.module.css";
export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h1>This is Where the images will be</h1>
      <div className={styles.images}>
        <img className={styles.image} src="./images/image1.png" alt="" />
        <img className={styles.image} src="./images/image2.jpg" alt="" />
        <img className={styles.image} src="./images/image3.jpg" alt="" />
      </div>
    </div>
  );
}
