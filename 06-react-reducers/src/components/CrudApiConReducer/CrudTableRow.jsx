import React from 'react';

const CrudTableRow = ({ el, deleteData, setDataToEdit }) => { //este es llamado desde crud table
    let { id } = el;


    return (
        <tr id="abc">
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button> {/**se usa arrow function para no llamarla DE UNA(directamente cuando el chrome lee el codigo) a la funcion */}
                {/**set data to edit se guarda el valor de un determinado id digamos(en realidad todo el objeto), entonces cuando se edite se pisa */}
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow