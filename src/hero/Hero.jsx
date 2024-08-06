import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.herobg} src="./images/image2.jpg" alt="" />
    </div>
  );
}
