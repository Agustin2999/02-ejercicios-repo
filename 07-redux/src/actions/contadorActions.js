//aca se definiran todas las acciones

import { INCREMENT, DECREMENT, INCREMENT_5, DECREMENT_5, RESET } from "../types"

export const sumar = () => ({ type: INCREMENT })// aprovechamos return implicito (por los parentesis)
export const restar = () => ({ type: DECREMENT })
export const sumar5 = () => ({ type: INCREMENT_5, payload: 5 })
export const restar5 = () => ({ type: DECREMENT_5, payload: 5 })
export const reset = () => ({ type: RESET })






























