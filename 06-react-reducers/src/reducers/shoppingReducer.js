import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [
        { id: 1, name: 'Producto 1', price: 100, cant: 0 }, //cant fue algo que le agregue yo para practicar
        { id: 2, name: 'Producto 2', price: 200, cant: 0 },
        { id: 3, name: 'Producto 3', price: 300, cant: 0 },
        { id: 4, name: 'Producto 4', price: 400, cant: 0 },
        { id: 5, name: 'Producto 5', price: 500, cant: 0 },
        { id: 6, name: 'Producto 6', price: 600, cant: 0 },
    ],
    cart: []

}


//- podriamos poner aca la funcion init pero no la vamos a usar -






export function shoppingReducer(state, action) {

    switch (action.type) {
        case TYPES.ADD_TO_CART:
            {

                let newItem = state.products.find(product => product.id == action.payload)


                //lo que hice yo de tarea. funciona
                // let existe = false;

                // let cartNuevo = state.cart.map((productoSolo) => {
                //     console.log(productoSolo)
                //     if (productoSolo.id == action.payload) {
                //         productoSolo.cant += 1;
                //         existe = true
                //     }
                //     return productoSolo
                // })
                // if (!existe) { //quiere decir que no se habia reservado antes
                //     newItem.cant += 1;
                //     cartNuevo = [...cartNuevo, newItem]
                // } else {
                //     existe = false;//reiniciamos bandera
                // }



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


                //esto quedo de la version vieja del profe:
                return {
                    ...state, //todo lo que tenia el state hasta ahora
                    //yo de tarea: cart: cartNuevo

                    cart: [...state.cart, newItem] //todo lo que tenia cart hasta ahora pero sumale el nuevo item
                }
            }


        case TYPES.REMOVE_ONE_FROM_CART: {

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

        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id != action.payload)
            }
        }

        case TYPES.CLEAR_CART:
            return shoppingInitialState;

        default:
            return state; //que devuelva el state como venia
    }
}







