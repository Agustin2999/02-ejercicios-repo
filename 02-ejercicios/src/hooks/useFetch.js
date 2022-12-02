//es un hook personalizado con la idea de traer datos y almacenarlos en variables de estado
import { useState, useEffect } from 'react';
//no es necesario llamar a React ya que es un hook que solo hace logica, NO hace diseño

export const useFetch = (url) => { //al no estar exportada defaultmente, cuando la importas si o si toma el nombre que tiene aca
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        //no se recomienda hacer directamente asyncrono el useeffect digamos ni el hook personalizado, por eso se hace la siguiente funcion:
        const fetchData = async () => {
            setLoading(true);

            try {

                const res = await fetch(url);

                if (!res.ok) {

                    let err = new Error("Error en la peticion Fetch");
                    err.status = res.status || "00"; // lo que le decimos es: si no trae status el res, lo seteamos en 00, para poder identificarlo como error
                    err.statusText = res.statusText || "Ocurrió un error";
                    throw err; //esto arroja el error al catch
                }

                //si no hubo error
                const json = await res.json();
                if (!signal.aborted) { //es preguntarle si todo esta bien. que NO se abortó por timeOut
                    setData(json);
                    setError(null);
                }

            } catch (error) { //viene del throw
                if (!signal.aborted) { //lo volvemos a poner ya que no todos los errores son signal aborted, puede que directamente tire error la api
                    setData(null);
                    setError(error);
                }
            }
            finally { //se ejecuta siempre. despues del try y el catch
                if (!signal.aborted) {
                    setLoading(false);
                }
            }


        }
        fetchData();

        return () => abortController.abort(); //es cuando termina el useEffect

    }, [url])

    return { data, error, loading }


}














