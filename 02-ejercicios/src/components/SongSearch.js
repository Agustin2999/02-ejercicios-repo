//vamos a hacer un buscador de canciones. el profe supo hacerlo en vainilla js en sus cursos hace un tiempo
//responsivo

import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import { helpHttp } from "../helpers/helpHttp"


const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        if (search === null) return;

        //fetch async asincrono
        const fetchData = async () => {
            const { artist, song } = search;

            let artistUrl = `theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            //theaudiodb.com/api/v1/json/2/search.php?s=coldplay
            //https://theaudiodb.com/api_guide.php

            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            //https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
            //https://api.lyrics.ovh/v1/artist/title

            setLoading(true);



            const [artistRes, songRes] = await Promise.all([ //recibe un array con todas las peticiones fetch que queremos hacer
                helpHttp().get(artistUrl),//esto se guarda en artistRes y la de abajo en songRes. se van guardando de acuerdo al orden
                //helpHttp().get(songUrl)
                fetch(songUrl).then((res) => res.json())//esto dijeron en los comentarios de yt que hagamos. igual no me anda. dice que esta caido el servicio
            ])
            //  NO ME FUNCIONAN LAS API, DEBE SER POR PROBLEMA DE HTTPS ANDA A SABER. segun los comentarios de yt no soy el unico


            console.log(artistRes, songRes)

            setBio(artistRes);
            setLyric(songRes);

            setLoading(true);

            /*para probar Eddie Vedder, Society*/


        }

        fetchData();
    }, [search])






    const handleSearch = (data) => {
        console.log(data)
        setSearch(data)
    }




    return (
        <div>
            <h2>SongSearch</h2>
            <article className="grid-1-3">
                <SongForm handleSearch={handleSearch} />
                {loading && <Loader /> /*condicional render*/}
                {search && !loading && (<SongDetails search={search} lyric={lyric} bio={bio} />)}
                {/**cuando search tenga algo y loading sea falso renderiza song details */}

            </article>





        </div>
    )
}

export default SongSearch;