import React from 'react'
import styles from '@/styles/Home.module.css'
import Side from '@/components/Side'
import axios from 'axios';
import { useRouter } from 'next/router';
const Productlist = ({c}) => {

  const router = useRouter();
  const Dlt = (id,item)=>{
    axios.post(`https://shopkaro-backend.onrender.com/deleted`,item)
    axios.delete(`https://shopkaro-backend.onrender.com/mens/${id}`)
    router.push("/products");
  }
  return (
    <>
    <div className={styles.main}>
<Side />
</div>
<div className={styles.list1}>
<table className={styles.list}>
    <thead>
      <tr>
        <th style={{paddingLeft:"20px"}}>SR</th>
        <th >Product name</th>
        <th>Price</th>
        <th >Brand</th>
      <th></th>
      </tr>
    </thead>
    <tbody className={styles.scrl}>

       {c.map((item, index)=>{
      let id = item.id;
      return (
          <tr key={index}>
            <td style={{paddingLeft:"20px"}}>{+index+1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
            <td className={styles.dlt} onClick={()=>{Dlt(id,item)}}>Delete</td>
          </tr>
      )
    })}
    </tbody>
  </table></div></>
  )
}

export default Productlist

export async function getStaticProps(context) {
  const response = await axios.get('https://shopkaro-backend.onrender.com/mens');
  const data = response.data;
  let c = data.slice(0,13)
  return {
    props: {c}, 
  }

}