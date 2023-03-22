//Copiado de ejercicio anterior

//npm install -g json-server y se instala de manera global. despues agregué "json-server": "^17.0.1", en package.json

//en package.json creamos en "scripts" un script a modo de atajo para llamarlo en el terminal. en vez de poner todo eso (json-server --w etc), pongo el nombre(fake-api)
//npm run fake-api
//santos seria un endpoint. y el link que se genera es http://localhost:5000/santos



//PROYECTO ABANDONADO PORQUE ME HIZO RENEGAR MUCHO. LO MISMO VI LOS VIDEOS. DEL 65 APROX HASTA EL 71 INCLUIDO
//aca ya lo descontinue https://youtu.be/gDL7n3JmkBA?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&t=110 pero legaré hasta el 71 modo espectador




 



import React, { useEffect, useState } from 'react';
import { HashRouter, NavLink, Router, Route } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import Error404 from '../pages/Error404';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
    const [db, setDb] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    let api = helpHttp();
    let url = 'http://localhost:5000/santos';

    useEffect(() => {
        setLoading(true)
        api.get(url).then((res) => {
            //console.log(res)
            if (!res.err) {
                setDb(res)
                setError(null)
            } else {
                setDb(null);
                setError(res)
            }
            setLoading(false)
        })
        //get devuelve una promesa, entonces por eso le tiramos then. (si vemos en helpHttp, tiene 1 solo then, le falta el otro que seria el que pusimos aca arriba)
    }, []);// cuando está vacio este, significa que unicamente se ejecuta la primera vez

    const createData = (data) => { //aca va a llegar form desde CrudForm
        data.id = Date.now(); //creamos un id que es la fecha. se guarda en milisegundos
        let options = {
            body: data,
            headers: {
                "content-type": "application/json" //content type es el formato en el que espero recibir la data
            }
        }

        api.post(url, options).then((res) => {
            console.log(res)
            if (!res.err) {
                setDb([...db, res])//db es un array, entonces con esto pisamos su valor. res trae todo lo cargado en el post
                setError(null)
            } else {
                setError(res)
            }
        })
    };

    const updateData = (data) => { //data es los valores de los input texts
        let endpoint = url + "/" + data.id; //json server tiene eso de que si le pasas el id de algun objeto, te muestra ese objeto solo. sirve para actualizar y borrar  
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        }
        api.put(endpoint, options)
            .then((res) => {
                if (!res.err) {
                    let newData = db.map(el => el.id === data.id ? data : el); //esto hace lo mismo que la version no fetch. No se bien porque y si es necesario pero bueno. lo que hace es editar el registro y despues mostrarlo en la grilla ya actualizado 
                    setDb(newData); //la razon de este y del renglon de arriba es evitar hacer otro get. direcetamente lo hacemos localmente
                } else {
                    setError(res);
                }
            })

    };


    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);
        //ponemos window porque si no tira error, no lo encuentra react dentro de sus funciones. (dice que pasa con alert y algunas mas)
        if (isDelete) {
            let endpoint = url + "/" + id;
            let options = {
                headers: { "content-type": "application/json" },
            }
            api.del(endpoint, options)
                .then((res) => {
                    if (!res.err) {
                        let newData = db.filter((item) => item.id !== id); //explicacion de esto en updateData
                        setDb(newData);
                    } else {
                        setError(res);
                    }
                })
        } else {
            return
        }
    };

    return (
        <div>
            
            
            <HashRouter basename="santos"> {/*basename es el link(fragmento) que van a compartir todas tus rutas*/}
            {/**NO ME RENDERIZA EL HASH ROUTER PERO BUENO LO SIGO COMO PUEDO */}
               
                <header>
                    <h2>CRUD API con rutas</h2>
                    <nav>
                        <NavLink to="/" activeClassName="active">
                            Santos</NavLink> {/**no va a ser home solo si no que va a ser /santos ya que esta dentro del hash router */}

                        <NavLink to="/agregar" activeClassName="active" >
                            Agregar</NavLink>

                    </nav>
                </header>
                <Router> {/**simula switch */}
                    <Route exact path="/" component={<h2>Home de Santos</h2>}></Route>
                    <Route exact path="/agregar"  component={<CrudForm createData={createData} updateData={updateData}
                    dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />}/>
                    <Route exact path="/editar/:id" component={<CrudForm createData={createData} updateData={updateData}
                    dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}
                /> }/>
                    <Route path="*" children={<Error404/>}></Route>
                </Router>
            </HashRouter>

            <h2>CRUD APi</h2>
            {/**agregamos el article para hacerlo responsivo */}
            <article className="grid-1-2">

                
                {loading && <Loader /> /*si es verdadera, que inserte Loader*/}
                {error && <Message msg={`Error ${error.status} ${error.statusText}`} bgColor="#dc3545" /> /*si existe un error, que cargue message*/}
                {db && <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />} {/*si db tiene algo, que cargue tabla*/}
                {/**se le pasa deleteData y setDatatoEdit porque son las acciones de los botones de crudTableRow(hijo de CrudTable) */}
                {/**comunicacion componentes hijos a padres */}
                
            </article>
        </div>
    )
}

export default CrudApi; 

















//seguir aca: como se puede xd ya no anda pero bueno a seguir siguiendo el video
 
//Acordarse de levantar nppm run fake-api