import { useModal } from "../hooks/useModal";
import Modal from "./Modal"
import ModalPortal from "./ModalPortal"

// componentes de proyectos viejos que vamos a reutilizar
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";


const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false); //es como un destructuring de array. es lo que hay en el return del useModal.js que es hook personalizado
    //le ponemos 1 para asi poder llamar varias veces e ir creando otras variables. ej, la numero dos puede controlar otra ventana modal. sin que se pisen sus valores entre si

    const [isOpenModal2, openModal2, closeModal2] = useModal(false);

    //  modal de contact form
    const [isOpenContact, openModalContact, closeModalContact] = useModal(false);

    //  modal de song search
    const [isOpenSong, openModalSong, closeModalSong] = useModal(false);

    //Portal
    const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/400/400/animals" alt="animals" />
            </Modal>{/*gracias a children podemos usar etiqueta de apertura y de cierre */}
            {/** placeimg sitio donde hay imagenes gratis, donde le pones la medida */}


            <button onClick={openModal2} >Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Otro modal</h3>
                <p> lorem asasdasdasdasd </p>
                <img src="https://placeimg.com/400/400/nature" alt="nature" />
            </Modal>

            <button onClick={openModalContact} >Contact form(de proyecto anterior) </button>
            <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
                <ContactForm />
            </Modal>

            <button onClick={openModalSong} >buscador de canciones(de proyecto anterior) </button>
            <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
                <SongSearch />
            </Modal>


            {/*portal */}
            <button onClick={openModalPortal} >Modal en Portal</button>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                <h3>Este es el contenido de un modal que carga en otro nodo del DOM diferente a
                donde carga nuestra app de React, gracias a los Portales React Portal
                (otro div diferente al root)
                </h3>
                <p>modal portal</p>
                <img src="https://placeimg.com/400/400/tech" alt="Tech" />

            </ModalPortal>

        </div>
    )
}


export default Modals;















