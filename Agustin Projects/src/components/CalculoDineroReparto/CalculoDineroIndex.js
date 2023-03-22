import React from 'react'
import './calcMoney.css'
import Persona from './Persona';
import { useState, useEffect } from 'react';
import Transaccion from './Transaccion';





// const initialDb = [
//     {
//         id: null,
//         nombre: null,
//         gasto: null
//     }
// ];

// const personaActual = {
//     id: null,
//     nombre: null,
//     gasto: null
// }



const CalculoDineroIndex = () => {

    // const [personas, setPersonas] = useState(initialDb); //inicia vacio

    // const sumarPersona = () => {

    //     personaActual.id = Date.now();
    //     personaActual.nombre = "agregado"
    //     personaActual.gasto = 999

    //     setPersonas([...personas, personaActual])
    //     alert("impresion")
    //     console.log(personas)

    // }



    // useEffect(() => {
    //     alert("cambio personas")
    // }, [personas]);




    const [filas, setFilas] = useState(
        [
            { nombre: '', gasto: '' }
        ]
    );


    const [transactions, setTransactions] = useState([]);


    const handleInputChange = (event, index) => {


        setTransactions([]); //lo volvemos a 0 si algo cambió



        const { name, value } = event.target; //saca el nombre y el valor de la fila actual (el elemento persona)
        const nuevasFilas = [...filas]; //copia lo que ya tiene
        nuevasFilas[index][name] = value; //del que está modificando(index), le va agregando el valor
        setFilas(nuevasFilas);
    };
    const agregarFila = () => {
        setFilas(
            [
                ...filas,
                { nombre: '', gasto: '' } //agrega una fila vacia para poder rellenar los campos
            ]
        );
    };


    const eliminarFila = (i) => {
        if(filas.length>1){ //el array.length de los nombres es > a 1 
            const nuevasFilas = [...filas].filter(function (elemento, indice) {
                if (indice != i) {
                    return elemento
                }
            });
    
            setFilas(nuevasFilas);
        } else{
            setFilas([
                { nombre: '', gasto: '' }
            ] ); //volvemos a 0 
        }
        
    }





    const calcularReparto = () => {
        var listaObj = filas.map((elem) => {
            return {
                nombre: elem.nombre,
                gasto: parseInt(elem.gasto)

            }
        });



        //limpiamos los que no tengan nombre ni gasto
        listaObj = listaObj.filter(elem => elem.nombre != "" && elem.gasto > 0);
        console.log("listaObj")
        console.log(listaObj)


        //primera parte
        listaObj = listaObj.reduce((p, c) => { // <-- primero agrupamos por nombre
            p[c.nombre.trim()] = (p[c.nombre.trim()] || 0) + c.gasto;
            return p;
        }, {})

        const resultado = Object.keys(listaObj).map(e => { // <-- después transformamos el formato
            const o = {};
            o.nombre = e;
            o.gasto = listaObj[e];
            return o;
        })
        listaObj = resultado;



        //segunda parte
        var totalPromedio = 0;
        for (var i = 0; i < listaObj.length; i++) {
            totalPromedio = totalPromedio + parseInt(listaObj[i].gasto)
        }

        totalPromedio = totalPromedio / listaObj.length;
        //console.log("el promedio es" , totalPromedio)    console.log("-----diferencias-----")    console.log(listaObj[0].nombre + " " + (listaObj[0].gasto - totalPromedio))    console.log(listaObj[1].nombre + " " + (listaObj[1].gasto - totalPromedio))    console.log(listaObj[2].nombre + " " + (listaObj[2].gasto - totalPromedio))    console.log(listaObj[3].nombre + " " + (listaObj[3].gasto - totalPromedio))   console.log("-------------")
        var listaObjMayores = listaObj.filter(per => per.gasto > totalPromedio);
        var listaObjMenores = listaObj.filter(per => per.gasto < totalPromedio);
        //console.log("mayores:")     console.log(listaObjMayores)     console.log("menores:")    console.log(listaObjMenores)

        // class transacciones {
        //     constructor(sender, receiver, diference) {
        //         this.sender = sender;
        //         this.receiver = receiver;
        //         this.diference = diference
        //     }
        // }

        var arrayTransacciones = [];

        listaObjMenores.forEach(personaMenor => {
            if (personaMenor.gasto < totalPromedio) {
                //console.log(personaMenor.nombre, "le paga a:");
                var diferenciaDisponible = totalPromedio - personaMenor.gasto; //hasta aca bien
                //aca viene 175
                listaObjMayores.forEach(personaMayor => { //para devolverles plata a los que pagaron de mas

                    if (personaMenor.gasto < totalPromedio && personaMayor.gasto > totalPromedio) { //los que pagaron de mas
                        var diferenciaMayor = personaMayor.gasto - totalPromedio;

                        personaMenor.gasto = personaMenor.gasto + diferenciaDisponible;
                        personaMayor.gasto = personaMayor.gasto - diferenciaDisponible;

                        var diferenciaExtra = 0;
                        if (personaMayor.gasto < totalPromedio) { //si le devolvieron mas de lo que pagó
                            diferenciaExtra = totalPromedio - personaMayor.gasto;

                            personaMayor.gasto = personaMayor.gasto + diferenciaExtra;
                            personaMenor.gasto = personaMenor.gasto - diferenciaExtra;
                        }

                        var totalPagado = diferenciaDisponible - diferenciaExtra;
                        console.log(personaMenor.nombre + " le paga a " + personaMayor.nombre + " la suma de: " + totalPagado)
                        arrayTransacciones.push(
                            // new transacciones(personaMenor.nombre, personaMayor.nombre, totalPagado)
                            //probamos hacerlo sin POO
                            {
                                sender: personaMenor.nombre,
                                receiver: personaMayor.nombre,
                                diference: totalPagado
                            }
                        )
                    }
                })
            }
        })

        console.log(arrayTransacciones);
        console.log("TIPO");
        console.log(typeof (arrayTransacciones));
        setTransactions(

            arrayTransacciones
        )
        //arrayTransacciones es lo que tiene que pagar el usuario
    }











//nombre de la juntada texto editable
    const [nombreJuntada, setNombreJuntada] = useState('');

    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    };







    return (
        <>
            <h2>Calculo De Money</h2>
            {/* <h4 className="dy-bl ">Nombre de la juntada:</h4> */}
            {/* <label className="labelEditable" contentEditable="true" >Escriba nombre de la juntada</label> */}
            {/*  */}

             
                <input
                    className="input-nombreJuntada"
                    value={nombreJuntada}
                    maxlength="40"
                    onChange={(event) => setNombreJuntada(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escriba nombre de la juntada"
                     
                     
                />
           






            {/* {personas.length > 0 ?
                personas.map((elemento) => (
                    <Persona objPersona = {elemento} />
                ))
                :  */
                filas.map((fila, index) => (<Persona handleInputChange={handleInputChange} fila={fila} index={index} eliminarFila={eliminarFila} />))
                /*                                                          cuando le pasamos fila le pasamos 1 objeto del array, por eso al modificar sabe cual es cual*/
            }


            {/* <i class="bi bi-plus-circle-fill botonBootstrap"   onClick={agregarFila} ></i> NO HUBO FORMA DE HACER CON ESTO, NO SE CENTRABA VERTICALMENTE */}

            <br />

           
  

            <a className="aContenedorIcono" onClick={agregarFila}>
                {/* <img src="https://w7.pngwing.com/pngs/535/334/png-transparent-computer-icons-add-button-logo-number-add-button-thumbnail.png" width="35rem" /> */}
                <img src="https://cdn-icons-png.flaticon.com/512/25/25668.png" width="35rem" />
            </a>


            {/* <button className="botonMas" onClick={agregarFila}>+</button> */}

<br/>
<br/>
            <button className="btnCalcular" onClick={calcularReparto}>Calcular</button>
          

             
            




            <hr />


            {transactions.length > 0 ? (
                transactions.map((item) => <Transaccion transaccion={item} />)
            ) : (
                <p>&nbsp;</p>
            )}





        </>
    )

}


export default CalculoDineroIndex;



//ponerle color de paleta de colores elegida en internet