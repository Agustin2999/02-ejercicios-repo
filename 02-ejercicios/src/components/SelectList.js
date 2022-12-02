import { useFetch } from "../hooks/useFetch";
import Loader from './Loader';
import Message from './Message';




const SelectList = ({ title, url, handleChange }) => {

    const { data, error, loading } = useFetch(url);// estrae esas 3 variables que retorna justamente useFetch

    console.log(data, error, loading);

    if (!data) return null; //es decir, si no tenemos datos traidos del useFetch, que no renderice al pedo

    if (error) {
        return (
            <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="red" />
        )
    }


    //le creamos el id como key
    let id = `select-${title}`;

    let label = title.charAt(0).toUpperCase() + title.slice(1); // elegimos la primera letra y la ponemos en mayuscula. con slice le decimos que empiece desde el 1
    // googlie y tambien se puede hacer title[0]



    //let options = data.response[title];//es para simplificar el map solamente
    let options = data[title]; //porque yo lo hice manual xd
    console.log(options);


    return (
        <>
            <label htmlFor={id}>{label}</label>

            {loading && <Loader />}
            <select name={id} id={id} onChange={handleChange}>
                <option value="">Elige un {title}</option>
                {data && options.map((elem) => {
                    return <option value={elem}>{elem}</option>
                })
                }
            </select>

        </>
    )

}

export default SelectList