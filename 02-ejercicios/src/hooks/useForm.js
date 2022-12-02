import { useState } from 'react';// no importa React porque no va a renderizar nada
import { helpHttp } from '../helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleBlur = (e) => { //trad difuminar
        //cuando nuestros elementos del formulario pierdan el foco en la pagina
        handleChange(e);
        setErrors(validateForm(form));  // puede almacenar por ej: comments: {el 'name' esta vacio}

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateForm(form));
        // console.log("OBJETO ERROR")
        // console.log(errors)
        if (Object.keys(errors).length === 0) { //si el objeto error es vacio, quiere decir que no hay error
            alert("Enviando formulario");
            setLoading(true);
            helpHttp().post(
                "https://formsubmit.co/ajax/aguucanovass@yahoo.com", //api gratuita para mandar mails
                {
                    body: form,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                })
                .then(res => { //el helper ya tiene un then
                    setLoading(false);
                    setResponse(true); //para que Aparezca el mensaje de advertencia

                    setForm(initialForm);

                    setTimeout(() => {
                        setResponse(false)  //para que Desaparezca el mensaje de advertencia
                    }, 5000);
                })

        } else {
            return;
        }
    }

    return {
        form, errors, loading, response,
        handleChange, handleBlur, handleSubmit
    }

};

//no se exporta default porque la idea es que conserve el nombre. si vos exportas por defecto despues le pones el nombre que quieras en el archivo receptor digamos








 
