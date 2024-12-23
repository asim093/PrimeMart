import React from 'react'
import sqIcon from '../../assets/Imgs/sqi.png'
import Styles from "./SectionHeading.module.scss"

const SectionHeading = ({ title, children }) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.header} >
                <img src={sqIcon} alt="" />
                <p>{children}</p>
            </div>
            <h2 className={Styles.title}>{title}</h2>
        </div>
    )
}

export default SectionHeading