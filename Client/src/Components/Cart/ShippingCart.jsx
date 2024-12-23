import React from "react";
import CartIcon from "../../assets/Icons/CartIcon.svg";
import styles from "./shoppingcart.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShippingCart = () => {
  const userData = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  function clickCart() {
    if (!userData) {
      navigate("/Auth/Login");
    } else {
      navigate("/Checkout");
    }
  }
  return (
    <div className={styles.cart_icon}>
      <img src={CartIcon} onClick={clickCart} alt="Cart Icon" />
    </div>
  );
};

export default ShippingCart;
