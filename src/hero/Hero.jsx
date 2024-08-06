import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.herotxt}> Life is A Journey </h1>
      <img className={styles.herobg} src="./images/image2.jpg" alt="" />
    </div>
  );
}
