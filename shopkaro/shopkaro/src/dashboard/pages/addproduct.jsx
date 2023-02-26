import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Side from '@/components/Side'
import { useState } from 'react';
import { useRouter } from 'next/router';
const Addproduct = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    brand:'',
    quantity: '',
    size: '',
    description: '',
    image: ''
  });


  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('https://shopkaro-backend.onrender.com/mens', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(response => response.json())
  .then(data => console.log(formData))
  .catch(error => console.error(error));
  setFormData({
    name: '',
    price: '',
    brand:'',
    quantity: '',
    size: '',
    description: '',
    image: '',
  });
  };
  return (
    <div className={styles.main}>
<Side />
<div className={styles.frm}>
    <form onSubmit={handleSubmit}>
      <center>
        <h1 style={{ fontSize: '20px', color: 'white', fontWeight: 'bolder' }}>
          Add products
        </h1>
      </center>
      <input
        type="text"
        name="name"
        placeholder="Product name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleInputChange}
      />
       <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="size"
        placeholder="Size - 30"
        value={formData.size}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <input
        type="url"
        name="image"
        placeholder="Image url"
        value={formData.image}
        onChange={handleInputChange}
      />
      <center>
        <button type="submit" className={styles.add}>
          Add Product
        </button>
      </center>
    </form>
</div>
    </div>
  )
}

export default Addproduct