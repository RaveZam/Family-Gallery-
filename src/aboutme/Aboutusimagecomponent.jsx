import styles from "./aboutus.module.css";
export default function Aboutusimagecomponent() {
  return (
    <div className={styles.aboutusimagecontainer}>
      <div className={styles.tapeoverlays}>
        {/* <img className={styles.retro} src="/images/retro.png" alt="" /> */}
      </div>
      <img className={styles.aboutusimage2} src="./images/image24.JPG" alt="" />
      <img className={styles.aboutusimage3} src="./images/image28.JPG" alt="" />
      <img className={styles.aboutusimage4} src="./images/image32.JPG" alt="" />
      <img className={styles.aboutusimage5} src="./images/image29.JPG" alt="" />
      {/* <img className={styles.cross} src="/images/retro.png" alt="" /> */}
      {/* <img className={styles.cross} src="./images/cross.png" alt="" /> */}
    </div>
  );
}
