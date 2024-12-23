import React from "react";
import icon_cancel from "../../assets/Imgs/icon_cancel.png";
import monitor_cart from "../../assets/Imgs/monitor_cart.png";
import Styles from "./CheckOut.module.scss";
import ProductQuantityCounter from "../../Components/Cart/ItemQuantityCart";

const CartProduct = () => {
  return (
    <tr className={`${Styles.table_row}`}>
      <td >
        <div className={`${Styles.Product_cell}`}>
          <div className={`${Styles.img_container} `}>
            <img src={icon_cancel} className={`${Styles.cross_icon}`} alt="" />
            <img
              src={monitor_cart}
              className={`${Styles.product_img}`}
              alt=""
            />
          </div>
          <p className="m-0 ps-2">lcd monitor</p>
        </div>
      </td>
      <td>$650</td>
      <td>
        <ProductQuantityCounter small></ProductQuantityCounter>
      </td>
      <td>@fat</td>
    </tr>
  );
};

export default CartProduct;
