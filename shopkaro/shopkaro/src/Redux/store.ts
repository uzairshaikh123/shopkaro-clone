import { useDispatch ,TypedUseSelectorHook} from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as Productreducer } from "./Product/product.reducer";
const rootreducer = combineReducers({Productreducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type Dispatchfn =()=> AppDispatch

export const UseAppDispatch:Dispatchfn=useDispatch

export const UseAppSelector : TypedUseSelectorHook<RootState>=useSelector

