import { forwardRef } from "react";
import styles from "./hero.module.css";

function Hero({ scrollToGallery }) {
  const scrollPosition = window.innerHeight * 1.2;
  function toGallery() {
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url('./images/image9.jpg')` }}
    >
      <div className={styles.herotxtcontainer}>
        <h1 className={styles.herotxt}>A Journey Through Our Life in Photos</h1>
        <p className={styles.herospan}>
          Explore the moments that define us. From travels and holidays to
          everyday adventures, our gallery captures the essence of our family's
          journey.
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

export default forwardRef(Hero);
