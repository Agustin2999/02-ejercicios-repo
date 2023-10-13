//copiado y pegado desde el github del profe
//quise descargar directo pero no pude no se xq. Tambien descargue a mano imagenes del github del profe que tambien dijo que lo hicieramos. Estan en la carpeta assets


import reduxImg from "../assets/redux.jpg";
import reduxGif from "../assets/redux.gif";

const TeoriaRedux = () => {
  return (
    <div>
      <h2>Teoría y Conceptos</h2>
      <ul>
        <li>
          <b>
            <i>Store</i>
          </b>
          , contiene el <i>state</i>, (uno por aplicación).
        </li>
        <li>
          <b>
            <i>Dispatch</i>
          </b>
          , ejecuta una acción que actualizará el <i>state</i>.
        </li>
        <li>
          <b>
            <i>Action</i>
          </b>
          , objeto <i>JS</i> con 2 propiedades: <i>type</i> y <i>payload</i>{" "}
          (datos).
        </li>
        <li>
          <b>
            <i>Subscribe</i>
          </b>
          , es un manejador de eventos para el <i>state</i>.
        </li>
        <li>
          <b>
            <i>Reducers</i>
          </b>
          , son funciones que gestionan los <i>actions</i>.
        </li>
      </ul>
      <img width="600px" src={reduxImg} alt="Diagrama Redux" />
      <img width="600px"  src={reduxGif} alt="Diagrama Redux Animado" />
    </div>
  );
};

export default TeoriaRedux;