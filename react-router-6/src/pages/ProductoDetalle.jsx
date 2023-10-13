import { useParams, useNavigate } from "react-router-dom"


//useNavigate es el historial de navegacion

export function ProductoDetalle({ productos }) {

    //obtenemos el id que viene por url con useParams

     

    function handleGoBack() { //para hacer referencia a que volves para atras
        navigate(-1); //regresar a la pagina anterior
    }


    const navigate = useNavigate();
    const { id } = useParams();


    const producto = productos.find(prod => prod.id == id);





    return (
        <section>
            <h1>Detalle del Producto</h1>
            <h2>{producto.nombre}</h2>
            <h3>{producto.id}</h3>
            <h4>${producto.precio}</h4>
            <button onClick={handleGoBack}>Regresar</button>
        </section>
    )
}