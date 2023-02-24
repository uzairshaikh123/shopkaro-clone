import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div>
      <h3>Please Fill Address For Shipping</h3>
      <div className="form-info">
        <form>
          <div className="block-1">
            <input type="number" placeholder="Pincode*" />
            <input type="number" placeholder="Mobile Number*" />
          </div>
          <input type="text" placeholder="Full Name*" />
          <input type="text" placeholder="Flat/House No/Building*" />
          <input type="text" placeholder="Colony/Locality/Road*" />
          <input type="text" placeholder="City*" />
          <input type="State" placeholder="State*" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
