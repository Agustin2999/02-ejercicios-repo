import React, { useState } from 'react';
import './styleSpidder.css';


const ConversationMessage = ({ isConversation, setIsConversation }) => {

    return (
        <>

            <h3>aca van los mensajes (En progreso...)</h3>
            <a onClick={() => { setIsConversation(!isConversation) }}>VOLVER</a>
        </>

    );
};

export default ConversationMessage;

