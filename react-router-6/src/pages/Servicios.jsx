import { Link, Outlet } from "react-router-dom";

export function Servicios() {
    return (
        <>
            <h1>Servicios</h1>

            <nav className="menu">
                <Link to="/servicios">Inicio</Link>
                <Link to="/servicios/lista">Lista</Link>
                <Link to="/servicios/garantia">Garantia</Link>
                <Link to="/servicios/politicas">Politicas</Link>
                {/* todos parten desde el localhost:nnnn; es decir, desde la raiz */}
            </nav>


            <Outlet /> {/**elemento de react router dom. Aca es donde van a ir las subrutas */}
            {/* Sin el outlet, no funcionan las subrutas */}
            <p>asdasd (servicios.jsx)</p>
        </>
    )
}


