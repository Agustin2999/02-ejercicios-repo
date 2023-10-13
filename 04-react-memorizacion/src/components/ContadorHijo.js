import { memo, useMemo } from 'react';



const ContadorHijo = ({ contador, sumar, restar }) => {

    //para que esto no se renderize siempre, usamos useMemo
    // let superNumero = 0;

    // for (let i = 0; i< 1000 ; i++){
    //     superNumero ++;
    //     console.log("ja")
    // }


    //estamos memorizando un valor dado cierto proceso (NO una funcion, para eso se usa useCallback).
    //useMemo funciona por ej cuando tenes un valor ej let numero=100 en un contadorHijo, y queres evitar que se calcule otra vez cuando pase algo en el componente padre (que no le afecte de manera directa)
    const superNumero = useMemo(() => {
        let numero = 0;

        for (let i = 0; i < 1000; i++) {
            numero++;
            console.log("hy")
        }
        return numero;
    }, [])




    console.log('Hijo Contador se renderiza');

    return (
        <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }} > {/*no es recomendable poner asi los estilos pero no le importo al profe dijo xd*/}
            <h2>Hijo del Contador</h2>
            <h3>{contador}</h3>

            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>

            <h3>{superNumero}</h3>

        </div>
    )

    //el memo funciona sin funciones digamos(cuando el componente no recibe funciones por parametros. Aca cuando recibe suma y resta desde el componente padre, se rompe)
    //para eso se agrega en el componente padre el useCallback
}

export default memo(ContadorHijo); //con este memo, no se vuelve a renderizar al pedo.(se va a renderizar cuando sea necesario, es decir, cuando cambie algun valor de aqui)

/**miduDev: Por lo general es reecomendable que NO uses useCallback y useMemo para rendimiento, si no mas bien usarlo cuando es necesario en terminos de re-renderizado o cosas asi. Pero en rendimiento tiene muy poco impacto incluso nulo 
 

Comentario de FalconMasters: 
- usar useCallback y useMemo solo cuando son funciones grandes ej una funcion matematica muy grande, y quieres evitar que se vuelva a crear, pero por lo general no es necesario porque react es muy rapido
- React.Memo memoriza un componente, y solo se renderiza si sus props cambian. A diferencia del uso normal que si o si lo renderiza
- Cuando cambia el estado (state) el codigo de nuestro .js vuelve a ejecutarse
Son 3 cosas diferentes (aunque similares) useMemo, React.memo y useCallback
  
*/

