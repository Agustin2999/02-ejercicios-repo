import React from 'react';
import PracticaMiaAgustin from "./components/PracticaMiaAgustin/CrudAG";
import CalculoDinero from "./components/CalculoDineroReparto/CalculoDineroIndex";
function App() {
  return (
    <div>
      <CalculoDinero/>
      {/* importe bootsstrap en index.html */}
      
      {/* <PracticaMiaAgustin /> DESCOMENTAR */}
      
      
    </div>
  );
}

export default App;
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