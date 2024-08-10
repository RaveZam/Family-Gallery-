import styles from "./hero.module.css";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  // ./images/image9.jpg
  return (
    <div className={styles.hero}>
      <div className={styles.herotxtcontainer}>
        <h1 className={styles.herotxt}>A Journey Through Our Life in Photos</h1>
        <p className={styles.herospan}>
          Explore the moments that define us. From travels and holidays to
          everyday adventures, our gallery captures the essence of our family's
          journey.
        </p>
        <button className={`${styles.btn} ${styles.btn1}`}>View Gallery</button>
      </div>
    </div>
  );
}
