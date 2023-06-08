//este es el original pero lo modifique un PureComponent. 
//hasta el 9/5/23. que decidi separarlos y hacer por otro lado el test con local storage






























//npm run dbAG-api para levantar el json server 
//http://localhost:5000/vestimenta

import React, { PureComponent, useEffect, useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp.js'; //entre llaves porque no esta exportada por defecto
import Fila from './Fila';
import './estilos.css';
import FormularioAG from './FormularioAG';
import Resultado from './Resultado.js';
import Modificar from './Modificar.js';

var objRopaActual = {
    campera: "",
    remera: "",
    pantalon: ""

}

var objEditRopa = {
    id: "",
    apodo: "",
    especial_para: "",
    elemento: ""
}


const CrudAG = () => {
    const [dbRopa, setDbRopa] = useState([]);
    const [dataParaEditar, setDataParaEditar] = useState(null);
    const [error, setError] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [prendaParamElem, setPrendaParamElem] = useState("");
    const [prendaParamApodo, setPrendaParamApodo] = useState("");
    const [prendaParamOcasion, setPrendaParamOcasion] = useState("");
    const [cualInput, setCualInput] = useState("");
    const [ropaActual, setRopaActual] = useState(objRopaActual);
    const [ropaEditar, setRopaEditar] = useState(objEditRopa);

    const [renderizarManual, setRenderizarManual] = useState(null);//para renderizar manualmente



    let api = helpHttp();
    let url = 'http://localhost:5000/vestimenta';


    //DESCOMENTAR. test
    const [bdTestLocalStorage, setBdTestLocalStorage] = useState([]);
 
   
    useEffect(() => {
               
        let arrayComoCadena = localStorage.getItem('clothes');
         
        if ( !arrayComoCadena  ||  arrayComoCadena ==null  || arrayComoCadena.length == 0) { //no existe el elemento localstorage clothes
            
            setBdTestLocalStorage([
                {
                    "id": 1,
                    "apodo": "Jean negro corte chino",
                    "especial_para": "Vestir",
                    "elemento": "Pantalon"
                },
                {
                    "id": 2,
                    "apodo": "Pantalon rojo de river",
                    "especial_para": "Diario, Deportivo, Entrecasa",
                    "elemento": "Pantalon"
                },
                {
                    "id": 3,
                    "apodo": "Buzo gris adidas cuello enorme",
                    "especial_para": "Entrecasa, Diario",
                    "elemento": "Buzo"
                }
            ])
            alert("se reinicio la base de datos")
        }else{
            
            let  localdb = JSON.parse(arrayComoCadena);
            setBdTestLocalStorage(localdb);
           
        }

        alert("SETBD TEST DESDE 0")
        setDbRopa(bdTestLocalStorage)

    }, []);
    //^DESCOMENTAR. 





    useEffect(() => {
        setSpinner(true)

        //DESCOMENTAR. produccion  2/5/23
        // api.get(url).then((res) => {
        //     console.log("lo que trae")
        //     console.log(res)
        //     if (!res.err) {
        //         setDbRopa(res.sort(function () { return Math.random() - 0.5 }))
        //         setError(null)
        //         //salio todo bien
        //     } else {
        //         setDbRopa(null);
        //         setError(res)
        //         //salio todo mal
        //     }
        //     setSpinner(false)
        // })
        //^DESCOMENTAR 

        //DESCOMENTAR. para test  2/5/23
        setDbRopa(bdTestLocalStorage)
        setError(null)
        localStorageTest()
        //^DESCOMENTAR 
        alert("useefect spinner")




    }, [renderizarManual]);//significa que unicamente se ejecuta la primera vez (creo que era cuando esta vacio [])



    // const createData = (data) => { //aca va a llegar form desde CrudForm
    //       data.id = Date.now(); //creamos un id que es la fecha. se guarda en milisegundos
    //     let options = {
    //           body: data,
    //           headers: {
    //              "content-type": "application/json" //content type es el formato en el que espero recibir la data
    //          }
    //   }

    //     api.post(url, options).then((res) => {
    //         console.log(res)
    //         if (!res.err) {
    //             setDb([...db, res])//db es un array, entonces con esto pisamos su valor. res trae todo lo cargado en el post
    //             setError(null)
    //         } else {
    //             setError(res)
    //         }
    //     })
    // };

    // const updateData = (data) => { //data es los valores de los input texts
    //     let endpoint = url + "/" + data.id; //json server tiene eso de que si le pasas el id de algun objeto, te muestra ese objeto solo. sirve para actualizar y borrar  
    //     let options = {
    //         body: data,
    //         headers: { "content-type": "application/json" },
    //     }
    //     api.put(endpoint, options)
    //         .then((res) => {
    //             if (!res.err) {
    //                 let newData = db.map(el => el.id === data.id ? data : el); //esto hace lo mismo que la version no fetch. No se bien porque y si es necesario pero bueno. lo que hace es editar el registro y despues mostrarlo en la grilla ya actualizado 
    //                 setDb(newData); //la razon de este y del renglon de arriba es evitar hacer otro get. direcetamente lo hacemos localmente
    //             } else {
    //                 setError(res);
    //             }
    //         })

    // };


    // const deleteData = (id) => {
    //     let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);
    //     //ponemos window porque si no tira error, no lo encuentra react dentro de sus funciones. (dice que pasa con alert y algunas mas)
    //     if (isDelete) {
    //         let endpoint = url + "/" + id;
    //         let options = {
    //             headers: { "content-type": "application/json" },
    //         }
    //         api.del(endpoint, options)
    //             .then((res) => {
    //                 if (!res.err) {
    //                     let newData = db.filter((item) => item.id !== id); //explicacion de esto en updateData
    //                     setDb(newData);
    //                 } else {
    //                     setError(res);
    //                 }
    //             })
    //     } else {
    //         return
    //     }
    // };




    const localStorageTest = () => {
        let arrayComoCadena = JSON.stringify(bdTestLocalStorage);
 
        
        localStorage.setItem('clothes', arrayComoCadena);



    }





    const ponerseRopa = (idElemento, e) => {
        var vestimentaActual = dbRopa.filter(elem => elem.id === idElemento)
        var prenda = "";
        if (vestimentaActual[0].elemento.toUpperCase() == 'BUZO') {
            prenda = 'Campera'
        } else {
            prenda = vestimentaActual[0].elemento;
        }
        setRopaActual({
            ...ropaActual,
            [prenda.toLowerCase()]: vestimentaActual[0].apodo
        })
    }





    const editRopa = (idElemento, e) => {
        var vestimentaActual = dbRopa.filter(elem => elem.id === idElemento);
        setRopaEditar(
            vestimentaActual[0]
        )
    }


    const renderizadoManual = (idBorrado) => { //hay mejores formas de hacerlo
        setRenderizarManual("");

        setPrendaParamElem(""); //esto es al pedo, es para renderizar la columna del medio
        setPrendaParamApodo("");
        setPrendaParamOcasion("");


        setRopaActual(objRopaActual) //reinicia todo el componente 'resultado'
    }



    return (
        <>
            <h2>Agustin</h2>
            {/* <table>
    <tbody>
        <tr>
            <td>

            </td>
        </tr>
    </tbody>
</table> */}
            <div className="div-padre">
                <div className="div-col div-col-formulario">
                    <FormularioAG setPrendaParamElem={setPrendaParamElem} setPrendaParamApodo={setPrendaParamApodo}
                        setPrendaParamOcasion={setPrendaParamOcasion}
                        setCualInput={setCualInput}
                        renderizadoManual={renderizadoManual}
                    />
                    <div className="div-abm" >
                        <Modificar ropaEditar={ropaEditar} renderizadoManual={renderizadoManual} setBdTestLocalStorage={setBdTestLocalStorage} />
                    </div>
                </div>
                <div className="div-col">
                    <div className="subtitulo">Ropero</div>
                    <div className="div-col-scroll" >
                        {/* <div id="divRopero">
                            </div>   */}
                        {
                            prendaParamElem || prendaParamApodo || prendaParamOcasion ?
                                dbRopa.filter(elem =>
                                    elem.elemento.toUpperCase().includes(prendaParamElem.toUpperCase())
                                    &&
                                    elem.apodo.toUpperCase().includes(prendaParamApodo.toUpperCase())
                                    &&
                                    (prendaParamOcasion && prendaParamOcasion.toLowerCase() != "cualquiera" ? elem.especial_para.toUpperCase().includes(prendaParamOcasion.toUpperCase())
                                        : elem.especial_para)
                                )
                                    .map((elemento) => (
                                        <Fila prenda={elemento} ponerseRopa={ponerseRopa} editRopa={editRopa} />

                                    ))
                                :
                                (dbRopa.map((elemento) => ( //busqueda general sin filtro
                                    <Fila prenda={elemento} ponerseRopa={ponerseRopa} editRopa={editRopa} />
                                )))
                        }
                    </div>
                </div>
                <div className="div-col" id="resultado">
                    <div className="divResContainer">
                        <div className="subtitulo">Vestimenta actual</div>
                        <Resultado elemento={"campera"} prenda={ropaActual.campera} />
                        <Resultado elemento={"remera"} prenda={ropaActual.remera} />
                        <Resultado elemento={"pantalon"} prenda={ropaActual.pantalon} />

                    </div>

                </div>
            </div>


        </>
    )
}

export default CrudAG;











 