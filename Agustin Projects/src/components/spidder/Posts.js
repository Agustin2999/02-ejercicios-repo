import React from 'react'
import { useState, useEffect } from 'react';
import ReadMoreText from './ReadMoreText';


const Posts = ({ urlImage, username, post, likeP, dislikeP, modificarArrayPosts, id, numLikes, numDislikes, currentUser, setIdToEdit }) => {

  const [isDislike, setIsDislike] = useState(false)
  const [isLike, setIsLike] = useState(false)

  const [newNumLike, setNewNumLike] = useState(numLikes);
  const [newNumDislike, setNewNumDislike] = useState(numDislikes);

  const [mostrarToast, setMostrarToast] = useState(false);

  let isCurrentUser = username == currentUser;


  const handleLikeDislike = (e) => {
    let btnSelecc = e.target.id;
    let previousLike;
    let previousDislike;

    if (btnSelecc == 'sp-ps-bt-like') { //si es like
      setIsLike((prevIsLike) => {
        previousLike = prevIsLike; //iguala la variable previa
        return !prevIsLike; //le pone el valor contrario
      });
      /*En otras palabras, prevIsLike representa el valor actual de 
       la variable de estado isLike en el momento en que se llama a la función(es decir, el que va a ser el valor previo porque se lo cambiamos con !).*/


      if (previousLike) {
        setNewNumLike(newNumLike - 1); //si tenia like previamente, que le reste 1
      } else {
        setNewNumLike(newNumLike + 1);
      }

    } else {  //dislike
      setIsDislike((prevIsDislike) => {
        previousDislike = prevIsDislike;
        return !prevIsDislike
      });


      if (previousDislike) {
        setNewNumDislike(newNumDislike - 1);
      } else {
        setNewNumDislike(newNumDislike + 1);
      }
    }

    //  console.log('%c Previous like', 'background:red')
    // console.log(previousLike)
  };



  useEffect(() => {
    modificarArrayPosts(id, isLike, isDislike, newNumLike, newNumDislike);//se va hacia mainSpidder
  }, [isLike, isDislike]);
  //error que tenia de renderizado retardado era porque hacia setlike/dislike e inmediatamente llamaba a modificarArrayPosts
  //thanks gpt



  function copiarAlPortapapeles() {
    let texto = post;
    let author = username;

    // Crea un elemento de entrada de texto temporal
    const elementoTemporal = document.createElement('input');
    elementoTemporal.value = texto + ". -" + author;

    // Agrega el elemento temporal al documento
    document.body.appendChild(elementoTemporal);

    // Selecciona el contenido del elemento
    elementoTemporal.select();

    // Ejecuta el comando de copiar
    document.execCommand('copy');

    // Elimina el elemento temporal
    document.body.removeChild(elementoTemporal);

    handleMostrarToast()
  }



  const handleMostrarToast = () => {
    setMostrarToast(true);
    setTimeout(() => {
      setMostrarToast(false);
    }, 2500); // Duración del toast en milisegundos
  };


  const editPost = () => {
    // document.querySelector('.sp-ms-DivMayor')
    // .scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // }); no es necesario porque con el focus ya está

    document.getElementById('textAreaNewPost').value = post
    document.getElementById('textAreaNewPost').focus();

    setIdToEdit(id);//id viene como prop
  }



  return (
    <>
      <article className="sp-ps-articlePost" style={{ position: 'relative' }}>

        {/* Boton editar publicacion */}
        {isCurrentUser &&
          <>
            <span style={{ cursor: 'pointer', position: 'absolute', marginRight: '0', top: '.8rem', right: '.8rem' }}
              onClick={() => { editPost() }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </span>
          </>
        }


        <section className="sp-ps-sectionProfile">
          <img className="sp-ps-img" src={urlImage} />
          <p className="sp-ps-publisher">{username}</p>
        </section>


        {/* Readmore porque es para el cartelito "leer mas..." */}
        <ReadMoreText text={post} maxCharCount={100} />


        <div className='m-b-0'>
          {/* Antes de ser botones eran span */}
          <a className={!likeP ? "sp-ps-reactions" : "sp-ps-reactions sp-ps-reactions_click"}
            id="sp-ps-bt-like" onClick={(e) => handleLikeDislike(e)}>👍</a>
          <span>{numLikes}</span>
          <a className={!dislikeP ? "sp-ps-reactions" : "sp-ps-reactions sp-ps-reactions_click"}
            id="sp-ps-bt-dislike" onClick={(e) => handleLikeDislike(e)}>👎</a>
          <span>{numDislikes}</span>
          <span className="sp-ps-reactions" onClick={copiarAlPortapapeles}>📄</span>
        </div>

      </article>

      <div >
        <div className={mostrarToast ? "sp-ps-toast show" : "sp-ps-toast hide"}>
          {/* Copied post */}
          Publicación copiada
        </div>
      </div>
    </>
  )
}


export default Posts;


