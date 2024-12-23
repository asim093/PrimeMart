import React, { useState } from 'react';
import styles from './Banner.module.scss';
import { allProducts } from '../utils/sliderBanner.data.jsx';

const Banner = () => {
    const [targetProduct, setTargetProduct] = useState(allProducts[0]);
    const [fade, setFade] = useState(false);
    const [isRotating, setIsRotating] = useState(true); 

    const productF = (id) => { 
        setFade(true);
        const requiredProduct = allProducts.find((product) => product.id === id);
        setTimeout(() => {
            setTargetProduct(requiredProduct);
            setFade(false);
        }, 500);
    };

    const handleRotationToggle = () => {
        setIsRotating(!isRotating);
    };

    return (
        <div className={styles.Home} > 
            <div className={styles.HeroIntro}>
                <div className={styles.leftContent}>
                    <div className={styles.content}>
                        <h1>𝒫𝓇𝒾𝓂𝑒 𝑀𝒶𝓇𝓉</h1>
                        <h5>Best Selling Products</h5>
                        <p>Our best-selling products are designed to elevate your lifestyle with quality, style, and convenience.</p>
                        <button style={{ backgroundColor: `${targetProduct.color}` }}>Order Now</button> 
                    </div>
                    <div className={styles.itemChoices}>
                        {allProducts.map((product) => ( 
                            <div key={product.id}>
                                <img
                                    onClick={() => productF(product.id)} 
                                    src={product.image}
                                    alt={`Product ${product.id}`} 
                                />
                                <div className={targetProduct.id === product.id ? styles.activeLine : styles.inactive}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.rightContent} ${fade ? styles.fade : ''}`} onClick={handleRotationToggle}>
                    <img
                        src={targetProduct.image}
                        className={`${isRotating ? styles.rightContentImgRotating : styles.rightContentImg} ${fade ? styles.fade : ''}`}
                        alt="Product"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
