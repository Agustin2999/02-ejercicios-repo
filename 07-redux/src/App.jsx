//npm create vite@latest 07-redux --template -react
//me descargue un par de cosas del github de mircha que dijo que descargaramos

//EMPEZAMOS CON REDUX
//es similar/casi igual  a lo que habiamos visto con useReducer etc
//redux recomienda separar actions, types, etc, en carpetas 
//tiene una organizacion similar a los providers de contextApi
//se recomienda en proyectos medianos/grandes

//https://github.com/jonmircha/youtube-react/commit/5707555bb7650a99b46b5ef2b6fee3da98bbfca8
//la libreria mas conocida y usada por react segun el profe

//hay que instalar: redux, react-redux y redux-devtools
//npm install redux react-redux redux-devtools (hice los 3 separados)

//no anduvo redux-devtools, asi que voy a ver como me las arreglo


import { Provider } from 'react-redux'
import './App.css'
import Contador from './componentes/Contador'
import ShoppingCart from './componentes/ShoppingCart'
import TeoriaRedux from './componentes/TeoriaRedux'
import store from './store' //como el archivo se llama index.js, no es necesario aclararlo

function App() {

  return (

    <Provider store={store}> {/**se autoimporta de la libreria react-redux, es para compartir el store */}


{/* es cuestion de gustos dice mircha, entre useReducer o Redux react */}

      <div style={{ textAlign: 'center' }}>
        <h1>Redux</h1>

        <ShoppingCart />
        <hr />
        <Contador /> {/**hacemos un contador simple */}

        <hr />
        <TeoriaRedux />
      </div>
    </Provider>

  )
}

export default App


-------------REACT--------------------
27/09/23
antes de seguir, repasar todo lo que es reducer que vimos. L

28/9/23
clase que viene repasar todo lo que fue useMemo como para refrescar. L
 
2/10/23
Tarea:
estudiar context api lo que hicimos.L
repasar todo lo que fue reducers.L
 
 
5/10/23
REPASO DE CONTEXT YA ESTA

9/10/23
VOY 
22m31s36
27m37s
49 total
11L+ Extra: 7m31s
reveer desde aca. https://youtu.be/maHSQEtECw8?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&t=972
TAREA: REpasar todos los archivos de Redux que hice y ver si le encuentro logica.



HOY 12/10: 2.43 HICE
+
28m24s
+30
+ extra12m30s
https://youtu.be/ttLxwYM4QBM?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&t=844





