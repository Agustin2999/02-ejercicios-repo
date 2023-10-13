//es un componente puro de javascript, por lo tanto (...el archivo...) no necesita empezar con mayuscula


//importamos Types desde 'actions'
import { TYPES } from "../actions/contadorActions"



//en este archivo va: la funcion reductora, y variables (iniciales supongo) (contadorInitialState y contadorInit que es una funcion)




export const contadorInitialState = {
    contador: 0
}

export const contadorInit = (initialState) => {
    return {
        contador: initialState.contador + 100
    }
}



export function contadorReducer(state, action) {

    switch (action.type) {
        case TYPES.INCREMENT:
            return {
                contador: state.contador + 1
            }

        case TYPES.DECREMENT:
            return {
                contador: state.contador - 1
            }

        case TYPES.INCREMENT_5:
            return {
                contador: state.contador + action.payload
            }
        case TYPES.DECREMENT_5:
            return {
                contador: state.contador - action.payload
            }
        case TYPES.RESET:
            return contadorInitialState

        default:
            return {
                state
            }
    }
}
















