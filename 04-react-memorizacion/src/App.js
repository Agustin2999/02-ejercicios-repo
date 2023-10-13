//import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import Contador from "./components/Contador";

/*que es memorizacion? Cachear componentes y funciones para que cuando se este renderizando un componente que tenga dentro componentes que no se modificaron, que permanezcan como estaban  y no se vuelvan a renderizar al pedo. Hay veces que vale la pena hacerlo y hay veces que no*/

function App() {
  return (
    <div>
      <h1>Memorizacion en React</h1>
      <hr />
      <h2>Teoria</h2>
      <h3>
        <a href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank" rel="noreferrer" >
          memo
          {/* Memo lo que hace basicamente es dejar en cache elementos que se renderizan una y otra vez pero no cambian de valor. Es decir, es una manera de ahorrar energia incluso renderizando */}
        </a>
      </h3>

      <ul>
        <li>Se encarga de memorizar un componente,</li>
        <li>Lo vuelve a memorizar al momento de que sus <b>props </b> cambian.</li>
        <li>Evita re-renderizados.</li>
        <li>Hay que evitarlo en la medida de lo posible, pues podría ser más costosa la tarea de memorización que el re-renderizado del componente.</li>
        <li>
          Úsalo, cuando:
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista.</li>
            <li>Llamamos datos de APIs.</li>
            <li>Un componente se vuelve muy pesado.</li>
            <li>Salen alertas de rendimiento en la consola.</li>
          </ul>
        </li>
      </ul>

      <hr />





















      <h3>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback"
          target="_blank" rel="noreferrer">
          useCallback
        </a>
      </h3>

      <ul>
        <li>Memoriza una funcion, para no volverla a definir en cada render.</li>
        <li>Úsalo siempre que se pase una funcion como <b>prop</b> a un componente memorizado.</li>
        <li>Úsalo siempre que se pase una funcion como parametro de un efecto.(mas adelante lo veremos)</li>
      </ul>








      <hr />
      <h3>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usememo"
          target="_blank" rel="noreferrer">
          useMemo
        </a>
      </h3>

      <ul>
        <li>Memoriza un valor calculado, es decir, el resultado de una funcion.</li>
        <li>Genera propiedades computadas.</li>
        <li>Úsalo en procesos pesados.</li>
      </ul>






      <hr />
      <Contador />
    </div>
  );
}

export default App;

//por lo general estos no se usan a menos que la app este lenta y llegue la pregunta: "che, como podemos hacer para acelerar esto?"











//aprender nuevo framework(agosto 2023):
// vite o parcel react

// stackblitz editor de codigo react
// codesandbox
// replit.com
/*
el profe recomienda vite para seguir el curso suyo 
si no next, o remix aunque este es muy pesado al principio
este no tiene server side rendering. no se que es pero creo que es para backend. el profe dijo que vite es para frontend (client rendering)
lo que hacia el profe cuando trabajaba era hacer una api con php o node, y luego consumia esa api con react


PESO DE LAS CARPETAS BUILD(simples). PRUEBA DEL PROFE
VITE - CLIENT SIDE RENDERING 0.15MB
NEXTJS - SERVERSIDERENDERING 0.5MB
REMIX SERVERSIDERENDERING 0.25
(LAS QUE TIENEN SERVERSIDERENDERING CREO TAMBIEN TIENEN PARA FRONT)

NO RECOMENDABLE:
PARCEL -  4.5MB -1.9MB
GATSBY 1.2MB.


QUE HACER EN LA PROXIMA CLASE: IR VIDEO POR VIDEO DE LA LISTA DE JON MIRCHA,VER LOS QUE NO VI,
 Y LUEGO SEGUIR A DONDE DEJE QUE CREO ES MEMORIZACION.
PROXIMO PROYECTO DEBERIA HACERLO CON UN FRAMEWORK DE REACT. TAMBIEN DEBERIA APRENDER MAS JS
 
31/8/23: creé un nuevo proyecto y voy a estar trabajando ahi. React router 6. es un video de jonmircha actualizacion mayo 2023*/