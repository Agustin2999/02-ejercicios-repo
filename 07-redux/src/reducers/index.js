//es necesario tener un archivo que contenga todos los reducers


import {combineReducers} from "redux"//combina todos los reducers en uno solo
import contadorReducer from "./contadorReducer";
import { shoppingReducer } from "./shoppingReducer";

const reducer = combineReducers({
    contador: contadorReducer,
    shopping: shoppingReducer
});


export default reducer

















