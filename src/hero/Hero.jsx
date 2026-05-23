import { useState, useEffect } from "react";
import styles from "./hero.module.css";

const BG_URL =
  "https://res.cloudinary.com/dungl1ylq/image/upload/v1779523026/image9_egkz0j.jpg";

export default function Hero({ scrollToGallery }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = BG_URL;
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true); // don't hang forever on error
  }, []);

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url('${BG_URL}')` }}
    >
      <div className={`${styles.loadingOverlay} ${loaded ? styles.overlayHidden : ""}`} />
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
