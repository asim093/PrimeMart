import React from 'react'
import PageLayout from './Layout'
import authBanner from '../../assets/Imgs/authbanner.png'
import styles from './Layouts.module.scss'

const AuthLayout = ({ children }) => {
    return (
        <>
            <PageLayout>
                <div className='container-fluid px-0'>
                    <div className={`row ${styles.row_wrap} `}>
                        <div className='col-6 m-0 p-0 d-lg-block d-none'>
                            <figure className={styles.auth_banner_img}>
                                <img src={authBanner} alt="IMAGE" />
                            </figure>
                        </div>

                        <div className='col-lg-6 col-sm-8 col-11 mx-auto'>
                            <div className={styles.form_wrapper}> 

                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>

        </>
    )
}

export default AuthLayout