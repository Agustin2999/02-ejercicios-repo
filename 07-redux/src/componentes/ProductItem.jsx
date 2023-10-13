const ProductItem = ({ data, addToCart }) => {
    let { id, name, price } = data; //data es un objeto, que tiene esos atributos

    return (
        <div style={{ border: "thin solid gray", padding: '1rem' }}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onClick={() => addToCart(id)}>Agregar al carrito</button>
            {/* el profe le pasa el id por parametro, PERO no es necesario, ya que lo manda directamente desde ShoppingCart (si, me di cuenta solo jeh que grande (asi como los que son para eliminar)) */}

        </div>
    )
}


export default ProductItem;