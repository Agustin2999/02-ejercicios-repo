import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

import './styleSpidder.css';

const ChatMessage = ({ isConversation, setIsConversation }) => {

    return (
        <>

            <>
                <div style={{
                    width: "auto", background: 'linear-gradient(to right, #FF738A, pink, #FF738A)', margin: '0.5rem', padding: '0.3rem', paddingLeft: '0.5rem',
                    textAlign: 'left', cursor: 'pointer', borderRadius: '5px'
                }}
                    onClick={() => { setIsConversation(!isConversation) }}
                >

                    <section className="sp-ps-sectionProfile">
                        <img className="sp-ps-img" src="https://akamai.sscdn.co/letras/215x215/fotos/3/0/9/a/309a94393a56cf05a737cae858dfb2c9.jpg" />
                        <p style={{
                            background: '#FF738A',
                            display: 'inline-block',
                            marginTop: '0.3rem',
                            paddingLeft: '2rem',
                            paddingRight: '2rem',
                            borderRadius: '2rem'
                        }}>  Agustin </p>

                    </section>


                    <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>Hola hermano como estas?</p>

                </div>
            </>
        </>
    );
};

export default ChatMessage;

