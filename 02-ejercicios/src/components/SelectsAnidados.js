import SelectList from "./SelectList";
import React, { useState } from 'react';

/*
https://api-sepomex.hckdrk.mx/
token:
d81a7ac7-976d-4e1e-b7d3-b1979d791b6c
*/



const SelectsAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    //tuve que reemplazar la api sempomex(https://api-sepomex.hckdrk.mx/query/get_estados?token=d81a7ac7-976d-4e1e-b7d3-b1979d791b6c) por una trucha que hice en json server  
    //y en vez de ponerle get_estados por ejemplo directamente traemos lo que queremos traer
    //npm run sepomex-api
    /*localhost:5001/estado*/




    const TOKEN = "qwerty-holasoyeltoken-uiop"; //le voy a pasar el token igual para practicar, pero como uso json server no lo necesito

 
    return (
        <div>
            <h2>Selects Anidados</h2>
            <h3>Mexico</h3>


            <SelectList title="estado" url={`http://localhost:5001/response?token=${TOKEN}`}
                handleChange={(e) => {
                    setState(e.target.value)
                }} />

            {/**query/get_municipio_por_estado/NombreEstado, yo lo voy a hacer asi nomas sin filtro digamos */}
            {state
                &&

                <SelectList title="municipios" url={`http://localhost:5001/response?token=${TOKEN}`}
                    handleChange={(e) => {
                        setTown(e.target.value)
                    }} />
            }

{/**query/get_colonia_por_municipio/NombreMunicipio */}
            {town
                &&
                <SelectList title="colonia" url={`http://localhost:5001/response?token=${TOKEN}`}
                    handleChange={(e) => {
                        setSuburb(e.target.value)
                    }} />
            }
            <pre> {/**estuve googleando y dice que es para que te haga un parrafo, le agrega sangria. El Elemento HTML <pre> (o Texto HTML Preformateado) representa texto preformateado. El texto en este elemento típicamente se muestra en una fuente fija, no proporcional, exactamente como es mostrado en el archivo. Los espacios dentro de este elemento también son mostrados como están escritos. */}
                <code> {/**es para que vayamos viendo las variables */}
                    {state} - {town} - {suburb}
                </code>
            </pre>

        </div>
    )

}














export default SelectsAnidados;