import React, { useState } from 'react'
import Posts from './Posts';
import { useLocation } from 'react-router-dom';


// En lugar de desestructurar directamente las propiedades en el componente MyProfile, puedes modificarlo para 
//aceptar un objeto props. De esta manera, cualquier componente que lo utilice puede pasar las props 
//necesarias sin afectar el código existente. Esto permite una mayor flexibilidad y reutilización del 
//componente en diferentes partes de la aplicación. (usar MyProfile = (props) y luego destructurar dentro)

const MyProfile = ({ currentUserObj, lstAllPosts, modificarArrayPostsInherited }) => {

    //se intento algo con location.state pero no funciono

    //se cambió al usar searchProfile
    let { description, followed, followers, fullname, posts,
        urlImage, username } = currentUserObj[0] || currentUserObj;//0 porque asi esta hecho no se (asi te pide desde la pagina comun de main spidder); el otro (sin [0]) es para searchprofile

    let esMiPerfilPropio = currentUserObj[0] ? true : false;//es para ver si viene por search profile o por perfil propio myprofile


    let lstAllPostsFiltrado = lstAllPosts.filter((elem) => { return (elem.username.toLowerCase() == username.toLowerCase()) });

    //reducir numero de followers/followed
    const reducirNumero = (number) => {
        let returnValue = number;
        if (number.toString().length > 3) {

            //Si es millon o mas
            if (number.toString().length > 5) {
                returnValue = number.toString().substring(0, number.toString().length - 5) + "." + number.toString().substring(1, 2);
                if (returnValue.endsWith(".0")) {//si termina redondo
                    returnValue = returnValue.substring(0, number.toString().length - 2);
                }
                returnValue = returnValue + "M";

            } else { //entonces es mil o mas
                returnValue = number.toString().substring(0, number.toString().length - 2) + "." + number.toString().substring(1, 2);
                if (returnValue.endsWith(".0")) {//si termina redondo
                    returnValue = returnValue.substring(0, number.toString().length - 2);
                }
                returnValue = returnValue + "K";
            }

        }
        //console.log("valor " + returnValue)
        return returnValue
    }



    return (
        <>
            <div className="sp-myprof-div-profile">

                {
                    esMiPerfilPropio &&
                    <h3>Mi perfil</h3>
                }

                <img src={urlImage} width="200px" alt="image-profile" />
                <h5 className="sp-myprof-div-profile-h5-username ">{username}</h5>
                <p className="t-a-left  ml-4r-noresponsive">{fullname}</p> {/* Valentina Reina */}

                <p className="t-a-left  ml-4r-noresponsive"  >_<br />{description}<br />_</p>
                {/* Descripcion: Prefiero 1000 pajaros en la mano que uno volando. AESTETIC SIEMPRE */}

                <section className="sp-prof-sec-follow m-1r">
                    <ul className="sp-prof-sec-ul-follow">
                        <li className="disp-in-bl">Seguidores <b>{reducirNumero(followers)}</b></li> {/**65.9m */}
                        <li className="disp-in-bl">Seguidos <b>{reducirNumero(followed)}</b></li>
                    </ul>
                </section>

                <h6 className='t-a-left m-1r ml-4r-noresponsive'>Mis Publicaciones {"(" + lstAllPostsFiltrado.length + ")"}</h6>
                {/* antes tenia solo 'posts', que contaba la cantidad de publicaciones en el array original, pero no contaba los agregados recientemente */}

                {
                    lstAllPostsFiltrado
                        .map((elemento) =>
                        (
                            <Posts urlImage={elemento.urlImage} username={elemento.username} post={elemento.post}
                                likeP={elemento.like} dislikeP={elemento.dislike} modificarArrayPosts={modificarArrayPostsInherited} id={elemento.id}
                                numLikes={elemento.numLikes} numDislikes={elemento.numDislikes}
                            />
                        )
                        )
                }
            </div>
        </>
    )
}


export default MyProfile;


// optimizado 10/8/23