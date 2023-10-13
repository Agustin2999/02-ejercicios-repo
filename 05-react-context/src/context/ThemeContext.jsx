import { useState } from "react";
import { createContext } from "react";


//react recomienda que: por cada funcionalidad global que tengamos en la aplicacion, que creemos 1 contexto

//anteriormente (creo) se crea contexto y proveedor (son dos cosas). Algunos lo hacen en archivos .js/.jsx separados, pero el profe lo va a hacer todo en uno
//segun el profe viene un hook que reemplaza esto

const ThemeContext = createContext();

//Theme porque vamos a hacer la prop 'Theme' que usamos en la version comun (que es para cambiar el tema de oscuro a claro)


const initialTheme = "light";



const ThemeProvider = ({ children }) => {
    //children es algo que te da react (lo vimos en videos anteriores)
    //children son los hijos a los que les va a compartir la data. Es el lugar que ocupan los hijos


    const [theme, setTheme] = useState(initialTheme);


    const handleTheme = e => {
        if (e.target.value === "light") {//viene el valor del input que seleccionamos (radio)
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };


    const data = {//iremos agregando todos los valores que necesitamos compartir
        theme, handleTheme
    }



    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>

    )

}






export { ThemeProvider } //es la funcion (lo que engloba para que obtengamos 'children')
export default ThemeContext; //es el contexto, que se usa en useContext (en cada children (ej FooterContext.jsx))