//un helper para el profe es un ayudador. algo que no tiene ui (interfaz) pero te ayuda a resolver algo mediante una funcion o lo que sea
//ej. un helper que te pase la fecha de 01/01/2000 a Lunes 1 de enero de 2000

//se diferencia de un hook personalizado xq un hook personalizado usa a su vez hooks de react. esto no
//y bueno en este caso este helper NO es react, es js puro. es decir, se puede reutilizar en todos lados

export const helpHttp = () => {
    const customFetch = (endpoint, options) => { //a este lo usan get, post, put y del
        const defaultHeader = {
            accept: "application/json", //es como contentype pero menos estricto, es como decirle: acepto si me traes json, pero si hay otro no hay drama
        };

        //abort controler es para que cando mandemos una peticion y no nos respondan del otro lado, la podamos abortar sin esperar como locos (yo pensaba que tiraba error pero segun el profe carga y carga y no pasa nada)
        const controller = new AbortController(); // puede andar lento el internet del servidor al que le estamos consultando
        options.signal = controller.signal;

        //si viene metodo que ponga metodo (post, put, delete), si no, que ponga GET que es el por defecto
        options.method = options.method || "GET"; //operador de cortocircuito le dice a ||

        //aca mezclamos las cabeceras que posiblemente traeria, con las defaultHeaders que puse mas arriba
        options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;
        //                                   con esto juntamos dos objetos hijos en un objeto padre


        options.body = JSON.stringify(options.body) || false;//esto lo hace porque no se puede enviar body vacio. y con esto basicamente le avisamos que la peticion no necesita body (puede ser get,etc)

        if (!options.body) delete options.body;
        //nota: no se pueden mandar OPTIONS con body vacio

        console.log("options:")
        console.log(options);

        setTimeout(() => { //si tarda la respuesta, que me saque
            //controller nos permite abortar una peticion
            console.log("timeOUT")
            return controller.abort()
        }, 3000); //es como que declara el set time out y la ejecucion del programa sigue. si llega al return antes de los 3000 es como que no le da bola al settimeout, pero si no llega, se corta



        console.log('Fetcheado:')
        console.log(endpoint, options)
        return fetch(endpoint, options)
            .then(res => res.ok ? res.json() : Promise.reject(
                {//creo que todo esto hace que vaya al catch de abajo tambien
                    err: true,
                    status: res.status || "00", //esto devuelve el codigo del error(404,500, etc) 
                    //el or se le llama operador de cortocircuito
                    statusText: res.statusText || "Ocurrió un error"
                }
            ))
            .catch((err) => err)
    }







    const get = (url, options = {}) => { //aca lo que hicimos fue 'definicion de parametros por defecto'. hace lo mismo que hizo marce loza en acceso_arcgis.py. digamos, si no le mandamos ese valor, que lo tome por defecto a lo que nosotros igualemos aca
        console.log(url)
        return customFetch(url, options)
    }

    const post = (url, options = {}) => {
        options.method = 'POST';
        return customFetch(url, options)
    }
    const put = (url, options = {}) => {
        console.log("llego al put: ")
        console.log(url, options)
        options.method = 'PUT';
        return customFetch(url, options)
    }
    const del = (url, options = {}) => {
        options.method = 'DELETE';
        return customFetch(url, options)
    }

    return {  //es como que haga get:get, post:post
        get, post, put, del
    }
}