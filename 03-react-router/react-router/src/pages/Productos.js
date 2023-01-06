import { useNavigate, useLocation } from 'react-router';
//use location es para ver mi posicion actual, mi locacion, por ej localhost:3000/productos


//esto es para ver queryString(o query params)
const Productos = () => {

    //http://localhost:3000/productos?inicio=1&fin=20


    // let location = useLocation();
    // console.log("location")
    // console.log(location)

    //en la propiedad search están los queryString 
    let { search } = useLocation();
    let query = new URLSearchParams(search);
    //console.log(query)

    const LIMIT = 20;

    let start = parseInt(query.get("inicio")) || 1; // obtenemos la variable inicio que le pasamos por queryString
    // con el || lo que hacemos es decirle si no hay nada, que ponga 1

    let end = parseInt(query.get("fin")) || LIMIT;




    //hook para el historial
    //antes era useHistory, ahora useNavigate
    let history = useNavigate();



    const handleNext = (e) => {
        //history.push({search: }) //es para ir de 20 en 20 en los productos digamos
        //la version de arriba quedo obsoleta, ahora se usa asi:
        history(`/productos?inicio=${start + LIMIT}&fin=${end + LIMIT}`);

    }

    const handlePrev = (e) => {
        history(`/productos?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
    }





    return (
        <div>
            <h3>Productos</h3>
            <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
            {
            start > LIMIT && //ya que en la segunda vuelta ya va a valer 21
                <button onClick={handlePrev}>Atras</button>
            }

            <button onClick={handleNext}>Adelante</button>
        </div>
    )
}


export default Productos;




/*
en http://localhost:3000/productos?abc=abc obtenemos:

hash: ""
key: "default"
pathname: "/productos"
search: "?abc=abc"
state: null
*/



