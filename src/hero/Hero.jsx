import styles from "./hero.module.css";

export default function Hero({ scrollToGallery }) {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url('./images/image9.jpg')` }}
    >
      <div className={styles.herotxtcontainer}>
        <h1 className={styles.showherotxt}>
          A Journey Through Our Life in Photos
        </h1>
        <p className={`${styles.showspantxt}`}>
          Explore the moments that define us. From travels and holidays to
          everyday adventures, our gallery captures the essence of our family's
          journey.
        </p>
        <p className={styles.mobilespan}>
          Explore the moments that define us. From travels to everyday
          adventures, our gallery captures the essence of our family.
        </p>
        <button
          onClick={() => {
            scrollToGallery();
          }}
          className={`${styles.btn} ${styles.btn1}`}
        >
          View Gallery
        </button>
      </div>
    </div>
  );
}
