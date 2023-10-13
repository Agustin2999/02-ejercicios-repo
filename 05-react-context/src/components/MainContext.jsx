import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import TextsContext from "../context/TextsContext";
import AuthContext from "../context/AuthContext";

const MainContext = () => {
    const { theme } = useContext(ThemeContext)
    const { texts } = useContext(TextsContext)
    const { auth } = useContext(AuthContext);

    return (

        <main className={theme}>
            {auth ?
                <p>{texts.mainHello}</p>
                :
                <p>{texts.mainWelcome}</p>
            }

            <p>{texts.mainContent}</p>
        </main>
    )
}

export default MainContext;



