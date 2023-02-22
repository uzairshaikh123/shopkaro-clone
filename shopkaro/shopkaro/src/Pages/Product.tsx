import { Accordion, color } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Accordionfun from '../Components/ProductComp/Accordion'
import ProductCard from '../Components/ProductComp/ProdCard'
import { getdatafun } from '../Redux/Product/product.action'
import { inistate } from '../Redux/Product/product.reducer'
import { UseAppDispatch, UseAppSelector } from '../Redux/store'


const Product = () => {

const store = UseAppSelector((store)=>store)
let {loading,error,products}:inistate=(store.Productreducer)
let dispatch = UseAppDispatch()
useEffect(()=>{
dispatch(getdatafun())
},[])


let sortdata=["Sort By","trending","New","Discounts","High Price","Low Price"]
let Pricedata =["Price",'0 To 499' , "500 To 999", "1000 To 1499","1500 To 1999","2000 To 2999"]
let Disdata = ["Discounts",'1% To 30%',"20% To 40%","40% To 60%","60% To 80%","80% To 100%"]
let colors = ["Colors",'red','black','yellow',"green","white","blue"]
let size=["Size","X","XL","M","S"]
let brands =["Brand","Banana Republic","Polo Ralph Lauren","Giorgio Armani","Hugo Boss","Brooks Brother"]
let catdata = ["Category","Shirts","T-Shirts","Hoodies"]

let mdata =[sortdata,Pricedata,Disdata,colors,size,brands,catdata]
console.log(loading,error,products)
  return loading?<h1>Loading...</h1>:error?<h1>Error...</h1>:
    <div>

<div className="cont" style={{display:"flex"}}>


<div style={{width:"20%",border:"1px solid blue",height:"300px"}}>

<h1> Filter & Sort</h1>
<div className='filter_and_sort'>




    {mdata.map((item,i)=>{

return i<mdata.length-1 && <Accordionfun key={i} data={item} />
    })}
</div>



</div>
<div style={{width:"80%",border:"1px solid red",height:"1500px"}}>

<h1 style={{textAlign:"center"}}>Products</h1>

{/* mapping all the products */}
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

{products.length>0 && products.map((item)=>{
    return <ProductCard key={item.id} data={item}/>
})}
</div>


</div>




</div>




    </div>
  
}

export default Product