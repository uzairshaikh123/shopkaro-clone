import { Accordion, Box, Button, color } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Accordionfun from '../Components/ProductComp/Accordion'
import Loadingfun from '../Components/ProductComp/Loading'
import { Modalfun } from '../Components/ProductComp/Modal'
import ProductCard from '../Components/ProductComp/ProdCard'
import { getdatafun } from '../Redux/Product/product.action'
import { inistate } from '../Redux/Product/product.reducer'
import { UseAppDispatch, UseAppSelector } from '../Redux/store'
import { Product, sort } from '../Utils/types'


const Productfun = () => {

    const [page, setpage] = useState<number>(1)
    const [data,setdata] = useState<Product[]>([])
    const store = UseAppSelector((store) => store)
    const [limit, setlimit] = useState<number>(0)
    const [state,setstate]=useState<number>(0)
    let { loading, error, products }: inistate = (store.Productreducer)
    // const [data,setdata]= useState<Product[]>([])
    let dispatch = UseAppDispatch()
    useEffect(() => {
        const myfun=async ()=>{
            try {
              dispatch(getdatafun()).then((res:any)=>{

                  setdata([...res])
              })
                //  setdata([...products])
             } catch (error) {
                 
             }
        }
        myfun()
      
// console.log("data",products)

    }, [])
    const handlepage = (val: number) => {

        setpage(page + val)
        if (val == 1) {

            setlimit(limit + 6)
        } else {

            setlimit(limit - 6)
        }



    }

    const sortby = (obj: sort) => {

        console.log(obj)
       

        if(obj.val=="High Price"){
        let ndata=products.sort((a:any,b:any):number=>{
            return b.price-a.price
        })
        setdata([...ndata])
        
        }else if(obj.val=="Low Price"){
            let ndata=products.sort((a:any,b:any)=>{
                return a.price-b.price
            })
           setdata([...ndata])
        }else{
            if (obj.status) {
        let data = products.filter((e, i) => {

          
                if (obj.val == "trending") {
                    return e.trending
                } else if (obj.val == "New") {
                    return e.newproduct
                } else if (obj.val == "Discounts") {
                    return e.discount
                } else if (obj.val == "brand") {
                    return e.brand

                }else if(obj.val=='100 To 500'){
                   
                    return e.price<500 && e.price>100
                }
                else if(obj.val=='500 To 700'){
                   
                    return e.price<700 && e.price>500
                }
                else if(obj.val=='700 To 900'){
                   
                    return e.price<900 && e.price>700
                }
                else if(obj.val=='900 To 1400'){
                   
                    return e.price<1400 && e.price>900
                }
                else if(obj.val=='More than 1400'){
                   
                    return e.price>1400 
                }else if(obj.val=="red"){
                    return e.color=="red"
                }else if(obj.val=="black"){
                    return e.color=="black"
                }else if(obj.val=="yellow"){
                    return e.color=="yellow"
                }else if(obj.val=="blue"){
                    return e.color=="blue"
                }else if(obj.val=="white"){
                    return e.color=="white"
                }
                else if(obj.val=="green"){
                    return e.color=="green"
                }else if(obj.val=="X"){
                    return e.size=="X"
                }else if(obj.val=="XL"){
                    return e.size=="XL"
                }else if(obj.val=="M"){
                    return e.size=="M"
                }else if(obj.val=="S"){
                    return e.size=="S"
                }else if(obj.val=="Banana Republic"){
                    return e.brand=="Banana Republic"
                }else if(obj.val=="Polo Ralph Lauren"){
                    return e.brand=="Polo Ralph Lauren"
                }
                else if(obj.val=="Giorgio Armani"){
                    return e.brand=="Giorgio Armani"
                }
                else if(obj.val=="Hugo Boss"){
                    return e.brand=="Hugo Boss"
                }
                else if(obj.val=="Brooks Brother"){
                    return e.brand=="Brooks Brother"
                }else if(obj.val=="1% To 30%"){

                 return e.discount<30 && e.discount>1
                }
                else if(obj.val=="20% To 40%"){

                 return e.discount<40 && e.discount>20
                }
                else if(obj.val=="40% To 60%"){

                 return e.discount<60 && e.discount>40
                }
                else if(obj.val=="60% To 80%"){

                 return e.discount<80 && e.discount>60
                }
                
                else if(obj.val=="80% To 90%"){

                 return e.discount<90 && e.discount>80
                }
                
        else{
                    setdata([...products])
                } 

        })
        setdata([...data])
    }else{
        setdata([...products])
    }
    }
    
    
}
    let sortdata = ["Sort By", "trending", "New", "Discounts", "High Price", "Low Price"]
    let Pricedata = ["Price", '100 To 500', "500 To 700", "700 To 900", "900 To 1400", "More than 1400"]
    let Disdata = ["Discounts", '1% To 30%', "20% To 40%", "40% To 60%", "60% To 80%", "80% To 90%"]
    let colors = ["Colors", 'red', 'black', 'yellow', "green", "white", "blue"]
    let size = ["Size", "X", "XL", "M", "S"]
    let brands = ["Brand", "Banana Republic", "Polo Ralph Lauren", "Giorgio Armani", "Hugo Boss", "Brooks Brother"]
    let catdata = ["Category", "Shirts", "T-Shirts", "Hoodies"]

    let mdata = [sortdata, Pricedata, Disdata, colors, size, brands, catdata]
    console.log(loading, error, products)
    return loading ? <Loadingfun /> : error ? <h1>Error...</h1> :
        <div>

            <div className="cont" style={{ display: "flex", backgroundColor: "white", justifyContent: "space-around",marginTop:"100px" }}>


                <Box style={{ width: "19%", border: "1px solid grey", height: "500px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>

                    <h1 style={{ color: "black", fontSize: "20px", margin: "15px" }}> Filter & Sort</h1>
                    <div className='filter_and_sort' style={{ color: "black", backgroundColor: "white" }}>




                        {mdata.map((item, i) => {

                            return i < mdata.length - 1 && <Accordionfun key={i} data={item} handlesort={sortby} />
                        })}
                    </div>



                </Box>
                <Box  w={{base:"48%",sm:"50%",md:"50%",xl:"78%"}} border="1px solid red">
                    <h1 style={{ textAlign: "center", color: "black" }}>Mens Products</h1>


                    {/* mapping all the products */}
                    <Box style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height: "auto", gap: "5px" }}>

                        {data?.map((item, i) => {
                            //  
                            return i > limit - 1 && i < 6 * page && <Box border={"1px solid red"}>


                                <ProductCard key={item.id} data={item} />

                            </Box>
                        })}
                    </Box>
                    <div style={{ height: "200px", display: "flex", justifyContent: "center", gap: "10px" }}>


                        <Button isDisabled={page == 1} bgColor={"#D3145A"} onClick={() => handlepage(-1)} mr={3} color={"black"}>
                            RED
                        </Button>
                        <Button bgColor={"#D3145A"} mr={3} color={"black"}>
                            {page}
                        </Button>
                        <Button bgColor={"#D3145A"} isDisabled={page == 4} onClick={() => handlepage(1)} mr={3} color={"black"}>
                            ADD
                        </Button>


                    </div>

                </Box>




            </div>




        </div>

}

export default Productfun