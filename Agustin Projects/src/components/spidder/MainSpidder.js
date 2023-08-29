import React from 'react'
import { useCallback, useState, useEffect, useRef } from 'react';
import Messages from './Messages';
import MyProfile from './MyProfile';
import Posts from './Posts';
import SearchProfile from './SearchProfile';
import './styleSpidder.css'



/*PALETA DE COLORES:
CC99A2
803945
FF738A
806065 
FFC0CB  
*/



const MainSpidder = () => {

    //probamos con ponerlo como useState
    const [posts, setPosts] = useState([
        {
            id: 30,
            urlImage: 'https://depor.com/resizer/IJdScw6LJEI_rGqtq4IWsKzmAFY=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/WUJYKEZKCBHCPECSBQJ6VOOSNA.jpg',
            username: 'valee',
            post: "Que ganas de estar de vacaciones",
            like: false,
            numLikes: 20,
            dislike: false,
            numDislikes: 1
        },
        {
            id: 10,
            urlImage: 'https://depor.com/resizer/IJdScw6LJEI_rGqtq4IWsKzmAFY=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/WUJYKEZKCBHCPECSBQJ6VOOSNA.jpg',
            //'https://www.clarin.com/img/2022/05/19/duki-el-primer-artista-de___LVGEhW9hu_2000x1500__1.jpg',
            username: 'valee',
            post: "Friooo volvee",
            like: false,
            numLikes: 4,
            dislike: false,
            numDislikes: 18
        },
        {
            id: 31,
            urlImage: 'https://www.infobae.com/new-resizer/O90piW_5Rslx2cWR58Esp0bWdXA=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/01/03161219/ecko-3.jpg',
            username: 'nacho65',
            post: "Me tiño de dorado 🤟",
            like: false,
            numLikes: 5,
            dislike: false,
            numDislikes: 1

        },
        {
            id: 33,
            urlImage: 'https://yt3.googleusercontent.com/HdH5kor0ojh40oI1ZesX8Qxli9lPqKmV5KhfiFjmHG29JBOpsJ0GN8Fx0dv_Aok4GnGq1ad8=s900-c-k-c0x00ffffff-no-rj',
            username: 'emanuel',
            post: ` Oíd, mortales, el grito sagrado
            Libertad, libertad, libertad
            Oíd el ruido de rotas cadenas
            Ved en trono a la noble igualdad
            Ya su trono dignísimo abrieron
            Las provincias unidas del sur
            Y los libres del mundo responden
            Al gran pueblo argentino ¡salud!
            Al gran pueblo argentino ¡salud!
            Y los libres del mundo responden
            Al gran pueblo argentino ¡salud!
            Y los libres del mundo responden
            Al gran pueblo argentino ¡salud! 🎵`,
            like: false,
            numLikes: 500,
            dislike: false,
            numDislikes: 11
        },

    ]);


    const [listUsers, setListUsers] = useState([
        {

            urlImage: 'https://depor.com/resizer/IJdScw6LJEI_rGqtq4IWsKzmAFY=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/WUJYKEZKCBHCPECSBQJ6VOOSNA.jpg',
            username: 'valee',
            fullname: 'Valentina Reina',
            description: "Prefiero 1 pajaro en la mano que 100 volando",
            followers: 65900000,
            followed: 972,
            posts: 2
        },
        {

            urlImage: 'https://www.infobae.com/new-resizer/O90piW_5Rslx2cWR58Esp0bWdXA=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/01/03161219/ecko-3.jpg',
            username: 'nacho65',
            fullname: 'Ignacio Retegui',
            description: "Me gusta el rock",
            followers: 3012,
            followed: 6001,
            posts: 1
        },
        {

            urlImage: 'https://yt3.googleusercontent.com/HdH5kor0ojh40oI1ZesX8Qxli9lPqKmV5KhfiFjmHG29JBOpsJ0GN8Fx0dv_Aok4GnGq1ad8=s900-c-k-c0x00ffffff-no-rj',
            username: 'emanuel',
            fullname: 'Emmanuel Ayala',
            description: "Cantante - basquetbolista",
            followers: 1700000,
            followed: 5000,
            posts: 1
        },
    ]);


    const [selectedUser, setSelectedUser] = useState('');
    const [currentUser, setCurrentUser] = useState(false);
    const [currentPage, setCurrentPage] = useState('main');

    const [initialY, setInitialY] = useState(null);
    const [currentY, setCurrentY] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const [idToEdit, setIdToEdit] = useState();


    //Actualizar posts
    const refresh = (evento) => {
        //setea el Y inicial. Es para luego comparar con currentY y ver si fue lo suficientemente grande el desplazamiento como para actualizar
        setInitialY(evento.touches[0].clientY); //es la altura inicial del mouse al hacer click
        //console.log('%c se actualiza INICIAL'+ evento.touches[0].clientY, 'background: #222; color: blue')
    }
    const handleTouchStart = (event) => {
        //inicio de desplazamiento hacia abajo (actualizar posts)
        refresh(event)
        //tiene un pequeño error que es que cuando le das like, dislike o lo que sea, ingresa aca lo mismo (si fuese eficiente deberia ejecutarse solo cuando se arrastra)
    };
    const handleTouchMove = (event) => {
        //movimiento de desplazamiento hacia abajo (actualizar posts)
        setCurrentY(event.touches[0].clientY); // Mientras arrastras hacia abajo, se va actualizando currentY pixel por pixel digamos (para luego comparar si es suficientemente grande el desplazamiento como para actualizar)
        //toma la altura en Y del mouse clickeandose digamos
        //if (currentY - initialY > 100) { // Cambiar el estilo para mostrar el indicador visual de desplazamiento hacia abajo }
    };
    const handleTouchEnd = () => {
        //Cuando termina el desplazamiento hacia abajo (actualizar posts)
        if (currentY - initialY > 100) {
            //Si la diferencia entre currentY e initialY es mayor a 100 (indicando un gesto de desplazamiento hacia abajo suficientemente grande), se llama a la función refill() para realizar la acción de actualización de contenido.
            // Llamar a la función de actualización o realizar la acción de actualización aquí
            refill();
        }

        //reinicia valores
        setCurrentY(null);
        setInitialY(null);
    };



    const refill = () => {

        //se ejecuta cuando se actualiza por desplazamiento o cuando se agrega un post
        setIsRefreshing(true); //para spinner
        setTimeout(() => {
            setIsRefreshing(false);
            function shuffleArray(array) { //aleatorizar array de posteos
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
            shuffleArray(posts)
        }, 1000);
    }


    // const handleClickHome = () => {
    //     refill();
    // }


    //Modal
    const mostrarModal = () => {
        document.getElementById("modalBackground").style.display = "block";
        document.getElementById("modal").style.display = "block";
    }
    const cerrarModal = () => {
        document.getElementById("modalBackground").style.display = "none";
        document.getElementById("modal").style.display = "none";
    }


    const handleClickPosting = (e) => { //click en 'Publicar' (que a veces es 'editar')

        let textArea = document.getElementById('textAreaNewPost');
        let newPost = textArea.value;

        if (newPost != null && newPost != '') {  //Que no esté vacio el textArea

            //obtiene el id mayor (para luego sumarle +1)
            let idMayor = 0;
            posts.forEach(element => {
                if (element.id > idMayor) {
                    idMayor = element.id
                }
            });

            //saca el objeto completo del usuario actual
            let usuarioActual = listUsers.filter((elem) => { return (elem.username.toLowerCase() == currentUser.toLowerCase()) });
            //console.log(usuarioActual[0].fullname)


            if (idToEdit) {//modifica elemento (editar posteo)

                // console.log("%c idToEdit: " + idToEdit, "background:red")
                // console.log("%c newPost: " + newPost, "background:red")
                setPosts(posts.map((e) => {
                    if (idToEdit.toString() == e.id.toString()) {
                        console.log("encontro coincidencia para editar registro")
                        return {
                            id: idToEdit,
                            urlImage: e.urlImage,
                            username: e.username,
                            post: newPost,
                            like: e.like,
                            dislike: e.dislike,
                            numLikes: e.numLikes,
                            numDislikes: e.numDislikes
                        }
                    }
                    return e
                })
                )

                //vaciamos idToEdit
                setIdToEdit(null)

            } else {
                posts.push(
                    {
                        id: idMayor + 1,
                        urlImage: usuarioActual[0].urlImage,//'https://www.clarin.com/img/2022/05/19/duki-el-primer-artista-de___LVGEhW9hu_2000x1500__1.jpg',
                        username: usuarioActual[0].username,//'__valuxx',
                        post: newPost,
                        like: false,
                        dislike: false,
                        numLikes: 0,
                        numDislikes: 0
                    })
            }

            textArea.value = "";

            refill(); //recargar posteos
        }
    }





    /*Para evitar ese problema, puedes aplicar la solución que te proporcioné anteriormente 
    usando useCallback para envolver la función modificarArrayPosts. Esto asegurará que 
    la función se mantenga constante a lo largo de las renderizaciones y evitará comportamientos inesperados.*/
    // const modificarArrayPosts = (idElemento, likeP, dislikeP) => {
    //     alert(idElemento)
    //     let editPosts = posts.map((e) => {
    //         if (e.id === idElemento) {
    //             e.like = likeP;
    //             e.dislike = dislikeP;
    //         }
    //         return e
    //     })

    //     setPosts(editPosts)
    //     console.log(posts)
    // }


    const modificarArrayPosts = useCallback((idElemento, likeP, dislikeP, newNumLikeP, newNumDislikeP) => {
        let editPosts = posts.map((e) => {
            if (e.id === idElemento) {
                e.like = likeP;
                e.dislike = dislikeP;

                e.numLikes = newNumLikeP;
                e.numDislikes = newNumDislikeP;
            }
            return e; //retorna elemento modificado o no modificado
        });

        //console.log('%c mainSpidder-modificarArrayPosts', "background:blue")
        setPosts(editPosts);
        //console.log(posts);
    }, [posts]);
    /*Se utiliza el hook useCallback para envolver esta función. La razón de usar useCallback es 
    optimizar el rendimiento. Al pasar [posts] como segundo argumento a useCallback, se asegura 
    que la función solo se vuelva a crear si el valor de posts cambia. Esto ayuda a evitar 
    recreaciones innecesarias de la función en re-renderizaciones del componente.
    
    En React, cuando se renderiza un componente, las funciones dentro de ese componente se crean 
    nuevamente. Esto no es un problema para funciones pequeñas y simples, pero puede convertirse 
    en un problema de rendimiento si se tienen funciones más complejas o si se utilizan en muchos 
    lugares.

    El hook useCallback se utiliza para "memorizar" una función, lo que significa que la función 
    se mantendrá igual entre renderizaciones a menos que sus dependencias cambien. Las dependencias 
    se pasan como un segundo argumento al useCallback. Si las dependencias no cambian, React 
    reutiliza la función previamente memorizada, evitando así la creación innecesaria de nuevas 
    instancias de la función en cada renderización.

    useCallback es útil cuando tienes funciones que se utilizan como dependencias en otros hooks o como props para componentes hijos.

    En conclusion no se porque se hizo callback en esta funcion. Pero me suena que habia algun error o algo hacia mal entonces con esto se resolvió
    */







    //para el 'leer mas' (al final se hizo pero en cada posts. y era medio obvio que tenia que ser ahi, no se xq lo hice aca)
    // const [expanded, setExpanded] = useState(false);
    // const [isAnimating, setIsAnimating] = useState(false);

    // const handleToggleContent = (e) => {
    //     e.preventDefault();
    //     if (!isAnimating) {
    //         setIsAnimating(true);
    //         setTimeout(() => {
    //             setExpanded(!expanded);
    //             setIsAnimating(false);
    //         }, 300); // Ajusta el tiempo de animación según tus necesidades
    //     }
    // };





    //Usuario seleccionado para iniciar sesion    
    const handleChangeSelectUsers = (event) => {
        //cuando cambias los valores del select user
        setSelectedUser(event.target.value);
    };

    const loginUser = () => {
        //cuando haces click en ingresar, te toma el valor del usuario seleccionado
        setCurrentUser(selectedUser)
    }

    const handleLogOut = () => {
        if (window.confirm("¿Desea cerrar la sesión actual?")) {
            setCurrentUser(false)
        }
    }



    //Cambiar pagina
    const changePage = (page) => {
        setCurrentPage(page);

        // achicar nuevamente la barra de navegacion bootstrap
        // Obtener el botón por su id (el boton de menu hamburguesa)
        const toggleButton = document.getElementById('toggleButtonBootstrap');

        // Simular un clic en el botón
        toggleButton.click();
    }

    const handleClickCancelEdit = () => {
        setIdToEdit();
        document.getElementById('textAreaNewPost').value = "";
    }


    return (
        <div className="sp-divBody">
            {/*info del proyecto*/}
            <img onClick={mostrarModal} className="sp-info-img sp-rotateImg" src="https://img.freepik.com/iconos-gratis/logotipo-informacion-circulo_318-9441.jpg?w=360" width="80px" alt="info" />
            {/* https://img2.freepng.es/20180712/rsk/kisspng-computer-icons-button-information-kitesurf-nelson-about-5b47dc39dc3ca3.5082828615314360899021.jpg */}

            {/* Fondo oscuro   */}
            <div className="sp-modal-background" id="modalBackground"></div>

            {/* Contenedor de la ventana modal   */}
            <div className="sp-modal" id="modal">
                <h2>Spidder. La red social</h2>
                <p>Este es un proyecto de una red social hecha principalmente en version mobile. Se aplica React.js, Bootstrap, CSS.</p>
                <button onClick={cerrarModal}>Cerrar</button>
            </div>


            {/* Pagina de login o menu principal(con nav)*/}
            {!currentUser &&
                <>
                    <div className="t-a_center" >
                        <h4>Iniciar Sesión</h4>
                        <div className="sp-login-divMenor" >
                            <p>Elija un usuario</p>
                            <select className="sp-login-select" name="select" value={selectedUser} onChange={handleChangeSelectUsers}>
                                {
                                    listUsers.map((element, index) => {
                                        return (
                                            <option key={index} value={element.username}>{element.username}</option>)
                                    })}
                            </select>
                        </div>

                        <div className="sp-login-divMenores">
                            <button onClick={loginUser} >Ingresar</button>
                        </div>
                    </div>
                </>
                ||
                <>
                    <div className="sp-ms-divGeneralNav" >

                        <nav className="navbar navbar-expand-lg bg-body-tertiary sp-ms-divGeneralNav-nav" >
                            <div className="container-fluid sp-ms-divGeneralNav-nav-div" >
                                <a className="navbar-brand cur-pt" onClick={() => { setCurrentPage('main'); setTimeout(() => { refill() }, 100); }} >Spidder</a>
                                <button id="toggleButtonBootstrap" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                {/*Menues  */}
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">

                                        <a className="nav-link cur-pt c-blk" onClick={() => { changePage('searchProfile') }} >Buscar perfil</a>

                                        {/* Menu responsive */}
                                        <a className="nav-link sp-ms-optionsMenuRes c-blk" onClick={() => { changePage('messages') }}>Mensajes</a>
                                        <a className="nav-link active sp-ms-optionsMenuRes c-blk" onClick={() => { changePage('myProfile') }}>Mi perfil</a>
                                        <a className="nav-link sp-ms-optionsMenuRes"  >Cambiar contraseña</a>
                                        <a className="nav-link sp-ms-optionsMenuRes c-blk" onClick={handleLogOut}>Cerrar sesion</a>



                                        {/* MENU NO RESPONSIVE */}
                                        <a className="nav-link cur-pt c-blk" onClick={() => { changePage('messages') }}>Mensajes</a>
                                        <li className="nav-item dropdown sp-ms-optionsNoMenuRes" >
                                            <a className="nav-link dropdown-toggle cur-pt c-blk" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                                Perfil
                                            </a>
                                            <ul className="dropdown-menu">
                                                {/* <li><a className="dropdown-item"  style={{cursor:'pointer'}}  onClick={() => { setCurrentPage('searchProfile') }} >Buscar perfil</a></li> */}

                                                <li><a className="dropdown-item cur-pt c-blk" onClick={() => { setCurrentPage('myProfile') }}>Mi perfil</a></li>
                                                <li><a className="dropdown-item cur-pt c-blk">Cambiar contraseña</a></li>
                                                <li>< a className="dropdown-item cur-pt c-blk" onClick={handleLogOut}>Cerrar sesion</a></li>

                                            </ul>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>



                    {/* Pagina principal (main) */}
                    {currentPage == 'main' ?
                        <>
                            {/* DESPLAZAMIENTO INSTAGRAM */}
                            <div className="sp-ms-DivMayor" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}>
                                <div className="sp-ms-DivDivTextAreaWrite">

                                    <article className="sp-ms-DivTextAreaWrite">
                                        <textarea className="form-control sp-TextAreaWrite" placeholder="Escribe algo..." id="textAreaNewPost"></textarea>
                                        {/* <label for="floatingTextarea2">Comments</label> */}
                                    </article>
                                    {idToEdit != null &&
                                        <button type="button" class="btn btn-primary sp-btn-post" className="sp-ms-DivDivTextAreaWrite-btn mr-05r"
                                            onClick={handleClickCancelEdit}>Cancelar</button>
                                    }
                                    <button type="button" class="btn btn-primary sp-btn-post" className="sp-ms-DivDivTextAreaWrite-btn"
                                        onClick={handleClickPosting}>{idToEdit != null ? "Editar" : "Publicar"}</button>
                                </div>


                                {/*Spinner actualizar*/}
                                {isRefreshing ? <>
                                    <p>Actualizando... </p>
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only"></span>
                                    </div>
                                </>
                                    : null
                                }


                                {/* Posteos */}
                                {
                                    posts.map((elemento) => (
                                        <Posts urlImage={elemento.urlImage} username={elemento.username} post={elemento.post}
                                            likeP={elemento.like} dislikeP={elemento.dislike} modificarArrayPosts={modificarArrayPosts} id={elemento.id}
                                            numLikes={elemento.numLikes} numDislikes={elemento.numDislikes}
                                            currentUser={currentUser} setIdToEdit={setIdToEdit}
                                        />
                                    ))
                                }
                            </div>
                        </>
                        : ''
                    }



                    {/* Pagina -Mi Perfil- */}
                    {
                        currentPage == 'myProfile' ?
                            <>
                                <MyProfile currentUserObj=
                                    {
                                        listUsers.filter((elem) => { return (elem.username.toLowerCase() == currentUser.toLowerCase()) })
                                        //devolvemos el usuario actual (objeto)
                                    }

                                    lstAllPosts={posts}
                                    modificarArrayPostsInherited={modificarArrayPosts}
                                />
                            </>
                            : ''
                    }



                    {/* Pagina -Buscar Perfil- */}
                    {
                        currentPage == 'searchProfile' ?
                            <>
                                <SearchProfile lstUsers={listUsers} lstAllPosts={posts}
                                    modificarArrayPostsInherited={modificarArrayPosts}
                                />
                            </>
                            : ''
                    }





                    {/* Pagina -Mensajes- Messages */}
                    {
                        currentPage == 'messages' ?
                            <>
                                {/* En progreso... */}
                                <Messages />
                            </>
                            : ''
                    }
                </>
            }
        </div>
    )
}


export default MainSpidder;


//optimizado 10/8/23





/*
resultado de Validacion de usuario 15/8/23
no tiene seguidos. L
los likes se marcan mal (capaz poniendo cursor pointer deje de joder). L
Recarga no anda, porque se recarga la pagina (lo mismo dejar) y poner para que se recarge cuando haces click en spidder.L

voy a agregarle edicion de post, despues ver que otra cosa se le puede agregar (mensajes capaz)L. mensaje queda para mas adelante



seguir aca 17/8/23. Estoy viendo como filtrar los chats de acuerdo al input de busqueda, aunque lo podria dejar para mas adelante cierto? si(22/8/23)

crear variable local nomas aca en messages para hacer esta logica de los mensajes digamos, chat / conversasion. queda para mas adelante(22/8/23)

*/