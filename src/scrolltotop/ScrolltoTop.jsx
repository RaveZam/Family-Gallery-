import styles from "./scroll.module.css";

export default function ScrolltoTop() {
  function scroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  }
  return (
    <div className={styles.circlecontainer}>
      <a className={styles.circlea}>
        <img
          onClick={() => scroll()}
          className={styles.circleimg}
          src="./images/up.png"
        />
      </a>
    </div>
  );
}
