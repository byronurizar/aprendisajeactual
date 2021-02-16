//Los pipes funcionan como una tuberia, si pensamos que un streams es un flujo de datos el pipe no permite enviar de untipo de stream a otro.
//direntes tipos de streams pueden interactuar en node atravez de un elemento llamado pipe

const fs = require("fs");

const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

streamLectura.pipe(streamEscritura); //Esto va canalizar la informacion de bayamos leyendo y solamente le decimos a donde vaya a dar

streamLectura.on("end" , () => {
    console.log("proceso finalizado");
});