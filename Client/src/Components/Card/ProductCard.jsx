import React from 'react'
import Styles from './Card.module.scss';
import p1 from '../../assets/Imgs/p1.png'
import carticon from '../../assets/Imgs/carticon.png'
import { Rating } from 'react-simple-star-rating';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
    const isLogin = useSelector(state => state.user.isLogin);
    const navigate = useNavigate();
    return (
        <div className={`${Styles.product_card_container}`} onClick={()=> navigate('/products-info')}>
            <div className={`${Styles.card_img_Container}`}>
                <img src={data?.images[0]} alt="" />
            </div>

            <div className={`${Styles.card_content}`}>
                <div className={`${Styles.card_detail}`}>
                    <h6>{data?.name}</h6>
                    <p>Price: ${data?.price}</p>
                    <Rating initialValue={data?.rating} allowFraction={true} size={20} />

                </div>
                <div className={`${Styles.cart_icon}`}>
                    <img onClick={() => isLogin ?   alert("Add to cart") : navigate('Auth/Signup') } style={{ cursor: "pointer" }} src={carticon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard