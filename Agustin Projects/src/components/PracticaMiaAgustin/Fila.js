import React, { useEffect, useState } from 'react';
import './estilos.css'

const Fila = ({ prenda, ponerseRopa,editRopa }) => {
    const { apodo, elemento, especial_para, id } = prenda;



    /*
    
    div style={"background-color:#6e91ff; height:auto;width:100%;padding:10px"}
     table  style={"table-layout:fixed; width:100%"}
    td  style={"border-right:1px solid white;text-align:center"}
    
    td  style={"padding:10px;color:white"}
    
    
    */
    let imagenIcono = "";
    if (elemento == "Pantalon") {
        imagenIcono = "https://images.vexels.com/media/users/3/239090/isolated/preview/0c5ef8866e5c56a2419d591d55fc5d8d-graphicicon-clothing-23.png";
    } else if (elemento == "Remera") {

        imagenIcono = "https://cdn-icons-png.flaticon.com/512/13/13331.png";
    } else if (elemento == "Campera") {
        imagenIcono = "https://i.pinimg.com/originals/e3/51/2a/e3512a4bbc08a4748a09403947b55bdf.png";
    } else if (elemento == "Buzo") {
        imagenIcono = "https://cdn-icons-png.flaticon.com/512/88/88802.png";
    }


    // const handlepum = (id,e) => {
    //     console.log(e.target);
    //     //imprimir el id aca
    //     console.log(id ) // funciona joya

    // }
 
    return (
        <>
            {
                <div className="tarjeta" >
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={"1"} className="centrado">
                                    <img className="icono" src={imagenIcono} />
                                </td>
                                <td colSpan={"4"}>
                                    <p><strong> {apodo}</strong> </p>
                                    <p>{`Elemento: ${elemento} | Especial para: ${especial_para}`}</p>
                                </td>
                                <td colSpan={"0.5"} >
                                    <a className="btnElegirPrenda" onClick={(e) => ponerseRopa(id, e)} > {/**pasarle el id por parametro de acuerdo a lo que seleccionó */}
                                        <img className="icono iconoImg" src={"https://thypix.com/wp-content/uploads/2020/04/white-arrow-5-700x368.png"} />
                                    </a>
                                    <a className="btnElegirPrenda" onClick={(e) => editRopa(id, e)} > {/**pasarle el id por parametro de acuerdo a lo que seleccionó */}
                                        <img className="icono iconoImg iconoImgModificar" src={"https://images.vexels.com/media/users/3/158697/isolated/preview/f05907348b99b6c2dd8cde0a2466f0af-lapiz-plano.png"} />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}
export default Fila