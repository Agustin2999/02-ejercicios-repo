/** 

//https://reactrouter.com/en/main
npx create-react-app react-router

cd react-router

npm install react-router-dom */

import ConceptosBasicos from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";


function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer">
        Documentacion
      </a>
      <hr />
      {/* <SongSearch /> * copiado de proyecto anterior */}
      <hr />
      <CrudApi /> {/**copiado de proyecto anterior. npm run fake-api */} 



      <hr />

      {/* <ConceptosBasicos /> */}
    </div>
  );
}

export default App;
//copiamos muchos archivos del proyecto anterior para poder reutilizarlos

