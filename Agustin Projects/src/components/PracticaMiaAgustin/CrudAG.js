//Esta es la copia a partir del 9/5/23 para hacer con localstorage sin romper el otro











import React, { useEffect, useState } from 'react';
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
    let globalPrimeraCarga = true;








    useEffect(() => {
        async function fetchData() {
            let arrayComoCadena = await localStorage.getItem('clothes');

            //console.log("ARRAY COMO CADENA");
            //console.log(arrayComoCadena);

            if (!arrayComoCadena || arrayComoCadena == null || arrayComoCadena.length == 0) {
                // no existe el elemento localstorage clothes
                await setDbRopa([
                    {
                        "id": 1,
                        "apodo": "Jean negro corte chino",
                        "especial_para": "Vestir",
                        "elemento": "Pantalon"
                    }, {
                        "id": 2,
                        "apodo": "Pantalon rojo de river",
                        "especial_para": "Diario, Deportivo, Entrecasa",
                        "elemento": "Pantalon"
                    }, {
                        "id": 3,
                        "apodo": "Buzo gris adidas cuello enorme",
                        "especial_para": "Entrecasa, Diario",
                        "elemento": "Buzo"
                    }]);
                //alert("ENTRO AL IF");
                //await localStorageTest()
                //NO SE SI HACE FALTA LOCALSTORAGETEST 24/5/23
            } else {
                let localdb = await JSON.parse(arrayComoCadena);
                //console.log("LOCALDBSTORAGE");
                //console.log(localdb);
                await setDbRopa(localdb);
                //alert("no AL IF");
                //await localStorageTest()
            }


        }

        fetchData();

    }, []);
    //^DESCOMENTAR. 
    //De esta forma, la función fetchData() se ejecutará de manera asíncrona y se utilizará el await para esperar a que la promesa que devuelve localStorage.getItem se resuelva antes de continuar con el código




    // useEffect(() => {
    //     //if(!globalPrimeraCarga){
    //         setTimeout(() => {
    //             setSpinner(true)
    //             setError(null)
    //             localStorageTest()
    //             alert("creado en localstorage")
    //         }, 500);



    //     //}
    //     //globalPrimeraCarga =false;


    // }, [renderizarManual]);//significa que unicamente se ejecuta la primera vez (creo que era cuando esta vacio [])



    useEffect(() => {
        // Operaciones adicionales aquí (asincrónicas)
        // ...
        //alert("dbRopa se ha actualizado");
        if (dbRopa.length > 0) {
            renderizadoManual(6, true);
        } //es para que renderice solo cuando hay (es el error que pasa cuando apenas abris la pagina)

    }, [dbRopa]);




    const createData = (data) => { //aca va a llegar form desde CrudForm
        data.id = Date.now(); //creamos un id que es la fecha. se guarda en milisegundos

    };

    const updateData = (data) => { //data es los valores de los input texts
        let endpoint = url + "/" + data.id;


    };


    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);

    };




    const localStorageTest = () => {
        alert("NUNCA DEBERIA ENTRAR ACA")
        let arrayComoCadena = localStorage.getItem('clothes');

        if (!arrayComoCadena || arrayComoCadena == null || arrayComoCadena.length == 0) {
            setTimeout(() => {
                let arrayComoCadena = JSON.stringify([
                    {
                        "id": 1,
                        "apodo": "Jean negro corte chino",
                        "especial_para": "Vestir",
                        "elemento": "Pantalon"
                    }, {
                        "id": 2,
                        "apodo": "Pantalon rojo de river",
                        "especial_para": "Diario, Deportivo, Entrecasa",
                        "elemento": "Pantalon"
                    }, {
                        "id": 3,
                        "apodo": "Buzo gris adidas cuello enorme",
                        "especial_para": "Entrecasa, Diario",
                        "elemento": "Buzo"
                    }]);
                //console.log("voy a vargar en localstorage")
                //console.log(dbRopa)
                localStorage.setItem('clothes', arrayComoCadena);
                //alert("LOCALSTORAGE SETEADO ")
            }, 500);
        } else {

            //alert("aca deberia ir lo editado")
            //console.log("dbRopa NUEVO")
            //console.log(dbRopa)
        }



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





    // const editRopa = (idElemento, e) => {

    async function editRopa(idElemento, e) {
        //alert("editropa - Se va a editar el id " + idElemento)

        //console.log('%c dbRopa', 'background: red; color: white')
        //console.log(dbRopa)
        var vestimentaActual = dbRopa.filter(elem => elem.id === idElemento);


        //console.log('%c Vestimenta actual', 'background: red; color: white')
        //console.log(vestimentaActual[0])

        // await setRopaEditar(
        //     objEditRopa
        // )
        //  alert("Lo seteamos a 0")
        await setRopaEditar(
            vestimentaActual[0]
        )
    }


    const renderizadoManual = (idBorrado, addOrModif = false, del = false) => { //hay mejores formas de hacerlo


        setRenderizarManual("");

        setPrendaParamElem(""); //esto es al pedo, es para renderizar la columna del medio
        setPrendaParamApodo("");
        setPrendaParamOcasion("");


        // if (del) {
        //     setRopaActual(objRopaActual) //reinicia todo el componente 'resultado'
        //ahora lleve esto a modificar.js
        // }




        //alert("SE RENDERIZO MANUALMENTE")





        if (addOrModif) {
            //alert("·agregamos en localstorage")
            //console.log("·agregamos en localstorage")
            //console.log(dbRopa)

            localStorage.setItem('clothes', JSON.stringify(dbRopa))
        }





        //evitar la primera vuelta,


    }



    return (
        <>
            <h2>Ropero</h2>
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
                    <hr />
                    <div className="div-abm" >
                        <Modificar ropaEditar={ropaEditar} renderizadoManual={renderizadoManual} dbRopa={dbRopa} setDbRopa={setDbRopa} setRopaActual={setRopaActual} setRopaEditar={setRopaEditar} />
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











