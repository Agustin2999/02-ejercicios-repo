import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";


const initialTheme = "light";
const initiallanguage = 'es';
const initialAuth = null;

const translations = {//traducciones
    //por cada lenguaje que utilices, tenes que tener un objeto con sus configuraciones
    //frases para español: frases para el ingles
    es: {
        headerTitle: "Mi aplicacion SIN Context API",
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
        headerTitle: "My application without Context",
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





const MyPage = () => {

    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initiallanguage); //para cambiar el idioma de la pagina

    //textos traducidos
    const [texts, setTexts] = useState(translations[language]);  //NO se hace automatico. Solamente se hace al incio de la pagina, luego hay que hacerlo manual (handleLanguage)

    const [auth, setAuth] = useState(initialAuth); //para el boton de logueo



    const handleTheme = e => {

        if (e.target.value === "light") {//viene el valor del input que seleccionamos (radio)
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };


    const handleLanguage = e => {

        if (e.target.value === "es") {
            setLanguage("es");
            setTexts(translations.es)
        } else {
            setLanguage("en");
            setTexts(translations.en)
        }

    }


    const handleAuth = e => {

        if (auth) {
            setAuth(null);

        } else {
            setAuth(true);
        }
    }



    return (
        <div className="my-page">
            <Header theme={theme} handleTheme={handleTheme} texts={texts}
                handleLanguage={handleLanguage}
                auth={auth}
                handleAuth={handleAuth} />
            <Main theme={theme} texts={texts} auth={auth} />
            <Footer theme={theme} texts={texts} />


        </div>
    )
}
//nota: me tiro error cuando lo cree en .js, tuve que agregarle la x (.jsx)
export default MyPage;