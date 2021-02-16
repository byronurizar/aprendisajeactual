const fs = require("fs");

var contenido = "1234567890";
var iteraciones = 15;


//La escritura con stream es más eficiente
//Un stream va escribiendo de manera asincrona y de manera progresiva y evita bloquear elciclo de los procesos de node.
const streamEscritura = fs.createWriteStream( "./archivos/mi_archivo.txt");

for (var i = 0; i < iteraciones; i++) {
    contenido += contenido;

    streamEscritura.write(contenido, res => {
        console.log("...");
    });
}

fs.writeFile("./archivos/mi_archivo3.txt" , contenido , ()=>{
    console.log("escritura directa finalizada");
});



