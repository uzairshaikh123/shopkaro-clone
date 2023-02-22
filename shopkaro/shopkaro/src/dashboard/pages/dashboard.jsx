import React from 'react'
import Side from '@/components/Side'
import styles from '@/styles/Home.module.css'
const Dashboard = () => {

    return (
        <div className={styles.main}>
    <Side />
    <div className={styles.cont}>
    <h1>Dashboard</h1>
    </div>

    <div className={styles.grd}>
        <div><div style={{backgroundColor:"rgba(102, 0, 255, 0.78)"}}>10</div><h3>Total Orders</h3></div>
        <div><div style={{backgroundColor:"rgba(102, 0, 255, 0.78)"}}>10</div><h3>Total Earning</h3></div>
        <div><div style={{backgroundColor:"rgba(102, 0, 255, 0.78)"}}>10</div><h3>Total Products</h3></div>
        <div><div style={{backgroundColor:"rgba(102, 0, 255, 0.78)"}}>10</div><h3>Total Users</h3></div>
    </div>
        </div>
      )
    }

export default Dashboard