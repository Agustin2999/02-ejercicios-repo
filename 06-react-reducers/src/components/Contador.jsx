import { useReducer } from "react";
import { useState } from "react"



//si la app es simple, es mejor usar useState, ya si va avanzando y es mas compleja, estaria bueno usar useReducer



const initialState = {
    contador: 0
}


const init = (initialState) => { //init trad = inicial
    return {
        contador: initialState.contador + 100
    }
}



//en mayusculas porque son como constantes, no deberian cambiar
const TYPES = { //esto es solo a los fines de no hardcodear (...tanto)
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5", //incrementar de a 5
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET" //resetear a 0
}




function reducer(state, action) { //funcion reductora que se usará en useReducer
    //state (parametro) es estado anterior
    //action es el argumento que manda el dispatch

    //en reducer es comun utilizar switch case
    //es una funcion pura (programacion funcional). No afecta nada de afuera. y mientras el input sea el mismo, el output tambien lo sera


    switch (action.type) { //tipo de accion. Es algo que ya viene con reducer
        case TYPES.INCREMENT:
            return {
                contador: state.contador + 1 //state.contador es la variable anterior digamos
            }

        case TYPES.DECREMENT:
            return {
                contador: state.contador - 1
            }

        case TYPES.INCREMENT_5:
            return {
                contador: state.contador + action.payload //payload viene desde el dispatch, al igual que action.type
            }
        case TYPES.DECREMENT_5:
            return {
                contador: state.contador - action.payload
            }
        case TYPES.RESET:
            return initialState //initialState ya es un objeto en donde tiene un atributo 'contador':0

        default:
            return {
                state //si no hace nada, devuelve estado anterior (queda como está digamos)
            }
    }

    //siempre retorna el estado (en su nueva version digamos)
}








const Contador = () => {

    //con useState normal
    // const [contador, setContador] = useState(0)
    /*const sumar = () => setContador(contador+1);
    const restar = () => setContador(contador-1);
    */

    //con useReducer
    const [state, dispatch] = useReducer(reducer, initialState, init); //dispatch = despacho
    //init es valor inicial (como el array.reduce de javascript). por ejemplo con lo que hicimos nosotros, le suma de arranque nomas 100 al initialState
    //init es una funcion que se ejecuta al principio, nada mas. Palabras de mircha: 'init es solo cuando se monta el componente' - en la practica no se usa mucho este parametro init
    //como devolucion(return) de reducer(funcion), se pisa el valor de state por uno nuevo

    const sumar = () => dispatch({ type: TYPES.INCREMENT });//recibe como parametro solo el action
    const restar = () => dispatch({ type: TYPES.DECREMENT });

    const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });  //payload tambien viene con reducer, es el valor que le pasamos.
    const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 }); //payload = carga útil
    const reset = () => dispatch({ type: TYPES.RESET });

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Contador REDUCER</h2>
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

export default Contador