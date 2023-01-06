import { Link, NavLink } from "react-router-dom"


const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Enlaces HTML (no recomendado)</span>
                    {/* el problema es que al hacer click en estos me recarga toda la pagina, y hay que evitarlo */}
                    <a href="/"> Home</a>
                    <a href="/acerca"> Acerca</a>
                    <a href="/contacto"> Contacto</a>
                </li>

                <li>
                    <span>Componente Link:</span>
                    <Link to="/">Home</Link > {/**de react router dom. To es como Href */}
                    <Link to="/acerca">Acerca</Link >
                    <Link to="/contacto">Contacto</Link >
                    <Link to="/no-existe">Error 404</Link >
                </li>

                <li>
                    <span>Componente NavLink:</span>
                    <NavLink to="/" activeClassName="active">Home</NavLink> {/**esto es similar a link, pero nos ofrece entre otras cosas el activeClassName, que basicamente es para ver a donde estamos parados */}
                    <NavLink to="/acerca" activeClassName="active">Acerca</NavLink>
                    <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>

                </li>



                <li>
                    <span>Parametros:</span>
                    <Link to="/usuario/pablo">Pablo</Link >
                    <Link to="/usuario/valentina">Valentina</Link >

                </li>

                <li>
                    <span>Parametros de consulta (query string):</span>
                    <Link to="/productos">Productos</Link >
                </li>

                <li>
                    <span>Redirecciones: </span>
                    <Link to="/about">About in english</Link >
                    <Link to="/contact">Contact in english</Link >

                </li>



                <li>
                    <span>Rutas Anidadas:</span>
                    <Link to="/react">React manual casero</Link>
                </li>

            </ol>



        </nav>
    )
}

export default MenuConceptos;