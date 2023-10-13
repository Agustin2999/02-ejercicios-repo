import React from 'react'

const Message = ({ msg, bgColor }) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor
    }


    return (
        <div style={styles}>
            {/* <p>{msg}</p> */}
            <p dangerouslySetInnerHTML={{ __html: msg }}></p> {/**esta funcion es de react y es para inyectar codigo html. ej: <strong>asdasd</strong> */}
            {/**toma como codigo html el string que le pasemos. Dice el profe que no es buena practica */}
        </div>
    )
}

export default Message;