//el profe dice que con copiar y pegar aprendes menos que si fuese escribiendo (creo que ya lo plasme a esto en algun lado hace tiempo, me suena que ya lo sabia o quizas el mismo mircha lo dijo en algun momento, pero bue)

import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext();

const initialAuth = null;


const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialAuth); //para el boton de logueo


    const handleAuth = e => {

        if (auth) {
            setAuth(null);

        } else {
            setAuth(true);
        }
    }


    const data = {
        auth, handleAuth
    }


    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    //                        se llama value pero se puede llamar como sea

}


export { AuthProvider };// exporta como objeto
export default AuthContext;







