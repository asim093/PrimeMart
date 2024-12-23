import React from "react";
import styles from "./AboutTeamCard.module.scss";
import team from "../../assets/Imgs/AboutTeam1.png";
import { RiAlignItemHorizontalCenterLine, RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const AboutTeamCard = ({item}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.image_div}>
        <img src={item.image} alt="Team image" />
      </div>
      <div className={styles.team_content}>
        <h1>{item.name}</h1>
        <p>{item.bio}</p>
        <div className={styles.icon_div}>
          <RiLinkedinLine />
          <FaInstagram />
          <CiTwitter />
        </div>
      </div>
    </div>
  );
};

export default AboutTeamCard;
