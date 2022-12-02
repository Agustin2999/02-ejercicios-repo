import React, { useEffect, useState } from 'react';
import './estilos.css'

const negrita={
    fontWeight:'Bold' 
}

const Resultado = ({ elemento,prenda }) => {

    let imagenIcono = "";
    if (elemento == "pantalon") {
        imagenIcono = "https://images.vexels.com/media/users/3/239090/isolated/preview/0c5ef8866e5c56a2419d591d55fc5d8d-graphicicon-clothing-23.png";
    } else if (elemento == "remera") {
        imagenIcono = "https://cdn-icons-png.flaticon.com/512/13/13331.png";
    } else if (elemento == "campera") {
        imagenIcono = "https://i.pinimg.com/originals/e3/51/2a/e3512a4bbc08a4748a09403947b55bdf.png";
    }
 
    return (
        <>
            {
                <div class="divResultado">
                    <table className="centradoVerti">
                        <tbody>
                            <tr>
                                <td colSpan={"1"} className="centrado ">
                                    <img className="icono" src={imagenIcono} />
                                </td>
                                <td colSpan={"1"} style={negrita}>
                                { prenda ? prenda  : "-Vacio-" }
                              </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}
export default Resultado