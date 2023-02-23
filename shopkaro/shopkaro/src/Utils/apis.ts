import axios from "axios"
import { Product } from "./types"

export const getsingleproduct=(id:string | undefined)=>{

return axios.get(`http://localhost:8080/mens/${id}`).then((res)=>{
   
   return res.data
})

}
export const adddata=(obj:Product)=>{

return axios.post(`http://localhost:8080/cart`,obj).then((res)=>{
  // console.log(res.data)
   return res.data
})

}
export const getcartdata=()=>{

return axios.post(`http://localhost:8080/cart`).then((res)=>{
   
   return res.data
})

}




