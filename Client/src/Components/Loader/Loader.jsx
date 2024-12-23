import React from "react";
import Styles from "./Loader.module.scss";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={`${Styles.container}`}>
      <div>
      <PropagateLoader size={30} color="#DB4444" speedMultiplier={1.6} />
      </div>
    </div>
  );
};

export default Loader;
