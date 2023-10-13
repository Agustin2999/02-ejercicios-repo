//store de redux

import { createStore } from "redux";
import reducer from "../reducers";//como se llama index el archivo, no es necesario especificarlo aca, ya que te lo lee por default

//Store lo que hace es relacionar todo. Entra el dispatch, hace el reducer, y sale el state nuevo (como en la imagen de la app)

const store = createStore(reducer);

store.subscribe(() => {

    console.log("subscribe del store")
    console.log(store)
}
);//cada vez que se actualice el estado



export default store;
















