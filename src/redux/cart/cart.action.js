import {CartActionTypes} from "./cart.types";

export const setHidden = hidden =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN,
    payload:hidden,
})
export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload:item,
})