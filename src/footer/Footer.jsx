import Footernav from "./Footernav";
import styles from "./footer.module.css";
export default function Footer({
  scrollToGallery,
  scrollToAbout,
  scrollToContact,
}) {
  return (
    <div className={styles.footer}>
      <Footernav
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout}
      />
    </div>
  );
}
