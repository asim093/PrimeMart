import React from "react";
import PageLayout from "../../Components/Layout/Layout";
import Styles from "./Checkout.module.scss";
import CartProduct from "./CartProduct.jsx";
import CheckOutSummary from "./CheckOutSummary.jsx";

const CheckOut = () => {
  return (
    <PageLayout>
      <div className="container my-5 py-5">
        <table
          className={`table align-middle table-borderless ${Styles.table_container}`}
        >
          <thead>
            <tr>
              <td scope="col">Product </td>
              <td scope="col">Price</td>
              <td scope="col">Quantity</td>
              <td scope="col">Subtotal</td>
            </tr>
          </thead>
          <br />
          <tbody>
            <CartProduct />
            <CartProduct />
          </tbody>
        </table>
      <div className="d-flex justify-content-end ">
        <CheckOutSummary />
      </div>
      </div>
    </PageLayout>
  );
};

export default CheckOut;
