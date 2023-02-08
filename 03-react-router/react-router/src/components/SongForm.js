import React, { useState } from 'react';
 
const initialForm = {
    artist: "",
    song: ""
}
 
const SongForm = ({ handleSearch }) => {
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
 
    const handleSubmit = (e) => {  //Onsubmit del Form
        e.preventDefault(); //evitamos recarga
        console.log(form) //esto es lo ingresado en los inputs

        if (!form.artist || !form.song) { // comprueba si ningun input text es vacio
            alert('Datos incompletos');
            return;
        }

        handleSearch(form) //le manda el form al padre para que se haga la busqueda desde alli
        setForm(initialForm)
    }
 
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="artist" placeholder="Nombre del Intérprete" onChange={handleChange} value={form.artist} />
                <input type="text" name="song" placeholder="Nombre de la Canción" onChange={handleChange} value={form.song} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default SongForm;