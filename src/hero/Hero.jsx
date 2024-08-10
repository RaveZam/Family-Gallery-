import styles from "./hero.module.css";
import { useInView } from "react-intersection-observer";
import { animateScroll } from "react-scroll";

export default function Hero() {
  // const [ref, inView] = useInView({
  //   threshold: 0,
  // });
  const options = {
    // Your options here, for example:
    duration: 500,
    smooth: true,
  };
  function toGallery() {
    animateScroll.scrollTo(800, options);
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
          onClick={() => toGallery()}
          className={`${styles.btn} ${styles.btn1}`}
        >
          View Gallery
        </button>
      </div>
    </div>
  );
}
