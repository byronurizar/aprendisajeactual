const fs = require("fs");

const streamLectura = fs.createReadStream( "./archivos/mi_archivo.txt" , {encoding:'utf8'} );


streamLectura.on("open" , ()=>{
    console.log("abriendo archivo")
}).on("data" , (data)=>{
    console.log("----")
}).on('close', ()=>{
    console.log("archivo cerrado") 
}).on('error' , ()=>{
     console.log("error en el archivo")
});
 

//Los streams tiene eventos
//open evento abrir archivo
