import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div className={styles.contactpage}>
      <div className={styles.column1}>
        <div className={styles.contacttextcontainer}>
          <h1 className={styles.contacttxt}>Contact Us</h1>
          <span className={styles.contactspan}>
            Questions about <em>immigration </em>
            and <em> photography?</em> Contact us below with:
          </span>
        </div>
        <div className={styles.contactscontainer}>
          {/* <img className={styles.phone} src="./images/phone.png" alt="" /> */}
          <div className={styles.instagram}>
            <div className={styles.instabg}>
              <img className={styles.insta} src="./images/insta.png" alt="" />
              <span className={styles.instaspantitle}>Instagram</span>
              <span className={styles.instaspan}>
                <em>@jushivan </em>
              </span>
              <button className={`${styles.btn} ${styles.btn1}`} type="button">
                Contact
              </button>
            </div>
          </div>
          <div className={styles.gmail}>
            <div className={styles.gmailbg}>
              <img
                className={styles.gmailimg}
                src="./images/gmail.png"
                alt=""
              />
              <span className={styles.gmailspantitle}>Gmail</span>
              <span className={styles.gmailspan}>
                <em>olatsfilm@gmail.com </em>
              </span>
              <button className={`${styles.btn} ${styles.btn1}`} type="button">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.column2}
        style={{ backgroundImage: `url('./images/image31.JPG')` }}
      ></div>
    </div>
  );
}
