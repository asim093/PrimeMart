import React from 'react'
import Styles from "./Card.module.scss"

const Categorycard = ({icon , title}) => {
  return (
    <div className={`${Styles.category_card_container}`}>
        <img src={icon} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default Categorycard