import React from 'react'
import styles from '@/styles/Home.module.css'
import Side from '@/components/Side'
import axios from 'axios';
import { useRouter } from 'next/router';
const Orders = ({data}) => {

  // const router = useRouter();
  // const Dlt = (id)=>{
  //   axios.delete(`https://shopkaro-backend.onrender.com/users/${id}`)
  //   router.push('/users')
  // }
  return (<>
    <div className={styles.main}>
<Side />
</div>
<table className={styles.list}>
    <thead>

      
      <tr>
        <th style={{paddingLeft:"20px"}}>User Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Product Name</th>
      <th></th>
      </tr>
    </thead>
    <tbody className={styles.scrl}>
       {data.map((item, index)=>{
      let id = item.id;
      return (
          <tr key={index}>
            <td style={{paddingLeft:"20px"}}>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>{item.product_name}</td>
          </tr>
      )
    })}
    </tbody>
  </table></>
  )
}

export default Orders

export async function getStaticProps(context) {
  const response = await axios.get('https://shopkaro-backend.onrender.com/orders');
  const c = response.data;
  let data = c.slice(0,13)
  return {
    props: {data}, 
  }

}