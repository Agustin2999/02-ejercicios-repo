import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

//lo que vamos a hacer es replicar un proyecto que tenia el profe en el curso de vainilla javascript que usa una api que valida los datos de un form, y lo envia por mail o algo asi
const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
};
const validationsForm = (form) => {
    let errors = {};


    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/; //creo que ^ ó . ó ambos significa this por ejemplo, y hace referencia al texto



    if (!form.name.trim()) { //trim es para omitir espacio en blanco principal o final
        errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) { //en el caso de que no este vacio el input, aca corroboramos que cumpla con la exprReg
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }



    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto";
    }



    if (!form.subject.trim()) {
        errors.subject = "El campo 'Asunto a tratar' es requerido";
    }



    if (!form.comments.trim()) {
        errors.comments = "El campo 'Comentarios' es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }

    return errors;
};


let styles = {
    fontWeight: "bold",
    color: "red"
};


const ContactForm = () => {

    //por qué crear hook personalizado: para sacar la logica de un componente que solo dibuja. basicamente separar grafico(ui) de cerebro
    const { form, errors, loading, response,
        handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm);

    return (
        <div>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Escribe tu nombre"
                    onBlur={handleBlur} onChange={handleChange} value={form.name}
                    required />

                {errors.name && <p style={styles}>{errors.name}</p>}


                <input type="email" name="email" placeholder="Escribe tu email"
                    onBlur={handleBlur} onChange={handleChange} value={form.email}
                    required />

                {errors.email && <p style={styles}>{errors.email}</p>}

                <input type="text" name="subject" placeholder="Asunto a tratar"
                    onBlur={handleBlur} onChange={handleChange} value={form.subject}
                    required />

                {errors.subject && <p style={styles}>{errors.subject}</p>}


                <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
                    onBlur={handleBlur} onChange={handleChange} value={form.comments}
                    required></textarea>
                {/* cols son los caracteres que acepta en horizontal */}
                {errors.comments && <p style={styles}>{errors.comments}</p>}


                <input type="submit" value="Enviar" />
            </form>


            {loading && <Loader />}
            {response && <Message msg="Los datos han sido enviados" bgColor="green" />}

        </div>
    )
}

export default ContactForm;

