import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Side = () => {
const router = useRouter()
let url = router.pathname;

  return (
    <div className={styles.nav}>
      {/* <img src="https://vicky-masai.github.io/images/vicky-profile-trans.png" alt="Vicky Profile Pic"/> */}
      <Image src={"/vicky-profile-trans.png"} width="100" height="100" alt="Vicky profile pic" />
      <br />
        <Link className={url === "/dashboard" ? styles.link : "no"} href={"/dashboard"}>Dashboard</Link>
        <Link className={url === "/orders" ? styles.link : "no"} href={"/orders"}>Orders</Link>
        <Link className={url === "/addproduct" ? styles.link : "no"} href={"/addproduct"}>Add Product</Link>
        <Link className={url === "/products" ? styles.link : "no"} href={"/products"}>Products</Link>
        <Link className={url === "/users" ? styles.link : "no"} href={"/users"}>Users</Link>
        <Link className={url === "/deleted" ? styles.link : "no"} href={"/deleted"}>Deleted</Link>
    </div> 
  )
}

export default Side