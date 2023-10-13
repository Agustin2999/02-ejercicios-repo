import { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {

    const [contador, setContador] = useState(0);


    /*memorizamos estas funciones con useCallback para que no se renderize mi ContadorHijo al pedo*/
    // const sumar = () => {
    //     setContador(contador + 1)
    //     alert("pepe") //Sin callback: es como que no entra a la funcion pero como que la registra de nuevo; y al registrarla de nuevo re-renderiza a ContadorHijo
    // }

    const sumar = useCallback(() => {
        setContador(contador + 1)
    }, [contador]); //variable de dependencia. Cuando cambie esta, es cuando se va a ejecutar el callback

    //const restar = () => setContador(contador - 1)
    const restar = useCallback(() => {
        setContador(contador - 1)
    }, [contador]);




    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>

            <input type="text" onChange={handleInput} value={input} />

            {/*useCallback lo que hace es memorizar funciones puras*/}

            <ContadorHijo contador={contador} sumar={sumar} restar={restar} /> {/**le damos a los botones - y + y el contadorHijo se renderiza tambien (antes de agregar useCallback), es al pedo porque no se modifica su valor */}
        </div>
    )
}

export default Contador