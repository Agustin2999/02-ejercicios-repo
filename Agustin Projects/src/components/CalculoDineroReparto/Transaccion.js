const Transaccion = ({ transaccion }) => {

    const { sender, receiver, difference } = transaccion;

    return (
        <>
            <div className="divTransaccion">
                <p>
                    <strong>{sender[0].toUpperCase() + sender.substring(1)}</strong>    le debe a   <strong>{receiver[0].toUpperCase() + receiver.substring(1)}</strong>   la cantidad de  $<strong>
                        {
                            difference ?
                                (Number(difference.toFixed(2)))
                                :
                                ("")
                        }
                    </strong>
                </p>
            </div>
        </>
    )
}


export default Transaccion;