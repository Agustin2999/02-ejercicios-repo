import { Link, NavLink } from 'react-router-dom'

export function Menu() {

    //navlink trae una funcionalidad, que es basicamente para saber en donde estas parado

    return (
        <>
            <nav className='menu'>
                {/* El to es el href de un <a> */}
                <Link to="/">Home</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/about">About</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/inexistente">Error404</Link>
                <Link to="/productos">Produtos</Link>
                <Link to="/servicios">Servicios</Link>
            </nav>

            <nav className='menu'>
                {/* El to es el href de un <a> */}
                <NavLink className={({ isActive }) => isActive ? 'active-link' : null} to="/">Home</NavLink>
                {/* isactive es una propiedad que ya trae navlink y nosotros la destructuramos */}
                <NavLink className={({ isActive }) => isActive ? 'active-link' : null} to="/acerca">Acerca</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : null} to="/contacto">Contacto</NavLink>
            </nav>
        </>
    )
}