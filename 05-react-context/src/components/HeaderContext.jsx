import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import TextsContext from "../context/TextsContext";
import AuthContext from "../context/AuthContext";


const HeaderContext = ({ }) => {

    const { theme, handleTheme } = useContext(ThemeContext) //ThemeContext es el export default de ThemeContext.jsx

    const { texts, handleLanguage } = useContext(TextsContext) //llamas al context para poder extraer las props (desde value=)

    const { auth, handleAuth } = useContext(AuthContext);



    return (

        <header className={theme}>
            <h2>{texts.headerTitle}</h2>
            <h3>{texts.headerSubtitle}</h3>

            <select name="language" onChange={handleLanguage}>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>

            <input type="radio" name="theme" id="light-context" onClick={handleTheme} value="light" />
            <label htmlFor="light-context">{texts.headerLight}</label>


            <input type="radio" name="theme" id="dark-context" onClick={handleTheme} value="dark" />
            <label htmlFor="dark-context">{texts.headerDark}</label>
            {/* le ponemos -context a los id para que no se confunda con la pagina anterior */}

            <button onClick={handleAuth}>
                {auth ?
                    texts.buttonLogout
                    :
                    texts.buttonLogin
                }
            </button>

        </header>

    )
}

export default HeaderContext;