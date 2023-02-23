import axios, { AxiosResponse } from "axios"
import { AppDispatch } from "../store"
import * as types from './product.actiontypes'


export const getdatafun =():any=> (dispatch:AppDispatch)=>{
    dispatch({type:types.GET_PRODUCT_LOADING})
    return axios.get("http://localhost:8080/mens").then((res: AxiosResponse)=>{
        
        dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res.data})
        
        
    }).catch(()=>{
        dispatch({type:types.GET_PRODUCT_ERROR})

    })
}