

import { Link, Router, Routes, Route, useLocation, useMatch, BrowserRouter, useParams } from "react-router-dom"

//con esto vamos a ver un switch de switch por asi decirlo
//Rutas anidadas. hook useRouteMatch (actualmente useMatch)
//son como rutas anidadas en segundo nivel




//para las subrutas
const Topic = ({topic}) =>{
    //let {topic} = useParams(); //esto viene des de la url desde donde nosotros llamamos a Topic
    //era algo que habia hecho el profe pero fallaba 


    return (
        <div>
            <h4>{topic}</h4>
            <p>Lorem asdda {topic} wdd fdg drg </p>
        </div>    
    )
    //funciona mi inventooo ajajaja
};




const ReactTopics = () => {

    // let match = useRouteMatch();
    // console.log(match); a mi no me anduvo esto por problema de version
    //nota del profe: 'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite
    //construir enlaces relativos <Link> o <NavLink>:

    // let { path, url } = useMatch();




    //yo tengo que hacer unas modificaciones para que url y path me lo lea de otra manera ya que con la manera del profe no me anda

    let {pathname}    = useLocation();
    console.log(pathname);
    //voy a reemplazar pathname de useLocation en lugar de url que habia hecho el profe

    //el profe usa url para los links y los navLinks, path para las routes


    let {topic}  = useParams();
    




    return (
        <div>


            <h3>React Topics manual casero</h3>
            <ul>
                <li>
                    <Link to= "/react/jsx"  >      {/* `${pathname}/jsx` algo asi se deberia hacer pero no me salio. la idea era que no quedara hardcodeado '/react' */}
                        JSX
                    </Link>
                </li>
                <li><Link to="/react/props">Props</Link></li>
                <li><Link to="/react/estado">Estado</Link></li>
                <li><Link to="/react/componentes">Componentes</Link></li>
            </ul>




            < Routes>
                {/**esto no me funciona a mi, las subrutas */}
            <Route   path="/react/:topic" element={ 
                    Topic
                } />

                <Route   path="/*" element={ 
                    <>
                        <h4> Elige un tema de react</h4>
                        <p>Lorem ipsim asd asd asdasd asd as </p>
                    </>
                } />
 
            </Routes>

            {/* hay una alternativa de hacer esto(lo de arriba) pero es mia casera nomas: */}
            <Topic topic={topic}/>








        </div>
    )
}
export default ReactTopics;


//16/12 se viene la final del mundooooooo,  el partido mas importante del mundoo. vamos argentina concentrados, disfruten, jueguen. a jugar a jugar dijera el diegote
// paso a paso, todos juntos, de a poco nomas. Vamossss. a dar todo








//aca me quede 


