import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'
import CrudApi from './components/CrudApi'
import { CrudProvider } from './context/CrudContext'

//Context Api. Video 75 jon mircha

//Vamos a hacer la app sin Context, para luego poder hacerla CON context y ver la diferencia

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Context API</h1>
      <a href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer">
        Documentacion
      </a>
      <hr />
      {/* Vamos a estar reutilizando cosas que copie y pegue de 02-ejercicios. crud api. usaremos json server como usamos en ese proyecto */}
      {/* Fue un copiar y pegar los archivos como dijo el profe. y anduvo de una (que limpieza), lo unico le tuve que cambiar la extension de js a jsx */}

      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      {/* npm run fake-api para levantar la base de datos json server.http://localhost:5000/santos */}

      <hr />
      <MyPageContext />
      <hr />
      <MyPage />





    </div>
  )
}


/*
Context API, es como un modulo en visual basic. Es para que las 'Variables de estado global' no tengan que pasar de abuelo a padre y a hijo, si no directamente consultar el context. Hay que usar con cautela y solo si es necesario


A este aunque jonmircha lo hizo con createreact app, yo lo hice con vite
npm create vite@latest 05-react-context --template -react


cd 05-react-context
  npm install      
  npm run dev */

export default App
