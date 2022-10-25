//Vacio. Primero voy a hacer un react tranqui solo con get y edicion de datos manualmente desde el json. mas adelante voy
//a ir mejorandolo
import React, { useEffect, useState } from 'react';

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
    height: '1.6em',
    width: '13.2em'
}


const formInicial = {
    elemento: "",
    apodo: "",
    ocasion: ""
}




const FormularioAG = ({ setPrendaParamElem, setPrendaParamApodo, setPrendaParamOcasion, setCualInput }) => {

    const [formulario, setFormulario] = useState(formInicial)

    const handleSubmit = (e) => {
        e.preventDefault();


    }


    //hacer el onchangetext de los input
    const handleChange = (e) => {
        e.preventDefault();
        setFormulario({
            ...formulario,
            [e.target.id]: e.target.value
        })

        if (e.target.id == "elemento") {
            setPrendaParamElem(e.target.value);
            console.log("elemento: " + e.target.value)
        }
        if (e.target.id == "apodo") {
            setPrendaParamApodo(e.target.value);
            console.log("apodo: " + e.target.value)
        }

        if (e.target.id == "ocasion") {
            if (e.target.value == "cualquiera") {
                setPrendaParamOcasion("");
            }else{
                setPrendaParamOcasion(e.target.value);
            }
            
            console.log("ocasión: " + e.target.value)
        }


        setCualInput(e.target.id);
    }


    const handleReset = (e) => {
        e.preventDefault();
        setFormulario(formInicial)
        //ACA TENGO QUE RESETEAR EL setDbRopa PARA QUE SE REINICIE LA BUSQUEDA
    }

    return (
        <>
            <div style={divPadreFS}>
                <fieldset style={estiloFS}>
                    <legend>Busqueda</legend>
                    <form style={estiloForm} onSubmit={handleSubmit} onReset={handleReset}>
                        <p   style={estiloIDPrenda}>Ingrese parámetros</p>
                        <label for="apodo">Apodo:</label>
                        <input type="search" id="apodo" name="buscarApodo" onChange={handleChange} value={formulario.apodo} autocomplete="off" />
                        <br /><br />
                        <label for="elemento">Elemento:</label>
                        <input type="search" id="elemento" onChange={handleChange} name="buscarElemento" value={formulario.elemento} autocomplete="off" />
                        <br /><br />
                        <label for="ocasion">Ocasión:</label>
                        <select name="ocasion" id="ocasion" onChange={handleChange} value={formulario.ocasion} style={casiInput}>
                            {/* <option value="" disabled selected hidden>Elija opción...</option> */}
                            <option value="cualquiera" selected>Cualquiera</option>
                            <option value="deportivo">Deportivo</option>
                            <option value="diario">Diario</option>
                            <option value="entrecasa">Entrecasa</option>
                            <option value="vestir">Vestir</option>
                            <option value="salir">Salir</option>

                        </select>

                        <div style={estiloDivBotones}>
                            {/* <input type="submit" value="Buscar" /> */}
                            <input type="reset" value="limpiar" />
                        </div>
                    </form>
                </fieldset >
            </div>
        </>
    )






}

export default FormularioAG;


