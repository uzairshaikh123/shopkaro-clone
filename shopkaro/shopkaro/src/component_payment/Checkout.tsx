import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div className="div-del">
      <h3>Please Fill Address For Shipping</h3>
      <div className="form-info">
        <form>
          <div className="block-1">
            <input type="number" placeholder="Pincode*" />
            <input type="number" placeholder="Mobile Number*" />
          </div>

          <br />

          <div className="block-2">
            <input type="text" placeholder="Full Name*" />
          </div>

          <br />

          <div className="block-3">
            <input type="text" placeholder="Flat/House No/Building*" />
          </div>

          <br />

          <div className="block-4">
            <input type="text" placeholder="Colony/Locality/Road*" />
          </div>

          <br />

          <div className="block-5">
            <input type="text" placeholder="City*" />
            <input type="State" placeholder="State*" />
          </div>

          <br />

          <div className="block-6">
            <label style={{ color: "#707070" }}>Address Type: </label>
            <select id="addr" value="">
              <option value="Home">Home</option>
              <option value="Office">Office</option>
            </select>
          </div>
        </form>
      </div>

      <br />
      <br />

      <p>
        ShopKaro is offered in : <span id="hindi">हिन्दी</span>
      </p>

      <br />

      <p className="second-p">
        For order related queries, please use our need help section in{" "}
        <span id="my-order-help">My Orders</span>
      </p>
    </div>
  );
};

export default Checkout;
