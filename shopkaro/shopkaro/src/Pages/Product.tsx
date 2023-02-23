import { Accordion, Button, color } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Accordionfun from '../Components/ProductComp/Accordion'
import Loadingfun from '../Components/ProductComp/Loading'
import { Modalfun } from '../Components/ProductComp/Modal'
import ProductCard from '../Components/ProductComp/ProdCard'
import { getdatafun } from '../Redux/Product/product.action'
import { inistate } from '../Redux/Product/product.reducer'
import { UseAppDispatch, UseAppSelector } from '../Redux/store'


const Product = () => {
const [page,setpage] = useState<number>(1)
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
  return loading?<Loadingfun />:error?<h1>Error...</h1>:
    <div>

<div className="cont"  style={{display:"flex",backgroundColor:"white",justifyContent:"center"}}>


<div style={{width:"19%",border:"1px solid grey",height:"500px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>

<h1 style={{color:"black",fontSize:"20px",margin:"15px"}}> Filter & Sort</h1>
<div className='filter_and_sort' style={{color:"black",backgroundColor:"white"}}>




    {mdata.map((item,i)=>{

return i<mdata.length-1 && <Accordionfun key={i} data={item} />
    })}
</div>



</div>
<div style={{width:"78%",height:"auto"}}>
<h1 style={{textAlign:"center",color:"black"}}>Mens Products</h1>


{/* mapping all the products */}
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",height:"auto"}}>

{products.length>0 && products.map((item,i)=>{
    return i<5 && <div>

    
    <ProductCard key={item.id} data={item}/>

    </div>
})}
</div>
<div style={{height:"200px",display:"flex",justifyContent:"center"}}>


<Button isDisabled={page==1} bgColor={"#D3145A"} onClick={()=>setpage(page-1)} mr={3}  color={"black"}>
                RED
              </Button>
<Button bgColor={"#D3145A"}  mr={3}  color={"black"}>
{page}
              </Button>
<Button  bgColor={"#D3145A"} isDisabled={page==4} onClick={()=>setpage(page+1)} mr={3}  color={"black"}>
            ADD
              </Button>
    
  
</div>

</div>




</div>




    </div>
  
}

export default Product