import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types"

export const initialState = {
    products: [
        { id: 1, name: 'Producto 1', price: 100 }, //cant fue algo que le agregue yo para practicar
        { id: 2, name: 'Producto 2', price: 200 },
        { id: 3, name: 'Producto 3', price: 300 },
        { id: 4, name: 'Producto 4', price: 400 },
        { id: 5, name: 'Producto 5', price: 500 },
        { id: 6, name: 'Producto 6', price: 600 },
    ],
    cart: []

}


//- podriamos poner aca la funcion init pero no la vamos a usar -





//state = initialState esto lo pide Redux, en cambio en useReducer no hay drama
export function shoppingReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TO_CART: //funcion de actions
            {

                let newItem = state.products.find(product => product.id == action.payload)


                //buscamos si ya existe el producto en el carrito
                let itemInCart = state.cart.find(item => item.id == newItem.id)


                return itemInCart ? { //si existe el item en el carrito
                    ...state,
                    cart: state.cart.map((item) => item.id == newItem.id ?
                        { ...item, quantity: item.quantity + 1 } // le suma 1 cantidad
                        :
                        item //si no, devuelve el item como esta
                    )
                } : {//no existe item dentro del carrito, entonces lo agrega y le pone cantidad 1
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                }


            }


        case REMOVE_ONE_FROM_CART: {

            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1 ? { //si tiene cantidad mayor a 1
                ...state,
                cart: state.cart.map(item =>
                    item.id == action.payload ?
                        { ...item, quantity: item.quantity - 1 } //le resta 1
                        :
                        item
                )
            } : { //si no tiene cantidad>1 (quiere decir que tiene cantidad ==1) entonces saca el item del carrito
                ...state,
                cart: state.cart.filter(item => item.id != action.payload) //saca los elementos con el id que viene desde payload
            }

        }

        case REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id != action.payload)
            }
        }

        case CLEAR_CART:
            return initialState;

        default:
            return state; //que devuelva el state como venia
    }
}







