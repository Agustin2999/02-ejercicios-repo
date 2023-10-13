const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
    let { id, name, price, quantity } = data; //data es un objeto que tiene esos atributos (es el objeto item)
    //,cant en mi version test (ejercicio tarea)

    return (
        <div style={{ borderBottom: 'thin solid gray' }}>
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} =${price * quantity}.00</h5>

            <button onClick={() => delOneFromCart(id)}>Eliminar Uno (en repetidos)</button>
            <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button> {/**el true es para que elimine todos (si hay un item con cant 4, que borre los 4) */}
            {/* el profe le pasa parametros a estos delxxxFromCart, PERO no es necesario, y me di cuenta solo jeh. Asi como en add. Le pasa directamente los valores desde ShoppingCart (componente padre) */}
        </div>
      
    )
}

export default CartItem


