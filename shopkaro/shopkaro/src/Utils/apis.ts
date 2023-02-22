import axios from "axios"

export const getsingleproduct=(id:string | undefined)=>{

return axios.get(`http://localhost:8080/mens/${id}`).then((res)=>{
   
   return res.data
})

}