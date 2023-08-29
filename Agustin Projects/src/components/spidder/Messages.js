import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import './styleSpidder.css';
import ConversationMessage from './ConversartionMessage';

const Messages = () => {

    const [isConversation, setIsConversation] = useState(false)


    const [wantedChats, setWantedChats] = useState()




    const handleChangeInput = (e) => {
        setWantedChats(e.target.value);

    }










    // const filteredUsers = lstUsers.filter((item) =>
    //     item.username.toLowerCase().includes(wantedChats.toLowerCase())
    // );

    // // Lógica para determinar si no hay usuarios coincidentes
    // const noUsers = filteredUsers.length === 0;






    return (
        <>


            <h3 className="mb-3 mt-5r">Mensajes</h3>
            {/* input para buscar */}
            {!isConversation &&
                <>
                    <div className="input-group ">

                        <input type="search" class="form-control" placeholder='Busque chat aqui'

                            aria-label="Enter username" aria-describedby="button-addon2"
                            onChange={(e) => handleChangeInput(e)} value={wantedChats} />
                    </div>
                    <ChatMessage isConversation={isConversation} setIsConversation={setIsConversation} />
                </>
            }

            {isConversation &&
                <>


                    <ConversationMessage isConversation={isConversation} setIsConversation={setIsConversation} />
                </>
            }


            {/* Lista de usuarios */}
            {/* {wantedUsers != '' &&
                <div>
                    {noUsers ? (
                        <p>No se encontraron usuarios</p>
                    ) : (
                        <ul className="sp-sp-ulUsers">

                            {filteredUsers.map((item) => (
                                <li>
                                    <a  onClick={() => { setIrAPerfil(item)}}>
                                        {item.username}
                                    </a>
                                </li>
                            )
                            )}
                        </ul>
                    )
                    }
                </div>
            }


              Mostrar perfil (luego de hacer click)  
            {
                irAPerfil &&
                <>
                    <hr className='m-b-neg2r' />
                    <MyProfile currentUserObj={irAPerfil} lstAllPosts={lstAllPosts}
                        modificarArrayPostsInherited={modificarArrayPostsInherited} />
                </>
            } */}
        </>
























    );
};

export default Messages;