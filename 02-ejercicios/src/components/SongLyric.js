const SongLyric = ({title, lyrics}) => {
    return (
        <section>
            <h3>{title}</h3>
            <blockquote style={{whiteSpace:"pre-wrap"}}>{lyrics}</blockquote> {/*es para citar palabra de otras personas*/ }
            {/**whiteSpace es para detectar saltos de linea e insertarlos */}
</section>
    )
}

export default SongLyric;