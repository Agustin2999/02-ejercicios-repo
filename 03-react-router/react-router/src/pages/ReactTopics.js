import { Link, Router, Routes, Route, useLocation, useMatch,BrowserRouter } from "react-router-dom"
  
//con esto vamos a ver un switch de switch por asi decirlo
//Rutas anidadas. hook useRouteMatch (actualmente useMatch)
//son como rutas anidadas en segundo nivel

const ReactTopics = () => {

    // let match = useRouteMatch();
    // console.log(match); a mi no me anduvo esto por problema de version
    //nota del profe: 'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite
    //construir enlaces relativos <Link> o <NavLink>:

    // let { path, url } = useMatch();


 

    //yo tengo que hacer unas modificaciones para que url y path me lo lea de otra manera ya que con la manera del profe no me anda
    //en url viene /react. tengo que obtener eso
    let { pathname } = useLocation();
    console.log(pathname);
    //voy a reemplazar pathname de useLocation en lugar de url que habia hecho el profe

    //el profe usa url para los links y los navLinks, path para las routes

 

    return (
        <div>
 
 
            <h3>React Topics manual casero</h3>
            <ul>
                <li>
                    <Link to={`${pathname}/jsx`}>      {/*to="/react/jsx"> */}
                        JSX
                    </Link>
                </li>
                <li><Link to="/react/props">Props</Link></li>
                <li><Link to="/react/estado">Estado</Link></li>
                <li><Link to="/react/componentes">Componentes</Link></li>
            </ul>
            <BrowserRouter>
                <Router>
                    <Routes >
                        <Route path={pathname} element={
                            <>
                                <h4> Elige un tema de react</h4>
                                <p>Lorem ipsim asd asd asdasd asd as </p>
                            </>

                        } />

                    </Routes>
                </Router>
            </BrowserRouter>
        </div>
    )
}
export default ReactTopics;

 




//esto prueba, trayendo TODO el padre



 


 
 


//Googlear rutas anidadas. aca me quede https://youtu.be/FPAVD0YnxqU?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&t=850
17'





//https://youtu.be/FPAVD0YnxqU?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&t=836
//16/12 se viene la final del mundooooooo,  el partido mas importante del mundoo. vamos argentina concentrados, disfruten, jueguen. a jugar a jugar dijera el diegote
// paso a paso, todos juntos, de a poco nomas. Vamossss. a dar todo
