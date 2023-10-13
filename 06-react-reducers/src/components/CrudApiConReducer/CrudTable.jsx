import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data, deleteData, setDataToEdit }) => {


    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.length > 0 ?
                            (data.map((elemento) => (
                                <CrudTableRow el={elemento} key={elemento.id}
                                    setDataToEdit={setDataToEdit} deleteData={deleteData} /> //vienen de crudApp, pasan por aca (CrudTable) y ahora van a CrudTableRow
                            )))
                            :
                            (<tr><td colSpan="3">Sin datos</td></tr>)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CrudTable