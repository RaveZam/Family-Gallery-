import styles from "./aboutus.module.css";
import { useInView } from "react-intersection-observer";
export default function Aboutusimagecomponent() {
  const [ref, isVisible] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div>
      <div className={styles.tapeoverlays}>
        {/* <img className={styles.retro} src="/images/retro.png" alt="" /> */}
      </div>
      <img
        ref={ref}
        className={`${styles.aboutusimage2} ${isVisible ? styles.appear : ""}`}
        src="./images/image24.JPG"
        alt=""
      />
      <img
        className={`${styles.aboutusimage3} ${isVisible ? styles.appear2 : ""}`}
        src="./images/image28.JPG"
        alt=""
      />
      <img
        className={`${styles.aboutusimage4} ${isVisible ? styles.appear3 : ""}`}
        src="./images/image32.JPG"
        alt=""
      />
      <img
        className={`${styles.aboutusimage5} ${isVisible ? styles.appear4 : ""}`}
        src="./images/image29.JPG"
        alt=""
      />
      {/* <img className={styles.cross} src="/images/retro.png" alt="" /> */}
      {/* <img className={styles.cross} src="./images/cross.png" alt="" /> */}
    </div>
  );
}
