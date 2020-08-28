//Funciones
// const saludar=function (nombre){
//     return `Hola, ${nombre}`
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
// console.log(saludar('Goku'));
//console.log(saludar);
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));


const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'El_nombre'
    }
    )

const user=getUser();
console.log(user);

//Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

//Actual
// function getUsuarioActivo(nombre){
//     return {
//         uid:'ABC12522',
//         username:nombre
//     }
// };

// const usuarioActivo=getUsuarioActivo('byron');


//Nuevo
const getUsuarioActivo=(nombre)=>(
    {
        uid:'ABC12522',
        username:nombre
    }
);

const usuarioActivo=getUsuarioActivo('byron');

console.log(usuarioActivo);