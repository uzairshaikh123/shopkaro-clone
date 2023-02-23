import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    chakra,
    Icon,
    useDisclosure,
    Tooltip,
    Flex,
    Toast,
  } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import React,{useState,useEffect} from 'react'
import { Product } from '../../Utils/types'
import { adddata, getcartdata, getsingleproduct } from '../../Utils/apis'
import { useSelector } from 'react-redux'
import { UseAppSelector } from '../../Redux/store'


  interface details{
    id?:number;
    name:string | undefined;
    img:string | undefined;
    price:string | undefined;
    
  }

function Modalfun({id,name,img,price}:details) {
    const [count,setcount] = useState<number>(1)
    const { isOpen, onOpen, onClose } = useDisclosure()
  const   [obj,setobj]=useState<Product[]>()
// const store = UseAppSelector((store)=>store)



const handleadd= async (id:number | undefined)=>{


    let data =await getsingleproduct(`${id}`)
    console.log(data)
adddata(data).then(()=>{
    // Toast add here
    alert("Product added successfully")
}).catch(()=>{
    alert("Product already exist")
})


}



    return (
      <>
      <Button onClick={onOpen} variant='ghost' colorScheme='gray'>ADD TO CART</Button>
        
        <Tooltip
      
        label="Add to cart"
        bg="white"
        placement={'top'}
        color={'gray.800'}
        fontSize={'1.2em'}>
        <chakra.a href={'#'} display={'flex'}>
          
          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
        </chakra.a>
      </Tooltip>
      
  
        <Modal blockScrollOnMount={false} isOpen={isOpen}  onClose={onClose}>
          <ModalOverlay  />
          <ModalContent bgColor={"white"} color={"black"}>
            <ModalHeader color={"black"}>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
          <img  style={{width:"95%",height:"360px"}} src={img} alt="" />
              <Text fontSize={"20px"} color={"black"}>Price : ${price} USD</Text>
            </ModalBody>
            <Flex m={"auto"} alignItems={"center"} justifyContent={"space-evenly"}>

            <button style={{fontSize:"30px",backgroundColor:"#D3145A",height:"40px",width:"40px",borderRadius:"10px",margin:"10px"}} className='dec' disabled ={count==1}  onClick={()=>setcount(count-1)} >-</button>
            <button style={{fontSize:"30px",backgroundColor:"#D3145A",height:"40px",width:"40px",borderRadius:"10px",margin:"10px"}} className='dec' disabled>{count}</button>
            <button  style={{fontSize:"30px",backgroundColor:"#D3145A",height:"40px",width:"40px",borderRadius:"10px",margin:"10px"}} className='dec'disabled ={count==4} onClick={()=>setcount(count+1)}>+</button>
            </Flex>
  
            <ModalFooter>
              <Text position={"absolute"} left={"25px"} fontSize={"20px"} color={"green"}>Total Price : ${Math.floor(Number(price)*count)} USD</Text>
              <Button bgColor={"#D3145A"}  mr={3} onClick={onClose} color={"black"}>
                Cancel
              </Button>
              {/* <Toast /> */}
              <Button colorScheme='blue' onClick={()=>handleadd(id)}> 
              ADD
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export {Modalfun}