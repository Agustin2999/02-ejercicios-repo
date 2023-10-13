


//28/9/23. Traemos el proyecto de crudApi viejo que ya hicimos antes en 02-ejercicios, pero ahora le vamos a hacer reducer. 
//Reemplazaremos el useState que controla la db por un useReducer. (solo haremos ese porque los demas tienen mas lio y algunos no se pueden ya que tienen useEffect, tienen busqueda a api )







//santos seria un endpoint. y el link que se genera es http://localhost:5000/santos

import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import { TYPES } from '../../actions/crudActions';
import { helpHttp } from '../../helpersCrudApi/helpHttp';
import { crudInitialState, crudReducer } from '../../reducers/crudReducer';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {

    //const [db, setDb] = useState(null)
    const [state, dispatch] = useReducer(crudReducer, crudInitialState)//no usaremos init
    const { db } = state;


    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    let api = helpHttp();
    let url = 'http://localhost:5000/santos';





    useEffect(() => {
        setLoading(true)
        api.get(url).then((res) => {

            if (!res.err) {
                //setDb(res)
                dispatch({ type: TYPES.READ_ALL_DATA, payload: res })//leemos todo lo que haya, payload va el objeto respuesta que es lo que encuentra en la api
                setError(null)
            } else {
                //setDb(null);
                dispatch({ type: TYPES.NO_DATA })
                setError(res)
            }
            setLoading(false)
        })
        //get devuelve una promesa, entonces por eso le tiramos then. (si vemos en helpHttp, tiene 1 solo then, le falta el otro que seria el que pusimos aca arriba)
    }, []);// cuando está vacio este, significa que unicamente se ejecuta la primera vez







    const createData = (data) => { //aca va a llegar form desde CrudForm
        data.id = Date.now();
        let options = {
            body: data,
            headers: {
                "content-type": "application/json" //content type es el formato en el que espero recibir la data
            }
        }

        api.post(url, options).then((res) => {
            console.log(res)
            if (!res.err) {
                //  setDb([...db, res])//db es un array, entonces con esto pisamos su valor. res trae todo lo cargado en el post
                dispatch({ type: TYPES.CREATE_DATA, payload: res }) //res es data pero procesado digamos
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
                    //let newData = db.map(el => el.id === data.id ? data : el); //esto hace lo mismo que la version no fetch. No se bien porque y si es necesario pero bueno. lo que hace es editar el registro y despues mostrarlo en la grilla ya actualizado 
                    //setDb(newData); //la razon de este y del renglon de arriba es evitar hacer otro get. direcetamente lo hacemos localmente

                    //haremos todo en el reducer
                    dispatch({ type: TYPES.UPDATE_DATA, payload: data })

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
                        //let newData = db.filter((item) => item.id !== id);
                        // setDb(newData);
                        //nos llevamos todo a reducer

                        dispatch({ type: TYPES.DELETE_DATA, payload: id })
                    } else {
                        setError(res);
                    }
                })
        } else {
            return
        }
    };














    //'Creo' que no cambiamos nada de todo lo de aca abajo
    return (
        <div>
            <h2>CRUD APi</h2>

            <article className="grid-1-2">

                <CrudForm createData={createData} updateData={updateData}
                    dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}
                /> {/*se le pasa setDataToEdit para poder ponerlo en null cuando limpiamos el formulario (otra cosa es cuando se lo pasamos a CrudTable que ahi sí hace acciones)*/}
                {loading && <Loader />}
                {error && <Message msg={`Error ${error.status} ${error.statusText}`} bgColor="#dc3545" /> /*si existe un error, que cargue message*/}
                {db && <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />} {/*si db tiene algo, que cargue tabla*/}
                {/**se le pasa deleteData y setDatatoEdit porque son las acciones de los botones de crudTableRow(hijo de CrudTable) */}
                {/**comunicacion componentes hijos a padres */}

            </article>
        </div>
    )
}

export default CrudApi; 