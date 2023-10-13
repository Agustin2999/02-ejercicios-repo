const CartItem = ({ data, delFromCart }) => {
    let { id, name, price, quantity } = data; //data es un objeto que tiene esos atributos (es el objeto item)
    //,cant en mi version test (ejercicio tarea)

    return (
        <div style={{ borderBottom: 'thin solid gray' }}>
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} =${price * quantity}.00</h5>

            <button onClick={() => delFromCart(id)}>Eliminar Uno (en repetidos)</button>
            <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button> {/**el true es para que elimine todos (si hay un item con cant 4, que borre los 4) */}
        </div>
    )
}

export default CartItem


