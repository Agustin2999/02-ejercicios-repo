import "./Modal.css";
//Importamos ReactDOM (asi como App.js)
import ReactDOM from "react-dom";


const ModalPortal = ({ children, isOpen, closeModal }) => {  
    
    const handleModalContainerClick = e => e.stopPropagation();
    
    return ReactDOM.createPortal( //le decimos que retorne en un portal
        <article className={`modal ${isOpen && "is-open"}`}
            onClick={closeModal}>  
            <div className="modal-container" onClick={handleModalContainerClick}> 
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}  
            </div>
        </article >
        ,
        document.getElementById("modal") //le pasamos el id del div en donde se va a insertar
    );
}

export default ModalPortal;


