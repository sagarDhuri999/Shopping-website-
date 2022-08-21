export const reducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            cart: [...state.cart,
            {
                ...action.payload,
                qty: 1
            }],

        }
    };

    if (action.type === "REMOVE_FROM_CART") {
        return {
            ...state,
            cart: state.cart.filter(c => c.id !== action.payload.id),


        }
    };

    if (action.type === "INCREASED_ITEM") {


        const updatedCart = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {


                return { ...currElem, qty: currElem.qty + 1 }
            }
            return currElem
        })

        return { ...state, cart: updatedCart }

        // return {
        //     ...state,
        //     cart: state.cart.filter((c) => c.id === action.payload.id ? (c.qty += 1) : c.qty)

        // }

    }
    if (action.type === "SUBTRACT_ITEM") {
        const updatedCart = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {
                return { ...currElem, qty: currElem.qty - 1 }
            }
            return currElem
        })
            .filter((currElem) => currElem.qty !== 0) //it will remove item from cartList if it equal to 0.

        return { ...state, cart: updatedCart }


    }

    return state;
};

export const Query = (state, action) => {

    if (action.type === "view_Product") {
        return {
            ...state,
            searchItem: action.payload,
        }
    }

    if (action.type === "SORT_BY_PRICE") {
        return {
            ...state,
            sort: action.payload,
        }
    }

    if (action.type === "PRICE_RANGE") {
        return {
            ...state,
            priceRange: action.payload,
        }
    }
    if (action.type === "COLOR") {
        return {
            ...state,
            color: action.payload,
        }
    }

}
