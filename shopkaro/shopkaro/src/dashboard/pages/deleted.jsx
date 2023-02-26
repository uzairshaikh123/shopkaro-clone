import React from 'react'
import styles from '@/styles/Home.module.css'
import Side from '@/components/Side'
import axios from 'axios';
import { useRouter } from 'next/router';
const Productlist = ({data}) => {

  const router = useRouter();
  const Dlt = (id)=>{
    axios.delete(`https://shopkaro-backend.onrender.com/mens/${id}`)
    router.push("/deleted");

  }
  return (<>
    <div className={styles.main}>
<Side />
</div>
<table className={styles.list}>
    <thead>
      <tr>
        <th style={{paddingLeft:"20px"}}>Product name</th>
        <th>Price</th>
        <th >Brand</th>
      <th></th>
      </tr>
    </thead>
    <tbody className={styles.scrl}>

       {data.map((item, index)=>{
      let id = item.id;
      return (
          <tr key={index}>
            <td style={{paddingLeft:"20px"}}>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
            <td className={styles.dlt} onClick={()=>{Dlt(id)}}>Delete</td>
          </tr>
      )
    })}
    </tbody>
  </table></>
  )
}

export default Productlist

export async function getStaticProps(context) {
  const response = await axios.get('https://shopkaro-backend.onrender.com/deleted');
  const c = response.data;
  let data = c.slice(0,13)
  return {
    props: {data}, 
  }

}