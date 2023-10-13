import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*
useReducer. es una alternativa a use State
tiene algo similar a redux. pero redux es una libreria externa

una funcion reductora (si nos vamos a programacion funcional) es una funcion que le das un input y te devuelve un output. si el input no cambia, el output sera siempre el mismo. No afecta variables globales (que esten fuera de la funcion). Son funciones aisladas por asi decirlo
dentro de una funcion reductora no se puede usar useEffect ni peticiones a api

*/


import Contador from "./components/Contador"
import ContadorMejorado from './components/ContadorMejorado'
import ShoppingCart from './components/ShoppingCart'

import './index.css'
import CrudApi from './components/CrudApiConReducer/CrudApi'

function App() {


  return (
    <>
      <div>
        <h1>useReducer</h1>

        <hr />
        <CrudApi /> {/**proyecto viejo de 02-ejercicios, ahora lo haremos con useReducer */}
        {/* tenemos que agregar en package.json el comando para ejecutar la db.json de json server
        en scripts: "fake-api" : "json-server --watch src/apiCrudApi/db.json --port 5000" 
        Luego para ejecutar es: npm run fake-api
        Vamos a manejar por reducer solo la variable que controla db (db.json) antes era useState y ahora reemplazaremos con reducer
        */}

        <hr />
        <ShoppingCart />

        <hr />
        <ContadorMejorado />
        <hr />
        <Contador />
      </div>

    </>
  )
}


export default App
