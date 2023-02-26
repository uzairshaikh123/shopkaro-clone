import { background, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Buttonfun from "../Components/Buttonfun";
import Loadingfun from "../Components/ProductComp/Loading";
import { getcartdatafun } from "../Redux/Cart/cart.action";
import { inistate } from "../Redux/Cart/cart.reducer";
import { UseAppDispatch, UseAppSelector } from "../Redux/store";
import { Product } from "../Utils/types";
import { redirect } from "react-router";
import { useNavigate } from "react-router-dom";
// import { getcartdata } from '../Utils/apis'

import '../CSS/cart.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const CartPage = () => {
    
    const store = UseAppSelector((store)=>store)
    let {loading,error,cart}:inistate=(store.cartreducer)
   const navigate = useNavigate();
    const [price,setprice] = useState<number>(0)
    
    
const [state,setstate] = useState<number>(0)

const dispatch = UseAppDispatch()

 useEffect(() => {
    dispatch(getcartdatafun());
  }, []);


useEffect(()=>{

dispatch(getcartdatafun()).then(()=>{
    let totalprice=cart.reduce((acc,item)=>{

        return acc+item.price
    
    },0)
    setprice(totalprice)
})

if(loading==false){
    let totalprice=cart.reduce((acc,item)=>{

        return acc+item.price
    
    },0)
    setprice(totalprice)

}





},[state])




const handledelete=(id:number)=>{

axios.delete(`http://localhost:8080/cart/${id}`).then(()=>{
setstate(state+1)
})

}



  const redirectTopayment = (): void => {
    navigate("/payment");
  };

  return (
  
    <div
      className="cart"
      style={{
        width: "100%",
        lineHeight: "35px",
        backgroundColor: "white",
        marginTop: "50px",
      }}
    >
      <div
        className="cart-parent"
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {loading ? (
          <Loadingfun />
        ) : error ? (
          <h1>Error...</h1>
        ) : (
          <div
            className="added-products"
            style={{
              width: "50%",
              color: "black",
              height: "auto",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              gap: "10px",
            }}
          >
            {/* map all the cart products */}

            {cart.map((item: Product) => {
              return (
                <div
                  className="product-card"
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <div>
                    <img
                      width={"150px"}
                      height={"50px"}
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div
                    className="detailed-product"
                    style={{ position: "absolute", left: "20%" }}
                  >
                    <h2 style={{ color: "#D3145A", fontSize: "20px" }}>
                      {item.name}
                    </h2>
                    <h3>by {item.brand}</h3>
                    <h3>Size : {item.size}</h3>
                    <Buttonfun />
                  </div>
                  <div style={{ fontSize: "20px", padding: "10px" }}>
                    <h3
                      className="removecart"
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        marginRight: "15px",
                        cursor: "pointer",
                        fontSize: "25px",
                      }}
                    >
                      X
                    </h3>
                    $ {item.price}{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      {Math.floor(Number(item.price) + 50) + 0.99}
                    </span>
                    <br />
                    <span style={{ fontSize: "15px" }}>free Shipping</span>
                    <br />
                    <span style={{ color: "green", fontSize: "15px" }}>
                      <Button colorScheme={"green"} variant="outline">
                        OFFER
                      </Button>{" "}
                      Buy 2 Get 1 Free
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div
          className="summary"
          style={{
            width: "35%",
            color: "black",
            padding: "40px",
            fontSize: "15px",
            textDecoration: "bold",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <h1 style={{ fontSize: "30px" }}>Summary</h1>
          <br />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Total Price</span>
            <span>₹ 25</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Shipping Charges</span>
            <span style={{ color: "green" }}>Free</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Applicable Tax and Charges</span>
            <span>+ ₹ 90</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#D3145A", fontSize: "25px" }}>
              Amount Payable{" "}

            </span>
            <span style={{ color: "#D3145A", fontSize: "25px" }}>₹ 25</span>
          </div>
          <button
            style={{
              height: "50px",
              width: "100%",
              border: "none",
              backgroundColor: "#D3145A",
              color: "white",
              display: "block",
              margin: "auto",
              marginTop: "20px",
              fontSize: "30px",
              borderRadius: "5px",
            }}
            onClick={redirectTopayment}
          >
            BUY NOW
          </button>
        </div>


    </div>
})}

    </div>}
    {cart.length==0?<h1>
        <img src="https://www.krosfitsports.com/public/empty-cart.gif" alt="" />
    </h1>:<div style={{width:"35%",color:"black",padding:"40px",fontSize:"15px",textDecoration:"bold",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
<h1 style={{fontSize:"30px"}}>Summary</h1>
<br />

<div style={{display:"flex",justifyContent:"space-between"}}>
    <span>Total Price</span>
    <span>₹ {price}</span>
</div>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <span>Shipping Charges</span>
    <span style={{color:"green"}}>Free</span>
</div>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <span>Applicable Tax and Charges</span>
    <span>+ ₹ 90</span>
</div>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <span style={{color:"#D3145A",fontSize:"25px"}}>Amount Payable </span>
    <span style={{color:"#D3145A",fontSize:"25px"}}>₹ {price+90}</span>
</div>

<button style={{height:"50px",width:"100%",border:"none",backgroundColor:"#D3145A",color:"white",display:"block",margin:"auto",marginTop:"20px",fontSize:"30px",borderRadius:"5px"}}>BUY NOW</button>

    </div>}
 </div>

    </div>
  );
};

export default CartPage;
