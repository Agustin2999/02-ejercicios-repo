
export const helpGetGSheets = (sheetID, sheetNameP, colNames, colSpendings) => {
    const sheetId = sheetID;

    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = sheetNameP.toLowerCase().trim(); //tenga o no mayuscula, lo busca igual. comprobado 27/4/23
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
                const jsonData = JSON.parse(rep.substring(47).slice(0, -2)); //es sobrante que trae el propio json 

                //Extract indexes de acuerdo al nombre de columna
                for (let i = 0; i < jsonData.table.cols.length; i++) {
                    if (jsonData.table.cols[i].label.toLowerCase().trim() == nombreColNombre) {
                        numColNombre = i;
                    }
                    if (jsonData.table.cols[i].label.toLowerCase().trim() == nombreColGasto) {
                        numColGasto = i;
                    }
                }


                //extract row data:
                jsonData.table.rows.forEach((item) => {//fila por fila
                    diccionario.push(
                        {
                            name: item.c[numColNombre].v,
                            spending: item.c[numColGasto].v
                        }
                        //c y v son algo propio del json de google
                        //c es un array de una fila completa, en donde tiene objetos segun columnas tenga
                    );
                })

                // console.log("%c retornado",   'background: #222; color: #bada55')
                // //console log con estilo style
                // console.log(diccionario)

                resolve(diccionario); //esto lo agregué porque tenia error de asyncronia. Entonces lo encerré en una promesa
            })
    })
}

 
