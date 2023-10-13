const ProductItem = ({ data, addToCart }) => {
    let { id, name, price } = data; //data es un objeto, que tiene esos atributos

    return (
        <div style={{ border: "thin solid gray", padding: '1rem' }}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onClick={() => addToCart(id)}>Agregar al carrito</button>
        </div>
    )
}


export default ProductItem;