
const fs = require('fs');


console.time("tiempo de respuesta");


// //Esto es eficinete
// for(let i=0; i<= 10; i++) {
//   fs.readFileSync('archivo.txt', 'utf8');
// }


//Codigo eficiente
for(let i=0; i<= 10; i++) {
   
  const streamEscritura = fs.createReadStream("archivo.txt", {
    encoding: "utf-8"
  });

}


//Los streams nos ayudan a mejorar el tiempo de ejecución


console.timeEnd("tiempo de respuesta");