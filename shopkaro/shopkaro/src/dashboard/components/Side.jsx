import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
const Side = () => {
const router = useRouter()
let url = router.pathname;

  return (
    <div className={styles.nav}><img src="https://vicky-masai.github.io/images/vicky-profile-trans.png" alt="Vicky Profile Pic"/><br />
        <Link className={url === "/dashboard" ? styles.link : "no"} href={"/dashboard"}>Dashboard</Link>
        <Link className={url === "/orders" ? styles.link : "no"} href={"/orders"}>Orders</Link>
        <Link className={url === "/addproduct" ? styles.link : "no"} href={"/addproduct"}>Add Product</Link>
        <Link className={url === "/products" ? styles.link : "no"} href={"/products"}>Products</Link>
        <Link className={url === "/users" ? styles.link : "no"} href={"/users"}>Users</Link>
    </div> 
  )
}

export default Side