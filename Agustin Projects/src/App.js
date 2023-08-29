import React from 'react';
import PracticaMiaAgustin from "./components/PracticaMiaAgustin/CrudAG";
import CalculoDinero from "./components/CalculoDineroReparto/CalculoDineroIndex";
import { useRef } from 'react';
import Spidder from "./components/spidder/MainSpidder";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


//npm install react-router-dom


import './App.css'
import MyProfile from './components/spidder/MyProfile';


let estilosLink ={
  textDecoration: 'none',
   display: 'block', 
   height: 'inherit', 
   width: 'inherit',
  display: 'flex', 
  justifyContent: 'center',  
  alignItems: 'center', 
  padding: '0.4rem 0.7rem'  
}


function App() {

  const searchParams = "" //new URLSearchParams(location.search);
  const clickearInputCalcDin = useRef(null);
  const clickearInputPMA = useRef(null);
  // Función que verifica si el usuario tiene acceso a la página "PracticaMiaAgustin"
  const hasAccessUniqueCalcDin = () => {
    // const userType = searchParams.get('at') === 'p'; // Verificar el valor del parámetro "admin" en la URL
    const userType = (window.location.href).endsWith("agustin2999.github.io/") || (window.location.href).endsWith("agustin2999.github.io")



    // if (!userType) {

    // //  sacar parametros url ?producto=camiseta&color=azul&talla=s
    // const valores = window.location.search;
    // const urlParams = new URLSearchParams(valores);
    // var parametro = urlParams.get('projects');

    //   if (parametro == 'y') {
    //     //alert("llego")
    //     //window.location.href = 'https://agustin2999.github.io/components/PracticaMiaAgustin/CrudAG';
    //     // window.location.href = 'http://localhost:3000/components/PracticaMiaAgustin/CrudAG'; para desarrollo
       
    //   }


    // }
    return userType;
  };


   const eliminarChecked = (elemento) => {
    return new Promise(resolve => {
      resolve(() => {
        elemento.classList.remove("active")
        elemento.classList.add("fondoBlanco")
      }
      )
    })


  }

  const ponerChecked = (elemento) => {
    return new Promise(resolve => {
      resolve(() => {
        elemento.classList.add("active")
        elemento.classList.remove("fondoBlanco")
      })

    })
  }

 
  // const handleClick = (objective) => {
  //   alert(objective)
  //   var inputCalcDin = document.getElementById("inputCalcDin");
  //   var inputPMA = document.getElementById("inputPMA");
  //   if (objective == "inputCalcDin") {
  //     alert("kajaj")
  //     eliminarChecked(inputPMA)
  //       .then(e => {
  //         alert("Se removio")
  //         ponerChecked(inputCalcDin)
  //         alert("termino")
  //       })
  //     // inputPMA.removeAttribute("checked");
  //   }
  //   if (objective == "inputPMA") {
  //     eliminarChecked(inputCalcDin)
  //       .then(e => {
  //         alert("Se removio")
  //         ponerChecked(inputPMA)
  //         alert("termino")
  //       })
  //     //inputCalcDin.removeAttribute("checked");
  //  }
  // }



  const handleClick = (elemento) => {
    document.getElementById('inputCalcDin').classList.remove("seleccionado")
    document.getElementById('inputPMA').classList.remove("seleccionado")
    let element = document.getElementById(elemento)
    element.classList.add("seleccionado")

  }


  const handleClick2 = (elemento) => {
    document.getElementById('aPma').classList.remove("active")
    document.getElementById('aRD').classList.remove("active")
    let element = document.getElementById(elemento)
    element.classList.add("active")

    if (elemento === 'aPma') {
      handleClick('inputPMA')
      clickearInputPMA.current.click();
    } else if (elemento === 'aRD') {
      handleClick('inputCalcDin')
      clickearInputCalcDin.current.click();
    }
  }




  const handleClick3 = (elemento) => {
    document.getElementById('aPma').classList.remove("active")
    document.getElementById('aRD').classList.remove("active")
    document.getElementById('aSp').classList.remove("active")

    let element = document.getElementById(elemento)
    element.classList.add("active")
  }





  return (
    <div >

      {/* <CalculoDinero/>
      {/* importe bootsstrap en index.html */}

      {/*<PracticaMiaAgustin />  DESCOMENTAR */}

      {/**https://youtu.be/8WCoWFkzHkA */}
      {/**estoy dejando lindo la app de ropero. la voy a hacer con localstorage a modo de prueba */}


      {
       hasAccessUniqueCalcDin() == true || hasAccessUniqueCalcDin() == undefined ?
      (
          <CalculoDinero />
                  )
        :
        (
          <Router>
            <div  >
              <nav>
                <div className='divAppMain' style={{ background: 'red' }}>
                </div>
              </nav>

              <h1>Proyectos</h1>
              {/* <div class="card text-center">
                <div class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" id="aPma" onClick={() => handleClick2('aPma')}  >PracticaMiaAgustin</a>

                      <Link className="navMenuApps" id="inputPMA" 
                    to="/components/PracticaMiaAgustin/CrudAG" id2="linkPMA" style={{ textDecoration: 'none' }} ref={clickearInputPMA} >PracticaMiaAgustin</Link>
                  
                      {/* onClick={() => handleClick('inputCalcDin')}  onClick={() => handleClick('inputPMA')} }
                    </li>
                    <li class="nav-item">
                    <Link className="navMenuApps" id="inputCalcDin" 
                    to="/components/CalculoDineroReparto/CalculoDineroIndex" id2="linkCalcDin" style={{ textDecoration: 'none' }} ref={clickearInputCalcDin} >CalculoDinero</Link>

                      <a class="nav-link" id="aRD" onClick={() => handleClick2('aRD')} >Reparto de Dinero</a>
                    </li>

                  </ul>
                </div>
                <div className="card-body" id="divPrincipalBootstrap" >
                  <Routes>
                    <Route path="/components/PracticaMiaAgustin/CrudAG" element={<PracticaMiaAgustin />} />

                    <Route path="/components/CalculoDineroReparto/CalculoDineroIndex" element={<CalculoDinero />} />
                    {/* si cambio path por /projects/componetsetcc tambien funciona si el usuario entra con esa url projects/components etc. (sin necesidad de que existan las carpetas realmente) }

                  </Routes>

                </div>
              </div> */}


              <div class="card text-center">
                <div class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    <li className="nav-item cur-pt">
                      <a className="nav-link active app-aContenedorLinkPaginas" id="aPma">
                        <Link id="inputPMA"
                        style={estilosLink}
                          to="/components/PracticaMiaAgustin/CrudAG" id2="linkPMA" onClick={() => handleClick3('aPma')} ref={clickearInputPMA} >Ropero virtual</Link>
                      </a>
                      {/* onClick={() => handleClick('inputCalcDin')}  onClick={() => handleClick('inputPMA')}*/}
                    </li>
                    <li className="nav-item cur-pt">

                      <a id="aRD" className="nav-link app-aContenedorLinkPaginas">
                                                <Link id="inputCalcDin"  
                        style={estilosLink}
                           to="/components/CalculoDineroReparto/CalculoDineroIndex" id2="linkCalcDin" onClick={() => handleClick3('aRD')} >CalculoDinero</Link>

              {/* Si no le pongo estilos en linea a LINK no funciona.  HACER UNA VARIABLE CON ESTOS (25/8/23). Listo */}
                      
                    </a>
                    </li>

                    <li className="nav-item cur-pt">
                      <a className="nav-link app-aContenedorLinkPaginas" id="aSp">
                        <Link id="inputSpidder"
                         style={estilosLink}
                          to="/components/spidder/mainSpidder" id2="linkSpidder" onClick={() => handleClick3('aSp')}>Spidder</Link>
                      </a>
                    </li>
 
                  </ul>
                </div>
                <div className="card-body" id="divPrincipalBootstrap" style={{  paddingLeft:'0.1rem', paddingRight:'0.1rem'}} >
                
                  <Routes>
                      <Route path="*" element={<PracticaMiaAgustin />} /> {/**opcion por defecto */}
                     
                    <Route path="/components/PracticaMiaAgustin/CrudAG" element={<PracticaMiaAgustin />} />

                    <Route path="/components/CalculoDineroReparto/CalculoDineroIndex" element={<CalculoDinero />} />
                    {/* si cambio path por /projects/componetsetcc tambien funciona si el usuario entra con esa url projects/components etc. (sin necesidad de que existan las carpetas realmente) */}


                    <Route path="/components/spidder/mainSpidder" element={<Spidder />} />
 
                    <Route path="/components/spidder/MyProfile"
                        element={<MyProfile funcionPrueba={()=>alert("funcionPrueba appjs")}/>} />

                  </Routes>
                   
                </div>
              </div>
             </div>
          </Router>
        )
      }

     </div>
  );
}

