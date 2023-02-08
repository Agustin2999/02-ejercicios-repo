import { Route} from "react-router"



// const PrivateRoute = (props) => {
//     return (
//       <>
    
//     <Route exact={props.exact} path={props.path} component={props.component} />
//         {/**lo de arriba es lo mismo que decirle: */}
//         <Route {...props} /> {/**spread operator. y como las propiedades respetan el mismo nombre que la prop, lo hace automatico */}
//         </>
//     )

// }


//Simular Autenticacion
let auth;
auth = null;
 






const PrivateRoute = ({component: Component, ...restoPropiedades}) => {
  {/**traigo el componente aparte para poder diferenciarlo */}
  {/**component:Component lo que hago es darle un alias */}
  return (
    <Route {...restoPropiedades}>
      <p>asd</p>
      {/**si esta logueado va a dashboard, si no va a login */}
    {/* {auth ? <Component/> : <Redirect to="/login"/> } me tira error porque REdirect no existe mas */}
    </Route>
 
  )

}

//comentario del profe: tiene que haber estrategia desde el backend para esto de las rutas. por ej si el usuario entra directo a la pagina "estado" salteandose la "home" va a tirar error
/*
se llama hash router
http://localhost:3000/usuario/jonmircha aca le decimos que hay un objeto jonmircha dentro de usuario dentro de localhost
http://localhost:3000/#/usuario/jonmircha aca le decimos que dentro de localhost esta usuario/jonmircha, pero que se siga parando en localhost. es como decirle que todo esta en un mismo archivo

*/ 





export default PrivateRoute