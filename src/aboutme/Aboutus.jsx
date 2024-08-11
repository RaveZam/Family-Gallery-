import styles from "./aboutus.module.css";
export default function Aboutus() {
  return (
    <div className={styles.aboutusmaincontainer}>
      <div className={styles.aboutusimagecontainer}>
        <img className={styles.aboutusimage} src="./images/image6.jpg" alt="" />
      </div>
      <div className={styles.aboutustextcontainer}>
        <h1>Threads of Time </h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magni
          officiis eius soluta pariatur est cupiditate, facilis alias esse aut,
          laudantium voluptate cum, rerum suscipit tempora doloremque earum in
          officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium vero dicta veniam enim aliquam vel earum saepe quisquam
          sed porro officia eaque tenetur error, architecto alias cupiditate
          doloribus sunt! Illo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis porro incidunt accusantium, provident omnis
          nam vitae ullam laborum non id iste! Natus ut ipsam, modi voluptas
          amet debitis eius atque.
        </span>
      </div>
    </div>
  );
}
