import React from 'react'
import styles from './Searchbar.module.scss'
import SearchIcon from '../../assets/Icons/Searchicon.svg'


const GlobalSearchbar = () => {
    return (
        <div className={`${styles.global_search_container} d-flex justify-content-center align-items-center `}>
            <input className="form-control me-2" type="search" placeholder="What are You Looking for?" aria-label="Search" />
            <img src={SearchIcon} alt="Search Icon" />
        </div>
    )
}

export default GlobalSearchbar
