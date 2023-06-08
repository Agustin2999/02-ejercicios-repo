//misma historia que con crudAG. Hice una copia para resguardar lo que habia hecho antes con json server





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



let noVisible = {
    // visibility:'Hidden'
}


const Modificar = ({ ropaEditar, renderizadoManual, setBdTestLocalStorage }) => {

    const { id, apodo, especial_para, elemento } = ropaEditar;
    const [formulario, setFormulario] = useState(formInicial);
    const [textoBoton, setTextoBoton] = useState("Agregar");
    const [textoTitulo, setTextoTitulo] = useState("Agregar");
    const [textoLinkBorrar, setTextoLinkBorrar] = useState("");

    let api = helpHttp();

    useEffect(() => {
        setFormulario({
            id,
            apodo,
            especial_para,
            elemento
        })
        if (id != null & id != "") {
            setTextoBoton("Modificar");
            setTextoTitulo("Id Prenda: " + formulario.id);
            setTextoLinkBorrar("Eliminar");

        } else {
            setFormulario({
                ...formulario,
                id: "..."
            })
            setTextoTitulo("Agregar");
            setTextoLinkBorrar("");

        }
    }, [id]);

    const limpiar = () => {
        setFormulario({
            ...formInicial,
            id: "..."
        })
        setTextoBoton("Agregar");
        setTextoTitulo("Agregar");
        setTextoLinkBorrar("");
    }

    const handleReset = (e) => {
        e.preventDefault();
        limpiar();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!window.confirm("Si modifica o agrega una prenda, la vestimenta actual volvera a su estado vacio inicial. Desea continuar?")) {
            return;
        }

        if (textoBoton == "Agregar") {
            //Aca agregar
            alert("Se agrego")
            let url = 'http://localhost:5000/vestimenta';

            let options = {
                headers: { "content-type": "application/json" },
                body: {
                    'apodo': formulario.apodo,
                    'especial_para': formulario.especial_para,
                    'elemento': formulario.elemento,
                }
            }

            //DESCOMENTAR. produccion 2/5/23
            // api.post(url, options).then((res) => {
            //     if (!res.err) {
            //         //salio todo bien
            //         alert("Se agrego todo")
            //         renderizadoManual(formulario.id);//es para renderizar el ropero manualmente(que haga de nuevo el get)
            //         limpiar();
            //     } else {
            //         alert("Lo sentimos, no se pudo agregar")
            //         //salio todo mal
            //     }
            // })
            //^DESCOMENTAR


            //DESCOMENTAR TEST
            let clothesActual = localStorage.getItem('clothes');

            setBdTestLocalStorage([...clothesActual, options.body]);
            renderizadoManual(formulario.id);
            //^DESCOMENTAR.


        }


        if (textoBoton == "Modificar") {
            alert("Se modifico")
            let url = 'http://localhost:5000/vestimenta/' + formulario.id;

            let options = {
                headers: { "content-type": "application/json" },
                body: {
                    'id': formulario.id,
                    'apodo': formulario.apodo,
                    'especial_para': formulario.especial_para,
                    'elemento': formulario.elemento,
                }
            }

            api.put(url, options).then((res) => {
                if (!res.err) {
                    //salio todo bien
                    alert("Se modifico todo")
                    renderizadoManual(formulario.id);//es para renderizar el ropero manualmente(que haga de nuevo el get)
                    limpiar();
                } else {
                    alert("Lo sentimos, no se pudo actualizar")
                    //salio todo mal
                }
            })
        }

        //reiniciamos
        limpiar();

    }








    const handleChange = (e) => {
        e.preventDefault();

        // console.log("TARJERTa")
        // console.log(e.target.id)
        // console.log("VALOR")
        // console.log(e.target.value)

        setFormulario({
            ...formulario,
            [e.target.id]: e.target.value
        })

    }





    const handleEliminar = (e) => {
        e.preventDefault();


        if (formulario.id >= 0 & window.confirm("Si elimina una prenda, la vestimenta actual volvera a su estado vacio inicial. Desea eliminar '" + formulario.apodo + "' ?")) {
            //Aca eliminar

            let url = 'http://localhost:5000/vestimenta/' + formulario.id;

            api.del(url).then((res) => {
                if (!res.err) {
                    //salio todo bien
                    //"ya se borro" 
                    renderizadoManual(formulario.id);//es para renderizar el ropero manualmente(que haga de nuevo el get)
                    limpiar();
                } else {
                    alert("Lo sentimos, no se pudo eliminar")
                    //salio todo mal
                }
            })
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




                        <label class="labelOcasion2" for="especial_para">Ocasión:</label>
                        <div className="roContainerTxtArea">
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