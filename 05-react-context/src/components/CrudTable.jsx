import React from 'react';
import { useContext } from 'react';
import CrudContext from '../context/CrudContext';
import CrudTableRow from './CrudTableRow';

const CrudTable = () => {


    const { db: data } = useContext(CrudContext);
    //los ':' significa alias, destructuramos 'db' y luego lo usaremos aqui como 'data'
    //antes destructuraba  deleteData, setDataToEdit tambien, pero era solo para pasarsela a su hijo 'crudtablerow'. ahora consumiremos directo en crudtablerow

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
                                <CrudTableRow el={elemento} key={elemento.id} />
                                //   setDataToEdit={setDataToEdit} deleteData={deleteData}
                                //antes venian props de crudApp, pasaban por aca (CrudTable) e iban a CrudTableRow
                            )))
                            :
                            (<tr><td colSpan="3">Sin datos</td></tr>)
                    }
                    {/* cuando usamos ContextApi, no significa que el 100% de las props ahora sean desde Context, puede ser mixto tranquilamente */}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable