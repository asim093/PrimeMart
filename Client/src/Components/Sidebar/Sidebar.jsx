import React, { useContext, useState } from 'react'
import styles from "./Sidebar.module.scss"
import { SidebarContext } from '../../Context/SidebarContext';
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import GlobalSearchbar from '../Search/Searchbar';
import ShippingCart from '../Cart/ShippingCart';
import { useDispatch, useSelector } from 'react-redux';


const Sidebar = () => {
    const { issidebar, sidebaropen, sidebarclosed } = useContext(SidebarContext);
    const dispatch = useDispatch();
    const login = useSelector(state => state.user.isLogin);
    const issidebar_active = issidebar ? `${styles.Sidebar_container} ${styles.active}` : `${styles.Sidebar_container}`;
    return (
        <aside className={issidebar_active}>
            <RxCross1 className={styles.sidebar_icon} onClick={sidebarclosed} />
            <div className={styles.sidebar_content_container}>
                <div>

                    <div className={styles.global_search_wrapper}>
                        <GlobalSearchbar />
                    </div>
                    <div className={styles.shopping_cart_container}>
                        <h5>My Shopping</h5>
                        <ShippingCart />
                    </div>
                </div>

                <div className={styles.nav_links_container}>


                    <ul>
                        <li>
                            <NavLink to="/" className={`${styles.nav_link_item} nav-link active`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" className={`${styles.nav_link_item} nav-link active`}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" className={`${styles.nav_link_item} nav-link active`}>About</NavLink>
                        </li>
                        <li>
                            <NavLink  className={`${styles.nav_link_item} nav-link active`} onClick={() => dispatch(adduser()) } >{login ? "SignOut" : "SignUp"}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar