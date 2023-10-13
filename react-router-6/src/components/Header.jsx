//logos de la pagina por default
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
//si la direccion es ./ quiere decir: busca en esta carpeta actual
//si no tiene punto, y tiene asi '/'  significa vas a la raiz (que es carpeta public) sin importar donde estés parado actualmente

import { useState } from 'react'

export function Header() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <div>
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
    </header>
  )
}
