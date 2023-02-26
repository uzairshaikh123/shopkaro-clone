import React, { useState } from 'react'
import Side from '@/components/Side'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'
const Dashboard = ({orders,product,money,userD}) => {
const router = useRouter();
    let totalOrders = orders.length || 0;
    let totalProducts = product.length || 0;
    let totalUser = userD.length || 0;
let sum =0
money.map((el)=>{
    sum=el.price;
})

let totalEarn = "$"+sum;
const HandleRun = (url)=>{
router.push(`${url}`)
}
    return (
        <div className={styles.main}>
    <Side />
    <div className={styles.cont}>
        <h1>Dashboard</h1>
    </div>

    <div className={styles.grd}>
        <div><div onClick={()=>{HandleRun("/orders")}} style={{backgroundColor:"rgba(102, 0, 255, 0.78)"}}>{totalOrders}</div><h3>Total Orders</h3></div>
        <div><div onClick={()=>{HandleRun("/orders")}} style={{backgroundColor:"rgba(102, 0, 255, 0.78)"}}>{totalEarn}</div><h3>Total Earning</h3></div>
        <div><div onClick={()=>{HandleRun("/products")}} style={{backgroundColor:"rgba(102, 0, 255, 0.78)"}}>{totalProducts}</div><h3>Total Products</h3></div>
        <div><div onClick={()=>{HandleRun("/users")}} style={{backgroundColor:"rgba(102, 0, 255, 0.78)"}}>{totalUser}</div><h3>Total Users</h3></div>
    </div>
        </div>
      )
    }

export default Dashboard

export async function getStaticProps(context) {
    // orders api 
    let data = await axios.get("https://shopkaro-backend.onrender.com/orders")
    let orders = await data.data;

// all products 
let productOld = await axios.get("https://shopkaro-backend.onrender.com/mens")
let product = await productOld.data;

// total earnings 
let earnings = await axios.get("https://shopkaro-backend.onrender.com/Order_completed")
let money = await earnings.data;

// total users
let user = await axios.get("https://shopkaro-backend.onrender.com/users")
let userD = await user.data;
    return {
      props: {orders,product,money,userD}, // will be passed to the page component as props
    }
  }