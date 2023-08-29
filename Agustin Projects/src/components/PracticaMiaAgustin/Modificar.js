//COPIA PARA HACER CON LOCALSTORAGE. MISMA HISTORIA QUE CON CRUDAG
































import React, { useEffect, useState } from 'react';
import './estilos.css'
import { helpHttp } from '../../helpers/helpHttp.js';



const estiloFS = {
    //"margin-right": "40%",
    width: "100%"

}
const estiloForm = {
    textAlign: "right"
}
const estiloIDPrenda = {
    textAlign: "center",
    fontWeight: "bold"
}

const estiloDivBotones = {
    marginTop: "1em"
}

const divPadreFS = {
    textAlign: "center"
    // ,
    // marginLeft: 100,
    // marginRight: 100

}


const casiInput = {
    height: '5em',
    width: '13.2em',
    resize: 'none',
    fontFamily: 'Arial'
}



const negrita = {
    fontWeight: 'Bold'
}

const formInicial = {
    id: "",
    apodo: "",
    especial_para: "",
    elemento: ""
}




const Modificar = ({ ropaEditar, renderizadoManual, setBdTestLocalStorage, dbRopa, setDbRopa, setRopaActual,setRopaEditar }) => {

    const { id, apodo, especial_para, elemento } = ropaEditar;
    const [formulario, setFormulario] = useState(formInicial);
    const [textoBoton, setTextoBoton] = useState("Agregar");
    const [textoTitulo, setTextoTitulo] = useState("Agregar");
    const [textoLinkBorrar, setTextoLinkBorrar] = useState("");

    let api = helpHttp();

    useEffect(() => {
        //alert("pepino " + id)
        





        setFormulario({
            id,
            apodo,
            especial_para,
            elemento
        })



        if (id != null & id != "") {
            setTextoBoton("Modificar");
            setTextoTitulo("Id Prenda: " + id); //formulario.
            setTextoLinkBorrar("Eliminar");
            //alert("seteamos el formulario de edicion")
        } else {
            //alert("limpiamos formulario de edicion, para poder agregar")
            setFormulario({
                ...formulario,
                id: "..."
            })
            setTextoTitulo("Agregar");
            setTextoLinkBorrar("");

        }
    }, [id]);

    const limpiar = () => {
        setFormulario(
            {
                ...formInicial,
                id: "..."
            }
        )

        //agregado 30/5/23
          setRopaEditar(
            {
                id: "",
                apodo: "",
                especial_para: "",
                elemento: ""
            }
            )


        setTextoBoton("Agregar");
        setTextoTitulo("Agregar");
        setTextoLinkBorrar("");

    }

    const handleReset = (e) => {
        e.preventDefault();
        limpiar();
    }

    async function handleSubmit(e) {   //lo converti en asyncrono. con esto funcionaaa sii. No me cargaba en el localstorage lo agregado o modificado
        e.preventDefault();

        if (!window.confirm("Si modifica o agrega una prenda, la vestimenta actual volvera a su estado vacio inicial. Desea continuar?")) {
            return;
        }

        if (textoBoton == "Agregar") {
            // Aca agregar
            // alert("Se agrego")
            // let url = 'http://localhost:5000/vestimenta';

            let ultimoId = await dbRopa.sort((a, b) => b.id - a.id);

            /* "a" y "b" representan dos elementos del array que se están comparando en cada iteración.*/

            /*Este código utilizará la función de comparación para ordenar los objetos en el array 
            ArrayPepe según el valor de la propiedad cde. Al restar a.cde de b.cde, se obtiene un 
            resultado negativo si b.cde es mayor que a.cde, lo que provoca que b se coloque antes 
            que a en el orden resultante.*/


            // antes de 23/5/23
            // let options = {
            //     headers: { "content-type": "application/json" },
            //     body: {
            //         id: ultimoId[0].id + 1,
            //         apodo: formulario.apodo,
            //         especial_para: formulario.especial_para,
            //         elemento: formulario.elemento,
            //     },
            // };

            // //EL DE MODIFICAR pero ahora lo modifique para 'agregar'
            let options = dbRopa.concat({
                id: ultimoId[0].id + 1,
                apodo: formulario.apodo,
                especial_para: formulario.especial_para,
                elemento: formulario.elemento,
            });


            await setDbRopa(options)







            //setBdTestLocalStorage([...clothesActual, options.body]);

            //await setDbRopa(  [...dbRopa, options.body]);
            // await renderizadoManual(formulario.id, true);
        }



















        if (textoBoton == "Modificar") {



            /*En el caso a) se está creando una copia del array dbRopa utilizando el operador spread ..., lo cual crea un nuevo array con los mismos elementos del array original. Esto significa que cualquier modificación que se haga en dbRopaReal no afectará al array original dbRopa.
    
    En el caso b) se está asignando el mismo array dbRopa a la variable dbRopaReal, lo cual significa que ambas variables apuntarán al mismo array en memoria. Esto significa que cualquier modificación que se haga en dbRopaReal también se reflejará en el array original dbRopa.
    
    Por lo tanto, si deseas crear una copia del array dbRopa para trabajar con él de forma independiente, debes utilizar el operador spread ... para crear una copia, como en el caso a).*/






            //editar db ropa actual
            //let dbRopaReal = [...dbRopa];

            //eso es traido del useState.  buscar por ese id 

            let nuevoDbRopa = dbRopa.map((ropa) => {
                if (ropa.id == formulario.id) {
                    //alert("Se va a editar el id" + formulario.id)
                    ropa.apodo = formulario.apodo;
                    ropa.especial_para = formulario.especial_para;
                    ropa.elemento = formulario.elemento;
                }
                return ropa
            })



            await setDbRopa(nuevoDbRopa)



            // let url = 'http://localhost:5000/vestimenta/' + formulario.id;

            // let options = {
            //     headers: { "content-type": "application/json" },
            //     body: {
            //         'id': formulario.id,
            //         'apodo': formulario.apodo,
            //         'especial_para': formulario.especial_para,
            //         'elemento': formulario.elemento,
            //     }
            // }

            // api.put(url, options).then((res) => {
            //     if (!res.err) {
            //         //salio todo bien
            //         alert("Se modifico todo")
            //         renderizadoManual(formulario.id);//es para renderizar el ropero manualmente(que haga de nuevo el get)
            //         limpiar();
            //     } else {
            //         alert("Lo sentimos, no se pudo actualizar")
            //         //salio todo mal
            //     }
            // })


            // await renderizadoManual(formulario.id, true);//es para renderizar el ropero manualmente(que haga de nuevo el get)
            // limpiar(); no es necesario 29/5/23


        }

        //reiniciamos
        limpiar();

    }








    const handleChange = (e) => {
        e.preventDefault();






        if (e.target.id == "elemento") {// si es elemento, le ponemos la primera letra mayuscula

            setFormulario({
                ...formulario,
                [e.target.id]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            })
        } else {
            setFormulario({
                ...formulario,
                [e.target.id]: e.target.value
            })
        }




    }





    async function handleEliminar(e) {
        e.preventDefault();


        if (formulario.id >= 0 & window.confirm("Si elimina una prenda, la vestimenta actual volvera a su estado vacio inicial. Desea eliminar '" + formulario.apodo + "' ?")) {
            //Aca eliminar

            //let url = 'http://localhost:5000/vestimenta/' + formulario.id;

            // api.del(url).then((res) => {
            //     if (!res.err) {
            //         //salio todo bien
            //         //"ya se borro" 

            //         setDbRopa.filter((r) => {
            //             if (r.id != formulario.id) return r 
            //         })

            //         //renderizadoManual(formulario.id);//es para renderizar el ropero manualmente(que haga de nuevo el get)
            //         limpiar();
            //     } else {
            //         alert("Lo sentimos, no se pudo eliminar")
            //         //salio todo mal
            //     }
            // })



            let nuevoDbRopa = dbRopa.filter((r) => {
                if (r.id != formulario.id) return r
            });

            //console.log("miloo")
            //console.log(nuevoDbRopa)
            //alert(formulario.id)
            await setDbRopa(nuevoDbRopa)
            //alert("jaja")


            setRopaActual(
                {
                    campera: "",
                    remera: "",
                    pantalon: ""
                }
            ) //reinicia todo el componente 'resultado'




            //renderizadoManual(formulario.id);//es para renderizar el ropero manualmente(que haga de nuevo el get)
            await limpiar();
        }
    }


    /*
                                            "id": 2,
                                            "apodo": "Pantalon rojo de river",
                                            "especial_para": "Diario, Deportivo, Entrecasa",
                                            "elemento": "Pantalon"
    */
    return (
        <>

            <div style={divPadreFS}>
                <fieldset style={estiloFS}>
                    <legend>Agregar/Modificar</legend>
                    <form style={estiloForm} onSubmit={handleSubmit} onReset={handleReset}>
                        <p id="idPrenda" style={estiloIDPrenda}>{textoTitulo}
                            <a href="#" onClick={handleEliminar} >{textoLinkBorrar}</a>
                        </p>
                        <label for="apodo">Apodo:</label>
                        <input type="search" id="apodo" name="apodo" onChange={handleChange} value={formulario.apodo} autocomplete="off" />
                        <br /><br />
                        <label for="elemento">Elemento:</label>
                        <input type="search" id="elemento" name="elemento" onChange={handleChange} value={formulario.elemento} autocomplete="off" />
                        <br /><br />





                        <div className="roContainerTxtArea" >
                            <label class="labelOcasion2" for="especial_para"  >Ocasión:</label>
                           
                            <textarea type="search" className="roTxtArea" name="ocasionNoUsado" id="especial_para" onChange={handleChange} value={formulario.especial_para} autocomplete="off" style={casiInput}></textarea>
                        </div>
                        <br /><br />

                        <div style={estiloDivBotones}>

                            <input type="submit" value={textoBoton} />
                            <input type="reset" value="Limpiar" />
                        </div>
                    </form>
                </fieldset >
            </div>
        </>

    )

}
export default Modificar