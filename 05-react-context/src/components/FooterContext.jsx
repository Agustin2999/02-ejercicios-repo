import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import TextsContext from "../context/TextsContext";


const FooterContext = () => {

    const { theme } = useContext(ThemeContext)
    const { texts } = useContext(TextsContext)

    return (
        <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
        </footer>
    )
}

export default FooterContext;