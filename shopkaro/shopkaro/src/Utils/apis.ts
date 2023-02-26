import axios from "axios"
import { Product } from "./types"

export const getsingleproduct=(id:string | undefined)=>{

return axios.get(`https://shopkaro-backend.onrender.com/mens/${id}`).then((res)=>{
   
   return res.data
})

}
export const adddata=(obj:Product)=>{

return axios.post("https://shopkaro-backend.onrender.com/cart",obj).then((res)=>{
  // console.log(res.data)
   return res.data
})

}
export const getcartdata=()=>{

return axios.post("https://shopkaro-backend.onrender.com/cart").then((res)=>{
   console.log(res.data)
   return res.data
})

}

export const updateqnt=(obj:Product,id:number | undefined,qty:number| undefined,total:number | undefined)=>{
   return axios.patch(`https://shopkaro-backend.onrender.com/cart/${id}`,{...obj,quantity:qty,price:total}).then(()=>{
   
   


   })
}


