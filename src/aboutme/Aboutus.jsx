import styles from "./aboutus.module.css";
import Aboutusimagecomponent from "./Aboutusimagecomponent";
export default function Aboutus() {
  return (
    <div className={styles.aboutusmaincontainer}>
      <Aboutusimagecomponent />
      <div className={styles.overlaydiv}>
        <img className={styles.camera} src="/images/camera.png" alt="" />
      </div>
      <div className={styles.aboutustextcontainer}>
        <h1 className={styles.aboutush1}>About Us </h1>
        <span>
          Our family’s journey started in the vibrant Philippines, where we were
          shaped by rich traditions and deep cultural values. From the lively
          festivals to the close-knit community, these experiences taught us the
          importance of family, faith, and resilience.
        </span>
        <br />
        <br />
        <span>
          These core values have guided us through every step of our journey,
          especially as we embarked on a new chapter in Canada. Here, we've
          found new opportunities and challenges, but our Filipino heritage
          remains the foundation of our strength and unity.
        </span>
        <img className={styles.polaroids} src="/images/polaroids.png" alt="" />
      </div>
    </div>
  );
}
