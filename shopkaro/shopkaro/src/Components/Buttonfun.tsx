import { Flex } from '@chakra-ui/react'
import React,{useState} from 'react'

const Buttonfun = () => {
    const [count,setcount] = useState<number>(1)
  return (
    <Flex m={"auto"} alignItems={"center"} justifyContent={"space-evenly"}>

    <button style={{fontSize:"30px",backgroundColor:"#D3145A",height:"40px",width:"40px",borderRadius:"10px",margin:"10px"}} className='dec' disabled = {count==1}  onClick={()=>setcount(count-1)} >-</button>
    <button style={{fontSize:"30px",backgroundColor:"#D3145A",height:"40px",width:"40px",borderRadius:"10px",margin:"10px"}} className='dec' disabled>{count}</button>
    <button  style={{fontSize:"30px",backgroundColor:"#D3145A",height:"40px",width:"40px",borderRadius:"10px",margin:"10px"}} className='dec'disabled = {count==4} onClick={()=>setcount(count+1)}>+</button>
    </Flex>
  )
}

export default Buttonfun