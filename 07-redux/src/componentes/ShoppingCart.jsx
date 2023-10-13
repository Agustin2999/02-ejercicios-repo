
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingActions";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";




const ShoppingCart = () => {


    let state = useSelector(store => store)
    const { products, cart } = state.shopping; //ambos son arrays
    //state viene del store general. y es '.shopping' porque busca en reducer-index.js
    const dispatch = useDispatch()



    /* ahora estas funciones no van mas(están directo en actions (index))
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
        */


    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive"> {/** atajo article.box + tab */}
                {products.map((producto) => < ProductItem key={producto.id} data={producto}
                    addToCart={() => dispatch(addToCart(producto.id))} />)}
            </article>

            <h3>Carrito</h3>

            <article className="box">
                <button onClick={() => dispatch(clearCart())}>Limpiar carrito</button>

                {
                    cart.map((item, index) => <CartItem key={item.index}
                        data={item}
                        delOneFromCart={() => dispatch(delFromCart(item.id))}
                        delAllFromCart={() => dispatch(delFromCart(item.id, true))} />)
                }
            </article>
        </div>
    )
}


export default ShoppingCart
