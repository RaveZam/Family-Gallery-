import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.herobg} src="./images/image9.jpg" alt="" />
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
