import React from "react";
import PageLayout from "../../Components/Layout/Layout";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import styles from "./NotFound.module.scss"; // Import the CSS module
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  function gohome() {
    navigate("/");
  }
  return (
    <PageLayout>
      <div className={styles.centeredContainer}>
        <h1>404 Not Found</h1>
        <p>Your visited page is not found. You may go to the Home page.</p>
        <div className={styles.button_div}>
            <div onClick={gohome}>
          <PrimaryButton>Back to Homepage</PrimaryButton>
            </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
