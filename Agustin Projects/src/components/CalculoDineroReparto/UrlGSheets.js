import React from 'react'
import { useState, useEffect } from 'react';
import { helpGetGSheets } from '../../helpers/helpGetGSheets';


const UrlGSheets = ({ setFilas,handleShowInputSheets }) => {


    const [form, setForm] = useState({
        urlSheets: "",
        nameSheets: "",
        colNames: "",
        colSpendings: ""
    });



    const handleChangeInput = (e) => {

        e.preventDefault();
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })


    }





    const handleSubmitGetData = () => {
        // extraer id:
        var resultadoIdLink = "";

        var link = form.urlSheets; //"https://docs.google.com/spreadsheets/d/1WGDV_7UyhzJTsqFJ2BlbJu7TyOS6TVDAwu9FLv4qaXs/edit#gid=0";

        var indice = link.search("spreadsheets");
        var indice2 = link.search("/edit");

        if (indice == -1) {
            indice = 0;
        } else {
            indice += 15; //15 para poder extraer bien el id
        }

        if (indice2 == -1) {
            indice2 = link.length;
        }



        resultadoIdLink = link.substring(indice, indice2);



        alert("buscado. Fijate en el console.log")



        //console.log(apiGSheets)//[{name: 'Garcia', spending: 30}]

        let arrayFilas = [];

        async function asincronia() {

            //test
            const apiGSheetsTest = await helpGetGSheets("1iYd50f5Ools3AvBPZmFR77WQ3xEh05hTXKDPRMD6mpc", "user-data", "Last name", "gaston");
            let apiGSheets;
            if (form.nameSheets.toLowerCase() == 'admin') {
                apiGSheets = apiGSheetsTest;
            } else {
                apiGSheets = await helpGetGSheets(resultadoIdLink, form.nameSheets, form.colNames, form.colSpendings);
            }






            await apiGSheets; // Esperar a que se resuelva la promesa
            apiGSheets.forEach(item => {
                arrayFilas.push({
                    nombre: item.name,
                    gasto: item.spending,
                })
            });


            setFilas(
                arrayFilas
            );
        }

        asincronia();






    }








    return (
        <>
            <br />
            <input className="inputsSheets" placeholder={"Link de G-Sheets"} autoComplete="off"
                id="urlSheets" onChange={handleChangeInput} name="urlSheets" value={form.urlSheets} />


            <input className="inputsSheets" placeholder={"Nombre de archivo"} autoComplete="off"
                id="nameSheets" onChange={handleChangeInput} name="nameSheets" value={form.nameSheets} />
            <input className="inputsSheets" placeholder={"Titulo col nombres"} autoComplete="off"
                id="colNames" onChange={handleChangeInput} name="colNames" value={form.colNames} />
            <input className="inputsSheets" placeholder={"Titulo col gastos"} autoComplete="off"
                id="colSpendings" onChange={handleChangeInput} name="colSpendings" value={form.colSpendings} />

            <br /><br />
            <button className="buscarGSheet" onClick={handleSubmitGetData}>Buscar</button>
<br/>
                    <a onClick={handleShowInputSheets}>
                            <img className="imgReverse imageButton" src="https://cdn-icons-png.flaticon.com/128/6590/6590944.png" width="20rem" />
                        </a>
        </ >
    )
}

export default UrlGSheets;
