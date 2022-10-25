import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


//vamos a simular una BD
const initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso"
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragon"
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne"
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Agustinian"
    }
];



const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data) => { //aca va a llegar form desde CrudForm
        data.id = Date.now(); //creamos un id que es la fecha. se guarda en milisegundos
        setDb([...db, data])//db es un array, entonces con esto pisamos su valor

    };

    const updateData = (data) => {
        //cuando el map detecte que coinciden los id, que reemplace los valores
        let newData = db.map(el => el.id === data.id ? data : el);//if ternario. el else es ':'
        setDb(newData);

    };
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);
        //ponemos window porque si no tira error, no lo encuentra react dentro de sus funciones. (dice que pasa con alert y algunas mas)
        if (isDelete) {
            let newData = db.filter((item) => item.id !== id);
            setDb(newData);
        } else {
            return
        }

    };

    return (
        <div>
            <h2>CRUD APP</h2>

            {/**agregamos el article para hacerlo responsivo */}
            <article className="grid-1-2"> {/**index.css */}

                <CrudForm createData={createData} updateData={updateData}
                    dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}
                /> 
                <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} /> {/**comunicacion componentes hijos a padres 
                 * porque las funciones estan en el padre pero las llamamos desde los hijos. y a su vez se las damos al hijo para que pueda llamarlas cuando quiera
                */}
            </article>
        </div>
    )
}

export default CrudApp