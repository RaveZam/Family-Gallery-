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
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref2, isVisible2] = useInView({
    threshold: 1,
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref3, isVisible3] = useInView({
    threshold: 1,
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref4, isVisible4] = useInView({
    threshold: 1,
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref5, isVisible5] = useInView({
    threshold: 1,
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref6, isVisible6] = useInView({
    threshold: 1,
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref7, isVisible7] = useInView({
    threshold: 1,
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref8, isVisible8] = useInView({
    threshold: 1,
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref9, isVisible9] = useInView({
    threshold: 1,
    rootMargin: "250px",
    triggerOnce: true,
  });
  const [ref10, isVisible10] = useInView({
    threshold: 1,
    rootMargin: "200px",
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
                alt="img13"
                src="./images/image13.jpg"
              />
            </a>
            <a ref={ref5} href="./images/image4.jpg">
              <img
                className={`${styles.image} ${
                  isVisible5 ? styles.visible : ""
                }`}
                alt="img14"
                src="./images/image14.jpg"
              />
            </a>
            <a ref={ref6} href="./images/image20.jpg">
              <img
                className={`${styles.image} ${
                  isVisible6 ? styles.visible : ""
                }`}
                alt="img20"
                src="./images/image20.jpg"
              />
            </a>
            <a ref={ref7} href="./images/image23.JPG">
              <img
                className={`${styles.image} ${
                  isVisible7 ? styles.visible : ""
                }`}
                alt="img23"
                src="./images/image23.JPG"
              />
            </a>
            <a ref={ref8} href="./images/image26.JPG">
              <img
                className={`${styles.image} ${
                  isVisible8 ? styles.visible : ""
                }`}
                alt="img26"
                src="./images/image26.JPG"
              />
            </a>
            <a ref={ref9} href="./images/image29.JPG">
              <img
                className={`${styles.image} ${
                  isVisible9 ? styles.visible : ""
                }`}
                alt="img29"
                src="./images/image29.JPG"
              />
            </a>
            {/* <a ref={ref10} href="./images/image32.JPG">
              <img
                className={`${styles.image} ${
                  isVisible10 ? styles.visible : ""
                }`}
                alt="img32"
                src="./images/image32.JPG"
              />
            </a> */}
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
            <a href="./images/image14.jpg">
              <img
                className={`${styles.image} ${
                  isVisible5 ? styles.visible : ""
                } ${styles.img4}`}
                alt="img17"
                src="./images/image17.jpg"
              />
            </a>
            <a href="./images/image21.jpg">
              <img
                className={`${styles.image} ${
                  isVisible6 ? styles.visible : ""
                } ${styles.img4}`}
                alt="img17"
                src="./images/image21.jpg"
              />
            </a>
            <a href="./images/image24.JPG">
              <img
                className={`${styles.image} ${
                  isVisible7 ? styles.visible : ""
                } ${styles.img4}`}
                alt="img24"
                src="./images/image24.JPG"
              />
            </a>
            <a href="./images/image27.JPG">
              <img
                className={`${styles.image} ${
                  isVisible8 ? styles.visible : ""
                } ${styles.img4}`}
                alt="img27"
                src="./images/image27.JPG"
              />
            </a>
            <a href="./images/image30.JPG">
              <img
                className={`${styles.image} ${
                  isVisible9 ? styles.visible : ""
                } ${styles.img4}`}
                alt="img30"
                src="./images/image30.JPG"
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
            <a href="./images/image11.jpg">
              <img
                className={`${styles.image} ${
                  isVisible4 ? styles.visible : ""
                } ${styles.img7}`}
                alt="img11"
                src="./images/image12.jpg"
              />
            </a>
            <a href="./images/image19.jpg">
              <img
                className={`${styles.image} ${
                  isVisible5 ? styles.visible : ""
                } ${styles.img7}`}
                alt="img19"
                src="./images/image19.jpg"
              />
            </a>
            <a href="./images/image22.jpg">
              <img
                className={`${styles.image} ${
                  isVisible6 ? styles.visible : ""
                } ${styles.img7}`}
                alt="img22"
                src="./images/image22.jpg"
              />
            </a>
            <a href="./images/image25.JPG">
              <img
                className={`${styles.image} ${
                  isVisible7 ? styles.visible : ""
                } ${styles.img7}`}
                alt="img25"
                src="./images/image25.JPG"
              />
            </a>
            <a href="./images/image28.JPG">
              <img
                className={`${styles.image} ${
                  isVisible8 ? styles.visible : ""
                } ${styles.img7}`}
                alt="img28"
                src="./images/image28.JPG"
              />
            </a>
            <a href="./images/image32.JPG">
              <img
                className={`${styles.image} ${
                  isVisible9 ? styles.visible : ""
                } ${styles.img7}`}
                alt="img32"
                src="./images/image32.JPG"
              />
            </a>
          </LightGallery>
        </div>
      </div>
    </div>
  );
}
