import React from 'react'; //el profe dice que desde la version 17 no es necesario en app.js ya que hereda de no se donde, qsy. por las dudas se lo agrega
import CrudApi from './components/CrudApi';
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";
import PracticaMiaAgustin from "./components/PracticaMiaAgustin/CrudAG";
/**
 *  frase de jon mircha: divide y venceras,
 *                        divide y reutilizarás
 */
function App() {
  return (
    <>
      <h1>Ejercicios React</h1>
      <PracticaMiaAgustin />{/*Ejercicio de practica para ver como voy*/}




      <hr />
      {/* <SongSearch /> */}
      <hr />
      {/*<CrudApi />*simulamos api en json server*/}
      <hr />
       {/*<CrudApp />*simulamos api en el mismo codigo de js */}
      <hr />
    </>
  );
}

export default App;







//cuando hacia este proyecto no se recargaba sola la pagina, calculo era por algo de los inputs. tuve que agregarle el archivo .env, viendo un video de youtube