import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from './Eyebutton.module.scss'

const Eyebutton = ({ showEye, showEyeFunc }) => {
    function toggleEye() {
        showEyeFunc(!showEye);  
    }

    return (
        <div onClick={toggleEye} tabIndex="-1">
            {showEye ? <FaEye className={styles.button}/> : <FaEyeSlash className={styles.button} />} 
        </div>
    );
};

export default Eyebutton;
