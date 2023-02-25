import { Product } from '../../Utils/types'
import * as types from './product.actiontypes'


export interface inistate{
    loading:boolean;
    error:boolean;
    products:Product[]
}

export const initstate :inistate= {
    loading: false,
    error: false,
    products: []

}

interface action {

    type: string,
    payload?: Product[]

}
export const reducer = (state = initstate, { type, payload }: action) => {



    switch (type) {
        case types.GET_PRODUCT_ERROR:
            return { ...state, loading: false, error: true }

        case types.GET_PRODUCT_SUCCESS: {
            return { ...state, loading: false, error: false, products: payload }
        }
        case types.GET_PRODUCT_LOADING: {
            return { ...state, loading: true, error: false }
        }


        default: {
            return state
        }

    }




}