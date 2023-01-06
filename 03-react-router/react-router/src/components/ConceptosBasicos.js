import { BrowserRouter, BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
//Redirect para redirecciones fue reemplazado por <Navigate to="/404" /> }

import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";

//tiene varias modificaciones porque el codigo de jon mircha quedo desactualizado

//PRIMERA FORMA DE HACERLO (hay que sacarle el 'Eliminado')
const ConceptosBasicosEliminado = () => {
    return (
        <div>
            <h2>Conceptos Basicos</h2>
            <Router>
                <Routes>
                    <Route path="/acerca" element={<><Acerca /><p>                loremasdas asdasda sdasd as asdas            </p></>} >  {/**element={<h3>Acerca</h3>} */}
                        {/**http://localhost:3000/acerca */}
                    </Route>
                    {/* <Route path="/contacto"
                        // element={
                        //     <>
                        //         <h3>Contacto</h3>
                        //         <Contacto />
                        //     </>
                        // }

                        //otra alternativa es hacerlo asi mas directo, y te renderiza 1 solo componente
                       // component={Contacto} ESTO HIZO EL PROFE PERO NO ME FUNCIONO
                    /> */}
                    {/* <Route path="/contacto" children={<Contacto />} /> *se puede usar la prop children tambien. TAMPOCO ME FUNCIONO */}
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/" element={<> <h3>Home</h3>  <p>Bienvenido al tema de las rutas en React</p></>}> {/**le decimos que en el home cargue home */}
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}






//SEGUNDA FORMA DE HACERLO
const ConceptosBasicos = () => {
    return (
        <div>

            <h2>Conceptos Basicos version 2</h2>


            <Router>
                <MenuConceptos />
                <Routes> {/**este es como si fuera el switch de versiones anteriores */}
                    <Route path="/" element={<Home />} />
                    <Route path="/acerca" element={<Acerca />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/usuario/:username" element={<Usuario />} /> {/**con ':' le decimos la variable que queremos usar como parametro, para despues poder leerlo con useparams */}
                    {/** usuario/:username/:age ,entonces nosotros podemos decirle http://localhost:3000/usuario/david/12 */}
                    {/**el unico tema es que creo que te los pide obligatorios a los parametros */}
                    <Route path="/productos" element={<Productos />} />

                    {/**redirecciones. rutas en ingles: */}
                    <Route path="/about" element={<Navigate to="/acerca" />} />
                    <Route path="/contact" element={<Navigate to="/contacto" />} />


                    <Route path="/react/*" element={
                       
                            <ReactTopics />
                        } />



                </Routes>
            </Router>


        </div>
    )
}

export default ConceptosBasicos;










