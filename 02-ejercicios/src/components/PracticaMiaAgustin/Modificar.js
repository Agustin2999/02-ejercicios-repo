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


const Modificar = ({ ropaEditar, renderizadoManual }) => {

    const { id, apodo, especial_para, elemento } = ropaEditar;
    const [formulario, setFormulario] = useState(formInicial)
    const [textoBoton, setTextoBoton] = useState("Agregar")
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
        } else {
            setFormulario({
                ...formulario,
                id: "..."
            })
        }
    }, [id]);

    const limpiar = () => {
        setFormulario({
            ...formInicial,
            id: "..."
        })
        setTextoBoton("Agregar");
    }

    const handleReset = (e) => {
        e.preventDefault();
        limpiar();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( !window.confirm("Si modifica o agrega una prenda, la vestimenta actual volvera a su estado vacio inicial. Desea continuar?")){
            return;
        }

        if (textoBoton == "Agregar") {
            //Aca agregar
            alert("Se agrego")




//FALTA EL AGREGARRRR 18/10/22














        }
        if (textoBoton == "Modificar") {
            alert("Se modifico")
            let url = 'http://localhost:5000/vestimenta/' + formulario.id;

            let options = {
                headers: { "content-type": "application/json" },
                body: {
                    'id': formulario.id,
                    'apodo' : formulario.apodo,
                    'especial_para' : formulario.especial_para,
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
                    <legend>Modificar</legend>
                    <form style={estiloForm} onSubmit={handleSubmit} onReset={handleReset}>
                        <p id="idPrenda" style={estiloIDPrenda}>Id Prenda: {formulario.id} <a href="#" onClick={handleEliminar} >ELIMINAR</a></p>
                        <label for="apodo">Apodo:</label>
                        <input type="search" id="apodo" name="apodo" onChange={handleChange} value={formulario.apodo} autocomplete="off" />
                        <br /><br />
                        <label for="elemento">Elemento:</label>
                        <input type="search" id="elemento" name="elemento" onChange={handleChange} value={formulario.elemento} autocomplete="off" />
                        <br /><br />




                        <label for="especial_para">Ocasión:</label>

                        <textarea type="search" name="ocasionNoUsado" id="especial_para" onChange={handleChange} value={formulario.especial_para} autocomplete="off" style={casiInput}></textarea>
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