import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCart, decreaseItemInCart } from './cart.utils'

const InitialState = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = InitialState, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItemInCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer