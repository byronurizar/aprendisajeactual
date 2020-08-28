//Deestructuración de objetos
//O asignación desestructurante

const persona={
    nombre:'Tom',
    edad:45,
    clave:'IronMan',
    // rango:'Soldado'
};

//Para renombrar la variable
// const {nombre:nombreRenombrado}=persona;
// console.log(nombreRenombrado);

// const {nombre,edad,clave}=persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);


//Tenemos un objeto que no tiene la clave rango y se intenta extrar sera undefine pero si se le asigna un valor nos imprimirá el valor
const useContext=({clave,nombre,edad,rango='Capitan'})=>{
// console.log(nombre,edad,rango);
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:15.0011515,
            lng:-12.52522
        }
    }
}

// retornaPersona(persona);
//Hicimos dos desestructuraciones
//Desestructuración anidada
const {nombreClave,anios,latlng:{lng,lat}}=useContext(persona);
console.log(nombreClave,anios);
console.log(lng,lat);