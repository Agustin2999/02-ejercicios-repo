import { Link } from "react-router-dom"

export function ServiciosLista({ servicios }) {
    return (
        <>
            <h2>Conoce nuestros servicios</h2>
            <ul>
                {servicios.map((serv) => {
                    return <li key={serv.id}>
                        <Link to={`/servicios/${serv.id}`}> {serv.nombre}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}