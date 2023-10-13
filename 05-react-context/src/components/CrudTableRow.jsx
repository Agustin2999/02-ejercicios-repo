import React from 'react';
import { useContext } from 'react';
import CrudContext from '../context/CrudContext';

const CrudTableRow = ({ el }) => {
    let { id } = el;

    const { deleteData, setDataToEdit } = useContext(CrudContext);

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