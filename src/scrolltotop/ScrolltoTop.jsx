import styles from "./scroll.module.css";

export default function ScrolltoTop() {
  return (
    <div className={styles.circlecontainer}>
      <a className={styles.circlea}>
        <img className={styles.circleimg} src="./images/up.png" />
      </a>
    </div>
  );
}