export default App;






/*29/4/23. 15/8/23 para subir app:
borrar todo del repositorio de github. Borrar carpeta build de aca tambien. despues hacer npm run build, y despues todo ese contenido subirlo a github
*/



/*
Pruebas:

Borrar la bd L
buscar por ocasion L
boton limpiar de busqueda L (se renderizaba el ropa puesta pero ya lo arregle)
agregar algo L
agregar y luego intentar modificar ese L
agregar y luego intentar modificar otro L
(hace algo raro, si agrego un elemento abc ponele, creo que el error viene porque no es remera ni ningun elemento correcto. entonces al intentar editarlo directamente, no anda. Pero, si intento editar otro correcto y luego click en el lapiz de abc, si funciona)
modificar L Por ahora no pude replicar el error de arriba asi que se queda asi kt 29/5/23
RRR modificar 2 veces el mismo FALTA pero lo dejare asi qsy (creo que lo arreglé) L
recargar pagina y ver que no se borro nada L
eliminar bd y ver que se reestablecio bien L
(si todo sale bien, al ultimo comentar los alerts y los console.logs) L

-agrega en local storage al principio de manera innecesaria pero bueno. No comprobe y no hace falta kt

 //19/6/23 a publicar nomas que tanto lio. Proximamente hacemos red social twittera. Con sass, tailwind, y todo junto. Estaria bueno que haya api

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


