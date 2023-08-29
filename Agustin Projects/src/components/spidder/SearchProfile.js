import React from 'react'
import { useState, useEffect } from 'react';
import MyProfile from './MyProfile';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';


const SearchProfile = ({ lstUsers, modificarArrayPostsInherited, lstAllPosts }) => {

    const [wantedUsers, setWantedUsers] = useState('');
    const [irAPerfil, setIrAPerfil] = useState();

    //let users = 0;
    //const navigate = useNavigate();

    const handleChangeInput = (e) => {
        setWantedUsers(e.target.value);
        setIrAPerfil()
    }

    // const modificarArrayPostsInherited2 = (idElemento, likeP, dislikeP, newNumLikeP, newNumDislikeP) => {
    //     modificarArrayPostsInherited(idElemento, likeP, dislikeP, newNumLikeP, newNumDislikeP);
    // }


    //algo que me dio don. aparentemente se renderiza cada vez que pase cualquier cosa en la pagina. probe  tirando aca suelto un alert("jajaja") y efectivamente lo comprobe
    const filteredUsers = lstUsers.filter((item) =>
        item.username.toLowerCase().includes(wantedUsers.toLowerCase())
    );

    // Lógica para determinar si no hay usuarios
    const noUsers = filteredUsers.length === 0;


    // const handleClickPerfil = () => {
    //     alert("redireccion")
    // }


    // const handleLinkClick = (item, lstAllPosts, modificarArrayPostsInherited) => {
    //     navigate("/components/spidder/MyProfile", {
    //         state: { currentUserObj: item, lstAllPosts, modificarArrayPostsInherited }

    //     });
    // };

    return (
        <>
            <h3 className="mb-3 mt-5r" >Buscar perfil</h3> {/*Search Profile*/}

            {/* input para buscar */}
            <div className="input-group">
                <input type="search" class="form-control" placeholder="Ingrese nombre de usuario"
                    aria-label="Ingrese nombre de usuario" aria-describedby="button-addon2"
                    onChange={(e) => handleChangeInput(e)} value={wantedUsers} />
            </div>

            <div className='sp-sp-divUsers'>
                {/* Lista de usuarios */}
                {wantedUsers != '' &&
                    <div className='sp-sp-div-ulUsers'>
                        {noUsers ? (
                            <p>No se encontraron usuarios</p>
                        ) : (
                            <ul className="sp-sp-ulUsers">

                                {filteredUsers.map((item) => (
                                    <li>
                                        <a
                                            //id="inputSpidderSearchProfile"
                                            // to="/components/spidder/MyProfile"
                                            onClick={() => {
                                                //console.log("ESTE ES EL ITEM:") console.log(item)
                                                setIrAPerfil(item)

                                                // navigate('/components/spidder/MyProfile',

                                                //  { replace:true, // ni se para que esta esto
                                                //  state: { currentUserObj: item, lstAllPosts,    funcionasa: ()=>alert("aaa")     }}
                                                //  //el problema es que no me deja pasar funciones, la que quiero pasar es modificarArrayPostsInherited
                                                //  // al final voy a usar el componente dentro de componente y listo,. 3/8/23

                                                // )
                                            }}

                                        //navigate(-1)es equivalente a hacer clic en el botón Atrás del navegador.

                                        // onClick={() => handleLinkClick(item, lstAllPosts, modificarArrayPostsInherited)}
                                        >
                                            {item.username}
                                        </a>

                                        {/* El componente <Link> de react-router-dom no acepta props adicionales que no sean los atributos estándar de un enlace (to, style, etc.). La forma correcta de pasar props personalizadas a través del componente <Link> es a través del estado de ubicación (state). */}
                                    </li>
                                )
                                )}
                            </ul>
                        )
                        }
                    </div>
                }


                {/* Mostrar perfil (luego de hacer click) */}
                {
                    irAPerfil &&
                    <>
                        <hr className='m-b-neg2r' />
                        <MyProfile currentUserObj={irAPerfil} lstAllPosts={lstAllPosts}
                            modificarArrayPostsInherited={modificarArrayPostsInherited} />

                    </>
                }

            </div>
        </>
    )
}


export default SearchProfile;


