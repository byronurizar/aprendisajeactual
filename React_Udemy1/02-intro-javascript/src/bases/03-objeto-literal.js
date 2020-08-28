const persona={
    nombre:'Tom',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New Your',
        zip:52151555,
        lat:14.0515155,
        lng:34.5552255,
    }
};

//console.table({persona});
console.log({persona});

//Se hace copia de la referencia y no una copia
// const persona2=persona;

//Hacer una copia
// Operador spread o operador de propagación
const persona2={...persona};
persona2.nombre="Peter";

console.log(persona2);