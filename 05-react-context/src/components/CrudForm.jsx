import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import CrudContext from '../context/CrudContext';


const initialForm = {
    id: null,
    name: "",
    constellation: ""
}


const CrudForm = () => {

    const { createData, updateData, dataToEdit, setDataToEdit } = useContext(CrudContext);



    const [form, setForm] = useState(initialForm);

    const [lbl_agregar_editar, setLbl_agregar_editar] = useState("");



    useEffect(() => { //se va a ejecutar cada vez que cambie el valor de dataToEdit (y aparentemente tambien se ejecuta apenas comienza a leer el codigo el compilador. si le sago "Agregar" de algunos renglones mas abajo, no muestra nada. significa que pasa por ahi)
        if (dataToEdit) {
            setForm(dataToEdit);//lo que hace es ponertelo en los inputs a lo que vos seleccionas

            setLbl_agregar_editar("Editar")

        } else {
            setForm(initialForm);//ponemos en 'vacio' los inputs
            setLbl_agregar_editar("Agregar")
        }

    }, [dataToEdit]);

    const handleSubmit = (e) => {  /*Onsubmit del Form*/
        e.preventDefault(); /*evitamos recarga*/

        console.log(form) //esto es lo ingresado en los inputs

        if (!form.name || !form.constellation) { // comprueba si ningun input text es vacio
            alert('Datos incompletos');
            return;
        }
        //si trae id nulo significa que quiero crear un registro. si trae id previo quiere decir modificacion
        //esto es gracias al dataToEdit (en CrudTableRow)
        if (form.id === null) {
            createData(form)
        } else {
            updateData(form)
        }
        handleReset(); //esto es para que no nos quede guardado el id de edicion si es que estuvimos editando alguno
    }

    const handleReset = (e) => { //limpiar el formulario
        setForm(initialForm)
        setDataToEdit(null)
    }

    const handleChange = (e) => {
        setForm({ //va almacenando en variables digamos los valores de los inputs, y a su vez los inputs se alimentan de eso y actualizan su valor (si, un liaso)
            ...form, //spread operator para traer lo que ya estaba escrito. lo probe y no se en que cambia pero bueno
            [e.target.name]: e.target.value, //uso los corchetes para detectar en donde estoy escribiendo (en nombre o en constellation)

        })
        console.log(e.target.value)
    }

    return (
        <div>
            <h3>{lbl_agregar_editar}</h3>  {/**eso lo hice yo. Como lo hizo mircha: condicional renderizado: dataToEdit ? "Editar" : "Agregar" */}
            <form onSubmit={handleSubmit}> {/**se dispara con el boton enviar */}
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
                <input type="text" name="constellation" placeholder="Constellation" onChange={handleChange} value={form.constellation} />
                <input type="submit" value="Enviarr" />
                <input type="reset" value="limpiar" onClick={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm;