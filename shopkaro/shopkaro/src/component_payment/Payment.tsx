import React from "react";
import Checkout from "./Checkout";
import "./payment.css";

const Payment = () => {
  return (
    <div className="payment-page">
      <div className="address-info">
        <Checkout />
      </div>
      <div className="payment-info"></div>
    </div>
  );
};

export default Payment;
