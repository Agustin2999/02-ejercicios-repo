//funcion reductora de crud api

import { TYPES } from "../actions/crudActions";



export const crudInitialState = {
    db: null // para que inicialice null la db
}





export function crudReducer(state, action) {

    switch (action.type) {

        case TYPES.READ_ALL_DATA: {
            //action.payload es un array de objetos
            return {
                ...state,
                db: action.payload.map(data =>   //action.payload es la res (respuesta) que viene de la api
                    data)
            } //pregunte a gpt y map (data=>data) es lo mismo que usar spread operator (que es para copiar un array)
        }

        case TYPES.CREATE_DATA: {
            //console.log(action.payload)// te trae el nuevo registro en formato objeto
            return {
                ...state,
                db: [...state.db, action.payload]
            }
        }

        case TYPES.UPDATE_DATA: {
            //console.log(action.payload)//viene todo el objeto a editar
            let newData = state.db.map(el => el.id === action.payload.id ? action.payload : el)
            return {
                ...state,
                db: newData
            }
        }

        case TYPES.DELETE_DATA: {
            //action.payload trae solo el id
            let newData = state.db.filter((item) => item.id !== action.payload);
            return {
                ...state,
                db: newData
            }
        }

        case TYPES.NO_DATA:
            return crudInitialState

        default:
            return state
    }
}



