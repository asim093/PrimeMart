import React from 'react';
import styles from './footer.module.scss';
import { FaGooglePlay } from "react-icons/fa";
import Qrcode from '../../assets/Imgs/footer_qrcode.png';
import footer_googleplay from '../../assets/Imgs/footer_appstore.png';
import footer_playstore from '../../assets/Imgs/footer_playstore.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                {/* Exclusive Section */}
                <div className={styles.subscribe}>
                    <div className={styles.sectionTitle}>Prime Mart</div>
                    <h5>Subscribe</h5>
                    <p>Get 10% off your first order</p>
                    <div className={styles.email_container}>
                        <input type="email" placeholder="Enter your email" />
                        <FaGooglePlay />

                    </div>
                </div>

                {/* Support Section */}
                <div className={styles.support}>
                    <div className={styles.sectionTitle}>Support</div>
                    <ul>
                        <li>111 Bijoy sarani, Dhaka,</li>
                        <li>DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                {/* Account Section */}
                <div className={styles.account}>
                    <div className={styles.sectionTitle}>Account</div>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>

                {/* Quick Link Section */}
                <div className={styles.quickLink}>
                    <div className={styles.sectionTitle}>Quick Link</div>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Download App Section */}
                <div className={styles.download}>
                    <div className={styles.sectionTitle}>Download App</div>
                    <p>Save $3 with App New User Only</p>
                    <div className={styles.footer_images}>
                        <div>
                            <img src={Qrcode} alt="" />
                        </div>
                        <div className={styles.footer_icon_images}>
                            <img src={footer_googleplay} alt="Google Play" />
                            <img src={footer_playstore} alt="App Store" />
                        </div>
                    </div>

                    <div className={styles.socialIcons}>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className={styles.copyright}>
                © Copyright PrimeMart 2024. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
