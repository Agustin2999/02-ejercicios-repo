import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import { contadorInit, contadorInitialState, contadorReducer } from "../reducers/contadorReducer";



//Cual es la mejora con respecto a la version original? Simplemente poner el codigo acomodado donde debe ser (archivos separados)




const ContadorMejorado = () => {

    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit); //aca usamos los diferentes archivos que creamos para dar orden

    const sumar = () => dispatch({ type: TYPES.INCREMENT }); //ahora leemos TYPES desde el archivo externo (orden)
    const restar = () => dispatch({ type: TYPES.DECREMENT });

    const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
    const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
    const reset = () => dispatch({ type: TYPES.RESET });

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Contador 'mejorado' Reducer</h2>
            <nav>
                <button onClick={sumar5}>+5</button>
                <button onClick={sumar}>+</button>
                <button onClick={reset}>0</button>
                <button onClick={restar}>-</button>
                <button onClick={restar5}>-5</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default ContadorMejorado