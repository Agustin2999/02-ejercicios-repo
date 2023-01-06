//para simular otra pagina digamos. asi utilizamos query string
import { useParams } from 'react-router';

const Usuario = () => {
    //  let params = useParams();
    //console.log(params);

    let { username } = useParams(); //useParams es un hook

    return (
        <div>
            <h3>Perfil del usuario</h3>
            <p>Nombre: <b>{username }</b></p>
        </div>
    )
}

export default Usuario;





