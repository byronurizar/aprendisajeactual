const fs = require("fs");
const { Duplex } = require("stream"); // son dobles y pueden tanto lectura como escritura.


const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

const reporte = new Duplex( {
    write(data, encode, callback){
        console.log(data)  //lOS STREAMS TOman informacion de una fuente de datos y la envian segun vaya llegando la información para evitar bloquear los procesos de nodejs
        /// para ver directamente el texto, reemplaza la llamada anterior por 
        console.log(data.toString()) 
        callback();
    },
    read(size){}
})


streamLectura.pipe(reporte).pipe(streamEscritura);
