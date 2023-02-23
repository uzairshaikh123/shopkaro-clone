import { Product } from '../../Utils/types'
import * as types from "./cart.actiontypes"

export interface inistate{
    loading:boolean;
    error:boolean;
    cart:Product[]
}

export const initstate :inistate= {
    loading: false,
    error: false,
    cart: []

}

interface action {

    type: string,
    payload?: Product[]

}
export const reducer = (state = initstate, { type, payload }: action) => {



    switch (type) {
        case types.GET_CART_ERROR:
            return { ...state, loading: false, error: true }

        case types.GET_CART_SUCCESS: {
            return { ...state, loading: false, error: false, cart: payload }
        }
        case types.GET_CART_LOADING: {
            return { ...state, loading: true, error: false }
        }


        default: {
            return state
        }

    }




}