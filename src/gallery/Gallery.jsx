import LightGallery from "lightgallery/react";
import { useInView } from "react-hook-inview";
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
  });

  return (
    <div className={styles.app}>
      {/* <div className={styles.gdiv}>
        <h1 className={styles.galleryh1}>
          <em> We Captured </em> It
        </h1>
      </div> */}
      <div className={styles.gallery}>
        <div className={styles.column}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a ref={ref} href="./images/image2.jpg">
              <img
                className={styles.image}
                alt="img2"
                src="./images/image2.jpg"
              />
              {console.log(isVisible ? "I Am Visible!" : "Im Gone bish")}
            </a>
            <a href="./images/image1.jpg">
              <img
                className={styles.image}
                alt="img1"
                src="./images/image1.jpg"
              />
            </a>
            <a href="./images/image7.jpg">
              <img
                className={styles.image}
                alt="img7"
                src="./images/image7.jpg"
              />
            </a>
            <a href="./images/image8.jpg">
              <img
                className={styles.image}
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
                className={styles.image}
                alt="img5"
                src="./images/image5.jpg"
              />
            </a>
            <a href="./images/image6.jpg">
              <img
                className={styles.image}
                alt="img6"
                src="./images/image6.jpg"
              />
            </a>
            <a href="./images/image3.jpg">
              <img
                className={styles.image}
                alt="img3"
                src="./images/image3.jpg"
              />
            </a>

            <a href="./images/image4.jpg">
              <img
                className={styles.image}
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
                className={styles.image}
                alt="img8"
                src="./images/image8.jpg"
              />
            </a>
            <a href="./images/image9.jpg">
              <img
                className={styles.image}
                alt="img9"
                src="./images/image9.jpg"
              />
            </a>
            <a href="./images/image10.jpg">
              <img
                className={styles.image}
                alt="img10"
                src="./images/image10.jpg"
              />
            </a>
            <a href="./images/image7.jpg">
              <img
                className={styles.image}
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
