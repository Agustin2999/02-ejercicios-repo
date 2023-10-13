//carrito de compras con useReducer

import { useReducer } from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";




const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState); // no usaremos funcion init

    const { products, cart } = state; //ambos son arrays


    const addToCart = (id) => {
        console.log(id);
        dispatch({ type: TYPES.ADD_TO_CART, payload: id }) // le pasamos el id para que agregue con ese id
    }

    const delFromCart = (id, all = false) => {
        //all es parametro por si se quiere borrar todo ese producto(con mas de cantidad 1)

        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
        }

    }

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    }


    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive"> {/** atajo article.box + tab */}
                {products.map((producto) => < ProductItem key={producto.id} data={producto}
                    addToCart={addToCart} />)}
            </article>

            <h3>Carrito</h3>

            <article className="box">
                <button onClick={clearCart}>Limpiar carrito</button>

                {
                    cart.map((item, index) => <CartItem key={item.index}
                        data={item} delFromCart={delFromCart} />)
                }
            </article>
        </div>
    )
}


export default ShoppingCart
