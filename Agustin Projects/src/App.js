import React from 'react';
import PracticaMiaAgustin from "./components/PracticaMiaAgustin/CrudAG";
import CalculoDinero from "./components/CalculoDineroReparto/CalculoDineroIndex";

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

//npm install react-router-dom


import './App.css'


function App() {

  const searchParams = "" //new URLSearchParams(location.search);

  // Función que verifica si el usuario tiene acceso a la página "PracticaMiaAgustin"
  const hasAccessUniqueCalcDin = () => {
    // const userType = searchParams.get('at') === 'p'; // Verificar el valor del parámetro "admin" en la URL
    const userType = (window.location.href).endsWith("agustin2999.github.io/") || (window.location.href).endsWith("agustin2999.github.io")

    return userType;
  };






  const handleClick = (reparto)=>{
    alert(reparto)

    
    
  }





  return (
    <div>
      {/* <CalculoDinero/>
      {/* importe bootsstrap en index.html */}

      {/*<PracticaMiaAgustin />  DESCOMENTAR */}

      {/**https://youtu.be/8WCoWFkzHkA */}
      {/**estoy dejando lindo la app de ropero. la voy a hacer con localstorage a modo de prueba */}






      {hasAccessUniqueCalcDin() == true || hasAccessUniqueCalcDin() == undefined ?
        (
          <CalculoDinero />
        )
        :
        (

          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/components/PracticaMiaAgustin/CrudAG">PracticaMiaAgustin</Link>
                  </li>

                  <li>
                    <Link to="/components/CalculoDineroReparto/CalculoDineroIndex">CalculoDinero</Link>
                  </li>

                </ul>



                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                  <label className="btn btn-outline-primary" htmlFor="btnradio1" onClick={() => handleClick("linkPMA")}>
                    <Link to="/components/PracticaMiaAgustin/CrudAG" id="linkPMA" style={{ color: "white", textDecoration: "none" }}>PracticaMiaAgustin</Link>
                  </label>


                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="btnradio2" onClick={() => handleClick("linkCalcDin")}>
                    <Link to="/components/CalculoDineroReparto/CalculoDineroIndex" id="linkCalcDin" style={{ color: "white", textDecoration: "none" }}>CalculoDinero</Link>
                  </label>


                </div>



              </nav>

              <Routes>
                <Route path="/components/PracticaMiaAgustin/CrudAG" element={<PracticaMiaAgustin />} />


                <Route path="/components/CalculoDineroReparto/CalculoDineroIndex" element={<CalculoDinero />} />
                {/* si cambio path por /projects/componetsetcc tambien funciona si el usuario entra con esa url projects/components etc. (sin necesidad de que existan las carpetas realmente) */}


              </Routes>
            </div>
          </Router>



5/6/23 FALTA HACER ESTAS PRUEBAS Y SUBIRLO NOMAS Y QUE YA QUEDE ATP

    ENCONTRE EL PROBLEMA, NUNCA ENTRA ACA PORQUE ES EL MISMO ID, POR LO TANTO NO REENDERIZA


        Pruebas:
                
        Borrar la bd L
        buscar por ocasion L
        boton limpiar de busqueda L (se renderizaba el ropa puesta pero ya lo arregle)
        agregar algo L
        agregar y luego intentar modificar ese L
        agregar y luego intentar modificar otro L
    (hace algo raro, si agrego un elemento abc ponele, creo que el error viene porque no es remera ni ningun elemento correcto. entonces al intentar editarlo directamente, no anda. Pero, si intento editar otro correcto y luego click en el lapiz de abc, si funciona)
        modificar L Por ahora no pude replicar el error de arriba asi que se queda asi kt 29/5/23
        modificar 2 veces el mismo FALTA pero lo dejare asi qsy (creo que lo arreglé)
        recargar pagina y ver que no se borro nada
        eliminar bd y ver que se reestablecio bien
        (si todo sale bien, al ultimo comentar los alerts y los console.logs)  

-agrega en local storage al principio de manera innecesaria pero bueno



        )

      }


    </div>
  );
}

export default App;






/*29/4/23. para subir app:
borrar todo del repositorio de github. Borrar carpeta build de aca tambien. despues hacer npm run build, y despues todo ese contenido subirlo a github
*/









//npm install --global yarn
//npm install --save-dev gh-pages
//https://youtu.be/OUsC13AEiUQ

//- npm run build
//- npm run deploy
//git remote add origin https://github.com/Agustin2999/agustin2999.github.io.git


/*chgat gpt
Crea un nuevo repositorio en tu cuenta de GitHub con el nombre "pepe.github.io". Este será el repositorio que alojará tu aplicación en la web.

En la carpeta raíz de tu proyecto React, crea un archivo llamado "CNAME" y escribe tu dominio personalizado en él. Por ejemplo, si tu dominio personalizado es "pepapp.com", el contenido del archivo "CNAME" debería ser:

Copy code
pepapp.com
En tu proyecto de React, ejecuta el comando "npm run build" para crear una versión optimizada de tu aplicación.

En la carpeta "build" de tu proyecto, crea un archivo llamado ".nojekyll" (sin extensión) para indicar a GitHub Pages que no debe usar Jekyll para procesar tu sitio web.

Abre la página de configuración de tu repositorio "pepe.github.io" en GitHub y activa la opción de GitHub Pages. Selecciona la rama "main" y la carpeta "root" para publicar tu sitio web.

Ahora, en la sección "Source" de la configuración de GitHub Pages, elige "main branch" y haz clic en "Save". Después de unos minutos, tu aplicación React estará disponible en la dirección "https://pepe.github.io".

Finalmente, sube los archivos de la carpeta "build" de tu proyecto React al repositorio "pepe.github.io" utilizando la línea de comandos de Git. Asegúrate de que el archivo "CNAME" y el archivo ".nojekyll" se incluyan en la subida.

Una vez completados estos pasos, podrás acceder a tu aplicación React en la dirección "https://pepapp.com".


*/ 