//un helper es un ayudador. algo que no tiene ui (interfaz) pero te ayuda a resolver algo mediante una funcion o lo que sea
//ej. un helper que te pase la fecha de 01/01/2000 a Lunes 1 de enero de 2000

//se diferencia de un hook personalizado xq un hook personalizado usa a su vez hooks de react. esto no
//y bueno en este caso este helper NO es react, es js puro. es decir, se puede reutilizar en todos lados


export const helpGetGSheets = (sheetID, sheetNameP, colNames, colSpendings) => {
    const sheetId = sheetID;

    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = sheetNameP.toLowerCase().trim();
    const query = encodeURIComponent('Select *')
    const url = `${base}&sheet=${sheetName}&tq=${query}`

    var diccionario = []

    var nombreColNombre = colNames.toLowerCase().trim();
    var numColNombre;
    var nombreColGasto = colSpendings.toLowerCase().trim();
    var numColGasto;


    return new Promise((resolve, reject) => {


        fetch(url)
            .then(res => res.text())
            .then(rep => {
                //Remove additional text and extract only JSON:
                const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

                //Extract column labels and indexes
                for (let i = 0; i < jsonData.table.cols.length; i++) {
                    if (jsonData.table.cols[i].label.toLowerCase().trim() == nombreColNombre) {
                        numColNombre = i;
                    }
                    if (jsonData.table.cols[i].label.toLowerCase().trim() == nombreColGasto) {
                        numColGasto = i;
                    }
                }

                //extract row data:
                //console.log(jsonData.table.rows)
                jsonData.table.rows.forEach((item) => {

                    diccionario.push(
                        {
                            name: item.c[numColNombre].v,
                            spending: item.c[numColGasto].v
                        }
                    );
                })

                //console.log(diccionario)
                // console.log(diccionario )
                console.log("retornado")
                console.log(diccionario)

                resolve(diccionario);

            })



    })

}


