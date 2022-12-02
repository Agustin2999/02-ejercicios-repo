import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => { //vemos la propiedad children. es el componente hijo de un componente
    //todo componente tiene la capacidad de tener children

    const handleModalContainerClick = e => e.stopPropagation();
    //stop propagation es para decirle que NO herede eventos del padre(algo asi). Ejemplo, tenemos onclick mio y de mi papa, con el stop propagation al hacerme click solamente se ejecuta mi onclick, NO el de mi papa. caso contrario si no usamos el stop propagation

    return (
        <article className={`modal ${isOpen && "is-open"}`}
            onClick={closeModal}> {/**la mayoria de las ventanas modales hoy en dia si le haces click en la parte negra se cierra, entonces eso es lo que hacemos aca */}
            <div className="modal-container" onClick={handleModalContainerClick}> {/**para que al hacerse click sobre la parte blanca digamos no haga nada */}
                <button className="modal-close" onClick={closeModal}>X</button>

                {children} {/**hace referencia a lo que le pongamos dentro cuando lo llamenos ej <modal>aca va todo lo que queramos de children<modal/> */}

            </div>
        </article >
    )
}

export default Modal;

 


 
