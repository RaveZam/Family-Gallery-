import LightGallery from "lightgallery/react";
import { useInView } from "react-intersection-observer";
import styles from "./gallery.module.css";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const [ref, isVisible] = useInView({
    threshold: 1,
    // rootMargin: "300px",
    triggerOnce: true,
  });
  const [ref2, isVisible2] = useInView({
    threshold: 1,
    // rootMargin: "400px",
    triggerOnce: true,
  });
  const [ref3, isVisible3] = useInView({
    threshold: 1,
    // rootMargin: "400px",
    triggerOnce: true,
  });
  const [ref4, isVisible4] = useInView({
    threshold: 1,
    // rootMargin: "400px",
    triggerOnce: true,
  });

  return (
    <div className={styles.app}>
      <div className={styles.gallery}>
        <div className={styles.column}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a ref={ref} href="./images/image2.jpg">
              <img
                loading="lazy"
                className={`${styles.image} ${isVisible ? styles.visible : ""}`}
                alt="img2"
                src="./images/image2.jpg"
              />
            </a>
            <a ref={ref2} href="./images/image1.jpg">
              <img
                className={`${styles.image} ${
                  isVisible2 ? styles.visible : ""
                }`}
                alt="img1"
                src="./images/image1.jpg"
              />
            </a>
            <a ref={ref3} href="./images/image7.jpg">
              <img
                className={`${styles.image} ${
                  isVisible3 ? styles.visible : ""
                }`}
                alt="img7"
                src="./images/image7.jpg"
              />
            </a>
            <a ref={ref4} href="./images/image8.jpg">
              <img
                className={`${styles.image} ${
                  isVisible4 ? styles.visible : ""
                }`}
                alt="img8"
                src="./images/image8.jpg"
              />
            </a>
          </LightGallery>
        </div>
        <div className={styles.column}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href="./images/image5.jpg">
              <img
                className={`${styles.image} ${
                  isVisible ? styles.visible : ""
                } ${styles.img5}`}
                alt="img5"
                src="./images/image5.jpg"
              />
            </a>
            <a href="./images/image6.jpg">
              <img
                className={`${styles.image} ${
                  isVisible2 ? styles.visible : ""
                } ${styles.img6}`}
                alt="img6"
                src="./images/image6.jpg"
              />
            </a>
            <a href="./images/image3.jpg">
              <img
                className={`${styles.image} ${
                  isVisible3 ? styles.visible : ""
                } ${styles.img3}`}
                alt="img3"
                src="./images/image3.jpg"
              />
            </a>

            <a href="./images/image4.jpg">
              <img
                className={`${styles.image} ${
                  isVisible4 ? styles.visible : ""
                } ${styles.img4}`}
                alt="img4"
                src="./images/image4.jpg"
              />
            </a>
          </LightGallery>
        </div>
        <div className={styles.column}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href="./images/image8.jpg">
              <img
                className={`${styles.image} ${
                  isVisible ? styles.visible : ""
                } ${styles.img8}`}
                alt="img8"
                src="./images/image8.jpg"
              />
            </a>
            <a href="./images/image9.jpg">
              <img
                className={`${styles.image} ${
                  isVisible2 ? styles.visible : ""
                } ${styles.img9}`}
                alt="img9"
                src="./images/image9.jpg"
              />
            </a>
            <a href="./images/image10.jpg">
              <img
                className={`${styles.image} ${
                  isVisible3 ? styles.visible : ""
                } ${styles.img10}`}
                alt="img10"
                src="./images/image10.jpg"
              />
            </a>
            <a href="./images/image7.jpg">
              <img
                className={`${styles.image} ${
                  isVisible4 ? styles.visible : ""
                } ${styles.img7}`}
                alt="img7"
                src="./images/image7.jpg"
              />
            </a>
          </LightGallery>
        </div>
      </div>
    </div>
  );
}
