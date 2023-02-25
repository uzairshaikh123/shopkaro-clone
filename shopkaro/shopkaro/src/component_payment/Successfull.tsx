import React from "react";

const Successfull = () => {
  return (
    <div className="Payment-Successfull">
      <img
        src="https://cdn.dribbble.com/users/159981/screenshots/2112264/media/40b1edcc8d8e168d6e32f3976318747f.gif"
        alt="png-success"
      />
      <p
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Payment Successful
      </p>
    </div>
  );
};

export default Successfull;
