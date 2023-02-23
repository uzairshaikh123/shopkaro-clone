import axios, { AxiosResponse } from "axios"
import { AppDispatch } from "../store"
import * as types from './cart.actiontypes'


export const getcartdatafun =():any=> (dispatch:AppDispatch)=>{
    dispatch({type:types.GET_CART_LOADING})
    return axios.get("http://localhost:8080/cart").then((res: AxiosResponse)=>{
        
        dispatch({type:types.GET_CART_SUCCESS,payload:res.data})
        
        
    }).catch(()=>{
        dispatch({type:types.GET_CART_ERROR})

    })
}