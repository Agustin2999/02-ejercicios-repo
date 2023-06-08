import React from 'react'
import './calcMoney.css'
import Persona from './Persona';
import { useState } from 'react';
import Transaccion from './Transaccion';
import UrlGSheets from './UrlGSheets';
import DescargarPDF from '../../helpers/DescargarPDF';
//import { useRef } from 'react';



const CalculoDineroIndex = () => {

    //useStates
    const [filasGastos, setFilasGastos] = useState(
        [
            { nombre: '', gasto: '' }
        ]
    );
    const [transactions, setTransactions] = useState([]);
    const [showInputSheets, setShowInputSheets] = useState(false);
    const [individualSpents, setIndividualSpents] = useState([]);
    const [showReport, setShowReport] = useState(true);
    const [isDownloadingReport, setIsDownloadingReport] = useState(false);
    const [nombreJuntada, setNombreJuntada] = useState('');//nombre de la juntada texto editable
    //const juniorRef = useRef(null);



    const handleInputChange = (event, index) => { //cambian los inputs personas
        // volvemos a 0 si algo cambió
        setTransactions([]);
        setIndividualSpents([]);

        const { name, value } = event.target; //saca el nombre y el valor de la fila actual (el elemento persona)
        //en name puede venir 'nombre' o 'gasto', que son los nombres de los inputs
        const nuevasFilasGastos = [...filasGastos]; //copia lo que ya tiene
        nuevasFilasGastos[index][name] = value; //del que está modificando(index), le va agregando el valor

        setFilasGastos(nuevasFilasGastos);
    };



    const agregarFila = () => {
        // volvemos a 0 al agregar fila
        setTransactions([]);
        setIndividualSpents([]);

        //seteamos una nueva fila vacia
        setFilasGastos(
            [
                ...filasGastos,
                { nombre: '', gasto: '' } //agrega una fila vacia para poder rellenar los campos
            ]
        );
    };



    const eliminarFila = (i) => {
        //volvemos a 0 para que el usuario tenga que recalcular de nuevo
        setTransactions([]);
        setIndividualSpents([]);

        if (filasGastos.length > 1) { //el array.length de los nombres es > a 1 
            //si es mayor a uno significa que hay al menos 2 personas
            const nuevasFilasGastos = [...filasGastos].filter(function (elemento, indice) {
                if (indice != i) {
                    //retorna todos los elementos menos el que tiene el indice que seleccioné
                    return elemento
                }
            });
            setFilasGastos(nuevasFilasGastos);
        } else {
            //entra en este else cuando hay una sola persona. Entonces, vacía el unico elemento que encuentra
            setFilasGastos([
                { nombre: '', gasto: '' }
            ]);
        }
    }




    const calcularReparto = () => {
        var listaObjGastos = filasGastos.map((elem) => {
            return {
                nombre: elem.nombre,
                gasto: parseInt(elem.gasto)

            }
        });


        //limpiamos los que no tengan nombre ni gasto
        listaObjGastos = listaObjGastos.filter(elem => elem.nombre != "" && elem.gasto >= 0);
        // console.log("listaObjGastos") // console.log(listaObjGastos)



        //primera parte
        listaObjGastos = listaObjGastos.reduce((p, c) => { // <-- primero agrupamos por nombre
            p[c.nombre.trim()] = (p[c.nombre.trim()] || 0) + c.gasto;
            return p;
        }, {})
        //El primer parámetro de reduce() es una función que se ejecutará en cada elemento del array. 
        // Esta función recibe dos parámetros: p (el valor acumulado hasta el momento) y 
        // c (el elemento actual del array).
        //En la función, se utiliza la propiedad nombre del objeto c como clave 
        // en el objeto acumulador p. Si la clave ya existe en el objeto p (lo que hay entre parentesis), 
        // se suma el valor de gasto al valor existente en la clave. Si la 
        // clave no existe en el objeto p, se crea la clave con valor 0 y
        //  se le suma el valor de gasto.
        //posible resultado: {    Juan: 70,    María: 45,    Pedro: 10}


        let listaObjGastosSumado = listaObjGastos;//cruda, lo que realmente gastó cada persona.
        //lo hice asi para separar y trabajar mas limpio. Teniendo en cuenta que en procesarObjeto voy a modificar la variable recientemente creada
        //console.log("totalgastado")        console.log(listaObjGastosSumado)


        async function procesarObjeto() {
            listaObjGastosSumado = Object.entries(listaObjGastosSumado).map(([key, value]) => ({ nombre: key, gasto: value }));
            //La primera línea convierte listaObjGastosSumado en un array de objetos con la propiedad nombre y gasto.
            //transforma un objeto en un array de objetos

            let listaObjGastosSumado2 = [];

            await listaObjGastosSumado.map((e) => {
                listaObjGastosSumado2.push({
                    nombre: e.nombre,
                    gasto: e.gasto
                });
            });
            await setIndividualSpents(listaObjGastosSumado2);
        }
        procesarObjeto();




        const resultado = Object.keys(listaObjGastos).map(e => {
            const o = {};
            o.nombre = e;
            o.gasto = listaObjGastos[e];
            return o;
        })
        listaObjGastos = resultado;
        //por lo que entiendo hace lo mismo que en la funcion anterior
        /*gpt:
        procesarObjeto hace lo mismo que const resultado?
        Sí, ambos fragmentos de código tienen como objetivo transformar un 
        objeto en un array de objetos con la misma estructura, donde cada objeto 
        tenga una propiedad "nombre" y una propiedad "gasto". 
        
        En términos de resultados, ambos fragmentos de código hacen lo mismo, 
        pero el primer fragmento es un poco más explícito en su uso de Object.entries 
        y puede ser más fácil de entender para alguien que no está familiarizado con el método Object.keys
        */

        //en un futuro se podria unificar, pero por ahora lo dejo asi. 18/4/23




        //segunda parte

        //sacamos el promedio de todo lo gastado
        var totalPromedio = 0;
        for (var i = 0; i < listaObjGastos.length; i++) {
            totalPromedio = totalPromedio + parseInt(listaObjGastos[i].gasto)
        }
        totalPromedio = totalPromedio / listaObjGastos.length;
        //console.log("el promedio es" , totalPromedio)    console.log("-----diferencias-----")    console.log(listaObjGastos[0].nombre + " " + (listaObjGastos[0].gasto - totalPromedio))    console.log(listaObjGastos[1].nombre + " " + (listaObjGastos[1].gasto - totalPromedio))    console.log(listaObjGastos[2].nombre + " " + (listaObjGastos[2].gasto - totalPromedio))    console.log(listaObjGastos[3].nombre + " " + (listaObjGastos[3].gasto - totalPromedio))   console.log("-------------")


        //separamos los que pagaron mas y los que pagaron menos
        var listaObjMayores = listaObjGastos.filter(per => per.gasto > totalPromedio);
        var listaObjMenores = listaObjGastos.filter(per => per.gasto < totalPromedio);
        //console.log("mayores:")     console.log(listaObjMayores)     console.log("menores:")    console.log(listaObjMenores)

        var arrayTransacciones = [];

        listaObjMenores.forEach(personaMenor => {
            if (personaMenor.gasto < totalPromedio) { //pregunto si es menor porque puede ser que de exacto. Aunque lo pienso y no deberia, ya que no puse <= ni >= cuando los declare

                var diferenciaDisponible = totalPromedio - personaMenor.gasto;

                listaObjMayores.forEach(personaMayor => { //para devolverles plata a los que pagaron de mas

                    if (personaMayor.gasto > totalPromedio) { //los que pagaron de mas. //personaMenor.gasto < totalPromedio && 
                        //var diferenciaMayor = personaMayor.gasto - totalPromedio;

                        personaMenor.gasto = personaMenor.gasto + diferenciaDisponible;
                        personaMayor.gasto = personaMayor.gasto - diferenciaDisponible;

                        var diferenciaExtra = 0;
                        if (personaMayor.gasto < totalPromedio) { //si le devolvieron mas de lo que pagó
                            diferenciaExtra = totalPromedio - personaMayor.gasto;

                            personaMayor.gasto = personaMayor.gasto + diferenciaExtra;
                            personaMenor.gasto = personaMenor.gasto - diferenciaExtra;
                        }

                        var totalPagado = diferenciaDisponible - diferenciaExtra;
                        //console.log(personaMenor.nombre + " le paga a " + personaMayor.nombre + " la suma de: " + totalPagado)

                        arrayTransacciones.push(
                            // new transacciones(personaMenor.nombre, personaMayor.nombre, totalPagado)
                            //probamos hacerlo sin POO
                            {
                                sender: personaMenor.nombre,
                                receiver: personaMayor.nombre,
                                difference: totalPagado
                            }
                        )
                    }
                })
            }
        })

        // console.log(arrayTransacciones);      // console.log("TIPO");        // console.log(typeof (arrayTransacciones));
        setTransactions(
            arrayTransacciones
        )
    }



    const handleKeyDown = (event) => { //para que no ingresen 'enter'
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    };



    const handleShowInputSheets = () => {
        setShowInputSheets(!showInputSheets)
    }



    const handleClickParent = () => {
        // juniorRef.current.onClick();
        //hace click a boton del hijo desde el boton padre
        //es una mala practica pero no encontre mejor forma
        var botonHijo = document.querySelector('#btnDescargarRep');
        botonHijo.click();
    };




    const limpiar = () => {
        //reiniciamos todo
        setFilasGastos(
            [
                { nombre: '', gasto: '' }
            ]
        );

        setTransactions([]);
        setShowInputSheets(false);
        setIndividualSpents([]);
        setShowReport(true);
        setIsDownloadingReport(false);
        setNombreJuntada('');
    }



    return (
        <>
            <h2>Reparto de dinero</h2>
            <input
                className="input-nombreJuntada"
                value={nombreJuntada}
                maxLength="40"
                onChange={(event) => setNombreJuntada(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escriba nombre de la juntada"
                autoComplete="off"
            />

            <br />
            <br />

            <div className="containerGSheets" >
                <a className="aUrlSheets" onClick={handleShowInputSheets}>Ingresar link de Google Sheets</a>

                {
                    showInputSheets ?
                        (<></>)
                        :
                        (<a onClick={handleShowInputSheets}>
                            <img className="imageButton" src="https://cdn-icons-png.flaticon.com/128/6590/6590944.png" width="20rem" />
                        </a>)
                }

                <br />

                {
                    showInputSheets ?
                        (<UrlGSheets setFilasGastos={setFilasGastos} handleShowInputSheets={handleShowInputSheets} setTransactions={setTransactions} />)
                        :
                        ("")
                }

            </div>


            <button className="btn4c btnReset" onClick={limpiar}>Reiniciar</button>


            {
                filasGastos.map((filaP, indexP) => (<Persona key={indexP.toString()} handleInputChange={handleInputChange} fila={filaP} index={indexP} eliminarFila={eliminarFila} />))
                //cuando le pasamos fila le pasamos 1 objeto del array, por eso al modificar sabe cual es cual
            }

            <br />


            <a className="aContenedorIcono" onClick={agregarFila}>
                {/* <img src="https://w7.pngwing.com/pngs/535/334/png-transparent-computer-icons-add-button-logo-number-add-button-thumbnail.png" />  lo saque porque era redondo*/}
                <img src="https://cdn-icons-png.flaticon.com/512/25/25668.png" width="35rem" />
            </a>

            <br />
            <br />


            <button className="btn4c" onClick={calcularReparto}>Calcular</button>


            {
                transactions.length > 0 ? (
                    <>
                        <hr />
                        {
                            transactions.map((item) => <Transaccion key={item.sender.charAt(0) + "-" + item.receiver.charAt(0) + "-" + item.difference.toString() } transaccion={item} />)
                            //sender, receiver, difference. Armé casero un key
                            
                        }

                        <button className="btn4c" onClick={handleClickParent}>Descargar Reporte</button>
                    </>
                ) : (
                    <></>
                )
            }


            {
                showReport ?
                    (
                        <DescargarPDF transactions={transactions} nameParty={nombreJuntada} individualSpents={individualSpents} />
                        //, setIsDownloadingReport, isDownloadingReport, handleClickParent 
                        //ref={juniorRef}
                    )
                    :
                    ("")
            }
        </>
    )
}


export default CalculoDineroIndex;










/*
6/4/23
despues de intentar hacer npm fix audit qsy algo asi ayer, que me tiraba 7 vulnerabilidades antes, luego de hacer el fix me tiro como 42, seña de que se rompio todo creo
busque una pag en internet y me dijo que volviera a descargar el package json y el package json lock, lo hice. tambien
decia borrar la carpeta node_modules. lo hice. despues npm install. 
y ahora volvi a las 7 vulnerabilidades yupii creo que se soluciono xd
tambien tuve que borrar cache npm
*/ 