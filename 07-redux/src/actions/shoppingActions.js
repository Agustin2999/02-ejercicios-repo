
/*export const TYPES ={
    
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_ONE_FROM_CART :'REMOVE_ONE_FROM_CART',
    REMOVE_ALL_FROM_CART :'REMOVE_ALL_FROM_CART',
    CLEAR_CART :'CLEAR_CART'
}
*/

import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types"


//En la version useReducer (Reducer de react), el Actions tiene el Types. 
//PERO aca en este proyecto con redux va a tener la logica que ejecutan los dispatch



export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id })
export const delFromCart = (id, all = false) => (all ? //quiere borrar toda la cantidad de 'x' producto si o no
    { type: REMOVE_ALL_FROM_CART, payload: id }
    :
    { type: REMOVE_ONE_FROM_CART, payload: id })
export const clearCart = () => ({ type: CLEAR_CART })




