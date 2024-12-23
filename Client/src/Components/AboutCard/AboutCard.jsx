import React from "react";
import styles from "./AboutCard.module.scss";

const AboutCard = (props) => {
  return (
    <div className={`${styles.cardContainer} border`}>
      <div className={styles.imageback}>
        <div className={styles.imageInner}>
          <img src={props.image} alt="" />
        </div>
      </div>
      <h2>{props.price}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default AboutCard;
