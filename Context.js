import { createContext, useReducer } from "react"
import data from "../ProductList"
import { Query, reducer } from "./Reducer"

export const Cart = createContext()

const initialState = {
    productItem: data.productItem,
    cart: [],
    qty: 0,
}

const fistState = {
    searchItem: "",
    sort: "",
    color: "",



}

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [product, productDispatch] = useReducer(Query, fistState)

    const increment = (id) => {
        return dispatch({
            type: "INCREASED_ITEM",
            payload: id,
        })
    }


    const decrement = (id) => {
        return dispatch({
            type: "SUBTRACT_ITEM",
            payload: id,
        })
    }

    return (
        <Cart.Provider value={{ ...state, dispatch, ...product, productDispatch, increment, decrement }}>
            {children}

        </Cart.Provider>
    )
}

export default Context
