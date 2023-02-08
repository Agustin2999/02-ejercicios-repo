import Message from "./Message";
import SongArtist from "./SongArtist"
import SongLyric from "./SongLyric"


const SongDetails = ({ search, lyric, bio }) => {

    //para evitar renderizados al pedo
    if (!lyric || !bio) return null;

    return (
        < >
 
            {lyric.error|| lyric.err || lyric.name === "AbortError" ? <Message msg={`Error: no existe la cancion <em>${search.song}</em>`}  bgColor="#dc3545" /> : <SongLyric title={search.song} lyrics={lyric.lyrics} />}
            {/**AbortError es lo que devuelve abort controller si falló algo */}
            {bio.artists ?<SongArtist artist={bio.artists[0]} /> :  <Message msg={`Error: no existe el artista ${search.artist}`}  bgColor="#dc3545" />   }
            {/**artist en posicion 0 porque asi viene desde la api */}

        </>
    )
}

export default SongDetails;










