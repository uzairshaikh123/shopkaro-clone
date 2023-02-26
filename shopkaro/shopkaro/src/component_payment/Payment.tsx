import React from "react";
import Checkout from "./Checkout";
import "./payment.css";
import CardForm from "./CardForm";
import Qrpay from "./Qrpay";
import Successfull from "./Successfull";
import { Navigate } from "react-router-dom";

const Payment = () => {
  const [toggle, setToggle] = React.useState<boolean>(true);
  const [done, setDone] = React.useState<boolean>(false);
  const [redirect, setRedirect] = React.useState<boolean>(false);

  const toggleMethod = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const setSuccess = () => {
    setDone(true);
    setTimeout(() => {
      setRedirect(true);
    }, 4000);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="pseudo-nav">
        <img
          src="https://i.ibb.co/Yt2JkRx/Shopkaro-logo-cropped.png"
          alt="logo"
        />
      </div>

      <div className="payment-page">
        <div className="address-info">
          <Checkout />
        </div>

        <div className="payment-info">
          <div className="offer-on-payment">
            <div className="image-cap">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKy1JcH8mFOp6BhpBLyOWydQKy1tvoz4INVQ&usqp=CAU"
                alt="img"
                width="40"
              />
            </div>
            <div>
              <p className="flat">Pay Online & Get Flat 10% Off</p>
              <p className="methods">
                Paytm, Gpay, Phonepe, Net Banking, Debit & Credit Cards
              </p>
            </div>
          </div>

          <div className="card-payment">
            <p id="card-info">
              {toggle
                ? "Please, fill your card detail here"
                : "Please, scan and pay"}
            </p>
            <p style={{ color: "rgb(153 204 51)", marginBottom: "12px" }}>
              ₹198 discount available
            </p>
            {toggle ? <CardForm /> : <Qrpay />}
            <div id="qr">
              <p className="option-pay" onClick={toggleMethod}>
                {toggle ? "Pay via QR code" : "Pay via your card"}
              </p>
            </div>

            <div className="confirm-order">
              <button onClick={setSuccess}>Confirm Order</button>
            </div>
          </div>
        </div>
      </div>

      <div>{done ? <Successfull /> : <></>}</div>
    </>
  );
};

export default Payment;
