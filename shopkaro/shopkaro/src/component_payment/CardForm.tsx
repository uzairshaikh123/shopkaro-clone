import React from "react";

const CardForm = () => {
  return (
    <div>
      <form className="card-form">
        <input type="number" placeholder="Card Number *" />
        <br />
        <input type="text" placeholder="Name on card *" />
        <br />
        <input type="date" placeholder="dd-mm-yy *" />
        <br />
        <input type="text" placeholder="CVV *" />
      </form>
    </div>
  );
};

export default CardForm;
