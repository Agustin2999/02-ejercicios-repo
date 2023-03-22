import React, { useEffect, useState } from 'react';


const Persona = ({ handleInputChange, fila, index, eliminarFila }) => {

    // const [formulario, setFormulario] = useState(formInicial)

    // const [filas, setFilas] = useState(
    //     [
    //         { id: '', gasto: '' }
    //     ]
    // );

    // const handleChange = (e, index) => {
    //     e.preventDefault();
    //     // setFormulario({
    //     //     ...formulario,
    //     //     [e.target.id]: e.target.value,
    //     //     readonly: "yes"

    //     // })



    //     const { id, value } = e.target;
    //     const nuevasFilas = [...filas];
    //     nuevasFilas[index][id] = value;
    //     setFilas(nuevasFilas);
    // }



    // const agregarFila = () => {
    //     setFilas([...filas, { nombre: '', apellido: '' }]);
    // };






    //28/02 PARA NO PONERME SAD DEL TODO, VOY A CAMBIAR EL MAP DE ACA Y PONERLO EN EL COMPONENTE PADRE (si es que me sale)


    return (

        //hacer if y verificar si se esta renderizando uno ya existente o uno vacio

        // <div className="similTabla" key={objPersona.id}>
        //     <div>
        //         <input placeholder="Nombre de persona 1" autocomplete="off" onChange={(event) => handleChange(event, index)} id="nombre" value={formulario.nombre} />
        //     </div>
        //     <div>
        //         <input placeholder="Gasto de persona 1" autocomplete="off" maxlength="10" type="number" min="0" onChange={(event) => handleChange(event, index)} id="gasto" value={formulario.gasto} />
        //         {/* readonly attributo de input */}
        //         {/* pattern  podemos poner expresion regular */}
        //     </div>
        // </div>

        <>
            {
                <div className="similTabla" key={index}>

                    <div className='container-input-icono'>
                        <a className="aContenedorIcono"  >
                            <img src="" width="35rem" />
                            {/* forma mas rapida que encontre para que me respete el orden */}
                        </a>
                    </div>



                    {/* //<div className='container-input-icono'> */}
                    <div className='container-input-icono divPersonaBorde '>
                        <input className="input" placeholder={`Nombre de persona ${index + 1}`} autoComplete="off"
                            onChange={(event) => handleInputChange(event, index)} id="nombre" name="nombre" value={fila.nombre} />
                        {/* </div> */}


                        <input className="input inputGasto" placeholder={`Gasto de persona ${index + 1}`} autoComplete="off" maxLength="10"
                            type="number" min="0" onChange={(event) => handleInputChange(event, index)} id="gasto" name="gasto" value={fila.gasto} />
                        {/* <button    className="botonEliminar">
                    </button> */}
                    </div>

                    <div className='container-input-icono'>

                        <a className="aContenedorIcono" onClick={() => { eliminarFila(index) }}>
                            {/* <img src="https://img.freepik.com/iconos-gratis/cerrar-borrar-eliminar-icono-cuadrado_318-9256.jpg" width="35rem" /> */}
                            <img src="https://img.freepik.com/iconos-gratis/salida_318-604329.jpg" width="33rem" />


                            {/* <i id="eliminarFila" className="bi bi-x-square-fill botonBootstrap" ></i>     */}
                        </a>


                    </div>

                </div>
            }

        </>


    )
}

export default Persona;

































/*
de seguridad  2/3/23


const Persona = ({ objPersona }) => {

    // const [formulario, setFormulario] = useState(formInicial)

    // const [filas, setFilas] = useState(
    //     [
    //         { id: '', gasto: '' }
    //     ]
    // );

    // const handleChange = (e, index) => {
    //     e.preventDefault();
    //     // setFormulario({
    //     //     ...formulario,
    //     //     [e.target.id]: e.target.value,
    //     //     readonly: "yes"

    //     // })



    //     const { id, value } = e.target;
    //     const nuevasFilas = [...filas];
    //     nuevasFilas[index][id] = value;
    //     setFilas(nuevasFilas);
    // }



    // const agregarFila = () => {
    //     setFilas([...filas, { nombre: '', apellido: '' }]);
    // };



    const [filas, setFilas] = useState(
        [
            { nombre: '', gasto: '' }
        ]
    );

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const nuevasFilas = [...filas];
        nuevasFilas[index][name] = value;
        setFilas(nuevasFilas);
    };

    const agregarFila = () => {
        setFilas(
            [
                ...filas,
                { nombre: '', gasto: '' }
            ]
        );
    };

    const repartija = () => {
        alert("reparto")
    }

 

    //28/02 PARA NO PONERME SAD DEL TODO, VOY A CAMBIAR EL MAP DE ACA Y PONERLO EN EL COMPONENTE PADRE (si es que me sale)
    //ACA ME QUEDE


  
    return (

        //hacer if y verificar si se esta renderizando uno ya existente o uno vacio

        // <div className="similTabla" key={objPersona.id}>
        //     <div>
        //         <input placeholder="Nombre de persona 1" autocomplete="off" onChange={(event) => handleChange(event, index)} id="nombre" value={formulario.nombre} />
        //     </div>
        //     <div>
        //         <input placeholder="Gasto de persona 1" autocomplete="off" maxlength="10" type="number" min="0" onChange={(event) => handleChange(event, index)} id="gasto" value={formulario.gasto} />
        //         {/* readonly attributo de input  }
        //         {/* pattern  podemos poner expresion regular  }
        //     </div>
        // </div>

        <>
            {filas.map((fila, index) => (
                <div className="similTabla" key={index}>
                    <input placeholder={`Nombre de persona ${index + 1}`} autoComplete="off"
                        onChange={(event) => handleInputChange(event, index)} id="nombre" name="nombre" value={fila.nombre} />
                    <input placeholder={`Gasto de persona ${index + 1}`} autoComplete="off" maxLength="10"
                        type="number" min="0" onChange={(event) => handleInputChange(event, index)} id="gasto" name="gasto" value={fila.gasto} />
                </div>
            ))}
            <button className="botonMas" onClick={agregarFila}>+</button>
            <button onClick={repartija}>CALCULAR TOTAL</button>
        </>


    )
}

export default Persona;

*/ 