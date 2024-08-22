import { Link } from "react-scroll";
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
              <a
                target="blank"
                href="https://www.instagram.com/jushivan/?hl=en"
              >
                <button
                  className={`${styles.btn} ${styles.btn1} ${styles.instabtn}`}
                  type="button"
                >
                  Contact
                </button>
              </a>
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
              <a
                target="blank"
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              >
                <button
                  className={`${styles.btn} ${styles.btn1} ${styles.gmailbtn}`}
                  type="button"
                >
                  Contact
                </button>
              </a>
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
// .contactpage {
//   height: 50vh;
//   display: flex;
//   flex-direction: column;
// }
// .column2 {
//   height: 100%;
//   width: 100%;
//   z-index: -1;
//   /* transform: rotate(-90deg); */
// }

// .column1 {
//   width: 100%;
// }
// .contacttxt {
//   font-size: 10vw;
//   padding-top: 10px;
//   margin-bottom: 10px;
// }

// .contacttextcontainer {
//   margin-bottom: 10px;
//   padding: 10px;
//   padding-left: 10px;
//   padding-right: 10px;
// }

// .contactspan {
//   font-size: 5vw;
// }

// .btn {
//   margin-top: 10%;
//   font-size: 4vw;
// }

// .gmailbtn {
//   width: 65%;
//   transform: translateY(-38%);
// }

// .gmailimg {
//   max-width: 55%;
//   margin-bottom: -1%;
// }

// .insta {
//   max-width: 60%;
//   /* margin-bottom: -1%; */
// }

// .gmailspan {
//   margin-left: 15px;
//   transform: translateY(-90%);
//   font-size: 4vw;
// }

// .instaspan {
//   transform: translateY(-155%);
//   font-size: 5vw;
// }
// .gmailspantitle {
//   display: none;
// }

// .instaspantitle {
//   display: none;
// }
