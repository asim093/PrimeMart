import React from "react";
import PageLayout from "../../Components/Layout/Layout";
import styles from "./Contact.module.scss";
import mailIcon from "../../assets/Imgs/icons-mail.png";
import phoneIcon from "../../assets/Imgs/icons-phone.png";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

const Contact = () => {
  return (
    <PageLayout>
      <div className={`${styles.formcontainer} container`}>
        <div className={styles.mainContainer}>
          <div className="row d-flex justify-content-between ">
            <div className={`${styles.content_div} col-lg-4  `}>
              {/* call icon start  */}

              <div className={styles.iconCall}>
                <div
                  className={`${styles.content} d-flex gap-4 my-4 align-items-center`}
                >
                  <div className={styles.icon_div}>
                    <img src={phoneIcon} alt="phone icon" />
                  </div>
                  <div className={styles.icon_content}>
                    <h3>Call to Us</h3>
                  </div>
                </div>
                <div className={styles.callContent}>
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>
              </div>

              <hr />
              {/* call icon end  */}

              {/* mail icon start  */}
              <div
                className={`${styles.content} d-flex gap-4 my-4 align-items-center`}
              >
                <div className={styles.icon_div}>
                  <img src={mailIcon} alt="mail icon" />
                </div>
                <div className={styles.icon_content}>
                  <h3>Write to Us</h3>
                </div>
              </div>
              <div className={styles.callContent}>
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
              {/* mail icon end  */}
            </div>

            {/* form div start  */}
            <div className={`${styles.formDiv} col-lg-8 `}>
              <form action="#" className="pt-4">
                <div className={`${styles.inputDiv}` }>
                  <input type="text" placeholder="Enter Your Name" />
                  <input type="email" placeholder="Enter Your Email" />
                  <input type="text" placeholder="Enter your Number" />
                </div>

                <div className={styles.textarea}>
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <div className={styles.button_div}>
                <PrimaryButton>Send Message</PrimaryButton> 
                </div>
              </form>
            </div>

            {/* form div end  */}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
