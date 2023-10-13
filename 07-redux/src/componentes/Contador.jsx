import { useDispatch, useSelector } from "react-redux"
import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorActions"


const Contador = () => {

    //useSelector es parecido a useState. Pero es de redux
    const state = useSelector(store => store) //el profe puso state=>state y no entendi como era

    /*Cuando configuras Redux en tu aplicación, defines un "store" que almacena el estado global de la aplicación. 
    Este estado global contiene todas las propiedades y datos que deseas compartir entre componentes.
    
    useSelector toma una función como argumento, y esa función recibe el estado global completo como su parámetro.
    
    Dentro de la función que pasas a useSelector, puedes seleccionar las partes específicas del estado que necesitas
     utilizando la notación de acceso a propiedades de JavaScript.
    */


    //los reducers usaban los dispatch para disparar acciones, en redux se usa lo mismo
    const dispatch = useDispatch()



    return (
        <div>
            <h2>Contador Redux</h2>
            <nav>
                <button onClick={() => dispatch(sumar5())}>+5</button>
                <button onClick={() => dispatch(sumar())}>+1</button>
                <button onClick={() => dispatch(reset())}>0</button>
                <button onClick={() => dispatch(restar())}>-1</button>
                <button onClick={() => dispatch(restar5())}>-5</button>
            </nav>
            <h3>{state.contador}</h3> {/**el '.contador' es porque asi está en store (index.js de store) */}
        </div>
    )
}

//el profe (y chat gpt tambien) dijo que react al agregar useReducer y todo eso, es como que se desligo de redux, y rara vez se usa

export default Contador