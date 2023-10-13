import { useState } from "react";
import { createContext } from "react";

const TextsContext = createContext();

const initiallanguage = 'es';

const translations = {
    es: {
        headerTitle: "Mi aplicacion CON Context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenid@ invitad@",
        mainHello: "Hola Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en: {
        headerTitle: "My application WITH Context",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello User",
        mainContent: "Mi main content",
        footerTitle: "My footer"
    }
};





const TextsProvider = ({ children }) => {

    //textos traducidos
    const [language, setLanguage] = useState(initiallanguage); //para cambiar el idioma de la pagina
    const [texts, setTexts] = useState(translations[language]);


    const handleLanguage = e => {

        if (e.target.value === "es") {
            setLanguage("es");
            setTexts(translations.es)
        } else {
            setLanguage("en");
            setTexts(translations.en)
        }

    }


    const data = {
        texts, handleLanguage
    }

    return (
        <TextsContext.Provider value={data}>{children}</TextsContext.Provider>

    )

}




export { TextsProvider } //es la funcion const. CONTIENE  al contexto. Luego se llama solamente al contexto en HeaderContext.jsx(con useContext) y demas
export default TextsContext;