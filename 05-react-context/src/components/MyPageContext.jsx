//Ahora lo haremos con Context API, que se recomienda cuando tenes que pasar muchas propiedades a los componentes, o la misma propiedad a varios componentes




/*solamente usa el context cuando necesites compartir variables de estado, de efectos, 
en varios elementos de tu arbol/estructura de componentes dentro de tu aplicacion.
 No hay que usarlo siempre
*/




import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import { useContext } from "react";
import { TextsProvider } from "../context/TextsContext";
import { AuthProvider } from "../context/AuthContext";



// const initiallanguage = 'es';
// 

// const translations = {
//     es: {
//         headerTitle: "Mi aplicacion CON Context API",
//         headerSubtitle: "Mi cabecera",
//         headerLight: "Claro",
//         headerDark: "Oscuro",
//         buttonLogin: "Iniciar Sesión",
//         buttonLogout: "Cerrar Sesión",
//         mainWelcome: "Bienvenid@ invitad@",
//         mainHello: "Hola Usuari@",
//         mainContent: "Mi contenido principal",
//         footerTitle: "Mi pie de pagina"
//     },
//     en: {
//         headerTitle: "My application WITH Context",
//         headerSubtitle: "My header",
//         headerLight: "Light",
//         headerDark: "Dark",
//         buttonLogin: "Login",
//         buttonLogout: "logout",
//         mainWelcome: "Welcome Guest",
//         mainHello: "Hello User",
//         mainContent: "Mi main content",
//         footerTitle: "My footer"
//     }
// };





const MyPageContext = () => {


    //const [language, setLanguage] = useState(initiallanguage); //para cambiar el idioma de la pagina

    // //textos traducidos
    // const [texts, setTexts] = useState(translations[language]);  //NO se hace automatico. Solamente se hace al incio de la pagina, luego hay que hacerlo manual (handleLanguage)
    // Ahora lo haceos con context



    // const [auth, setAuth] = useState(initialAuth); //para el boton de logueo


    // const handleAuth = e => {

    //     if (auth) {
    //         setAuth(null);

    //     } else {
    //         setAuth(true);
    //     }
    // }



    return (
        <div className="my-page">

            <AuthProvider>

                <ThemeProvider>

                    <TextsProvider>
                        {/* envolves todo para luego usar propiedades compartidas digamos */}

                        {/* directamente sacamos  theme={theme} y handleTheme={handleTheme}  de los componentes ya que lo va a leer automatico del provider. PERO ahora los componentes ya no lo extraen de las props, si no con useContext */}
                        <HeaderContext
                        // texts={texts} ahora usamos context
                        //   handleLanguage={handleLanguage}
                        // auth={auth}
                        // handleAuth={handleAuth}
                        />
                        <MainContext />
                        <FooterContext />
                    </TextsProvider>

                </ThemeProvider>
                {/* Con los contexts logramos que todo esto de aca arriba quede limpio de props(de pasarle props desde aca) */}

            </AuthProvider>

        </div>
    )
}
//nota: me tiro error cuando lo cree en .js, tuve que agregarle la x (.jsx)
export default MyPageContext;