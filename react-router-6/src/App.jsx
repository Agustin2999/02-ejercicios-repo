import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link, Navigate, HashRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contacto } from './pages/Contacto'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Error404 } from './pages/Error404'
import { Productos } from './pages/Productos'
import { ProductoDetalle } from './pages/ProductoDetalle'
import { Servicios } from './pages/Servicios'
import { ServiciosGarantia } from './pages/ServiciosGarantia'
import { ServiciosHome } from './pages/ServiciosHome'
import { ServiciosLista } from './pages/ServiciosLista'
import { ServiciosPolitica } from './pages/ServiciosPoliticas'
import { ServicioDetalle } from './pages/ServicioDetalle'

function Acerca() { //un componente local
  return (<h1>Acerca</h1>)
}





function App() {


  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
    { id: 4, nombre: 'Producto 4', precio: 400 },
    { id: 5, nombre: 'Producto 5', precio: 500 }
  ]);

  const [servicios, setServicios] = useState([
    { id: 1, nombre: 'Servicio 1', precio: 100 },
    { id: 2, nombre: 'Servicio 2', precio: 200 },
    { id: 3, nombre: 'Servicio 3', precio: 300 },
    { id: 4, nombre: 'Servicio 4', precio: 400 },
    { id: 5, nombre: 'Servicio 5', precio: 500 }
  ]);




  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
      lo vamos a simular en el componente header
      */}




      <h2>Rutas con BrowserRouter</h2>
      {/* Link funciona como un 'a' de HTML. Todos los elementos de router-dom que usemos tienen que estar dentro de browserRouter */}
      <BrowserRouter>

        <Header />

        <Menu />


        <Routes>
          <Route path='/' element={<Home />} />
          {/* Tiene el path 'home' */}

          <Route path='/acerca' element={<Acerca />} />

          <Route path='/about' element={<Navigate to='/acerca' /> /*redirecciona*/} />
          {/* navigate para redirecciones */}


          <Route path='/contacto' element={<Contacto />} />

          <Route path='/productos' element={<Productos productos={productos} />} />

          <Route path='/productos/:id' element={<ProductoDetalle productos={productos} />} /> {/**url dinamica */}



          {/* subrutas */}
          <Route path='/servicios' element={<Servicios />}  >
            <Route index element={<ServiciosHome />} />
            {/* Con el atributo index le decimos que se renderice cuando sea /servicios y nada mas */}

            <Route path='/servicios/garantia' element={<ServiciosGarantia />} />
            <Route path='lista' element={<ServiciosLista servicios={servicios} />} />

            <Route path='politicas' element={<ServiciosPolitica />} />
            {/* En subrutas es lo mismo decirle  /ruta/subruta que decirle  'subruta' */}

            <Route path=':id' element={
              <>
                <ServiciosLista servicios={servicios} />
                <ServicioDetalle servicios={servicios} />
              </>
            } />

          </Route>

          <Route path="*" element={<Error404 />} />
          {/* importante que el error o el path por defecto sea la ultima */}

        </Routes>


      </BrowserRouter>




      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />



      {/* hacemos lo mismo que antes pero ahora con HashRouter. 
      El profe explico que es una mala practica usarlo, pero a veces es necesario. El problema que soluciona es que a veces el servidor/hosting entiende una ruta por ej abc/cde como una carpeta y un archivo dentro de ella, PERO en browserouter no existe tal orden de archivos, si no mas bien son rutas inventadas (Que funcionan en el front, y partiendo desde el inicio(home) digamos) Creo que es dependiendo el servidor(Ejemplo, en localhost anda una maravilla) */}
      <h2>Rutas con HashRouter</h2>
      <HashRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/about' element={<Navigate to='/acerca' />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos' element={<Productos productos={productos} />} />
          <Route path='/productos/:id' element={<ProductoDetalle productos={productos} />} />
          <Route path='/servicios' element={<Servicios />}  >
            <Route index element={<ServiciosHome />} />
            <Route path='/servicios/garantia' element={<ServiciosGarantia />} />
            <Route path='lista' element={<ServiciosLista servicios={servicios} />} />
            <Route path='politicas' element={<ServiciosPolitica />} />
            <Route path=':id' element={
              <>
                <ServiciosLista servicios={servicios} />
                <ServicioDetalle servicios={servicios} />
              </>
            } />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div >
    // Nunca repetir en un proyecto ambos tipos de Router (HashRouter, BrowseRouter)
  )
}

export default App

 
/*31/8/23
npm create vite@latest react-router-6 --template -react
jon mircha creamos una app de vite. Es para ver react router. Es parte de su curso pero es actualizacion. mayo 2023


cd react-router-6
  npm install      
  npm run dev 

Veremos react router 6 (mayo 2023) con vite



instalamos react router dom
npm install react-router-dom

npm rund ev es como el npm start en la app de react comun


Creamos carpeta components que puede ser un boton por ej. y por otro lado creamos pages que justamente son las paginas






Nunca olvidar que react es para spa (simple page application), se ejecuta todo en una pagina. 
react router simula que cambia la url manualmente, pero es como cuando escribirmos algo en la url pero no le damos enter.
Se puede hacer la prueba y tirará error 404 si le hacemos click a la url y luego le damos 
enter (ejemplo: localhost:8000/abc/estado)

El hash router no es mas que una url amigable. Es un hash. El hash en url significa que busca por ej un id o algo asi 
dentro de la misma pagina

*/ 