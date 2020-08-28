//Desestructuración de arreglos

const personajes=['Goku','Vegega','Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);


//Para ignorar un elemento del arreglo se agrega una coma ,

const [,p2]=personajes;
console.log(p2);


const retornaArreglo=()=>{
    return ['ABC',123];
}

const [letras,numeros]=retornaArreglo();

console.log(letras,numeros);


//Tarea
// 1. El primer valor del arreglo se llamará nombre
//2. El segundo valor se llamará seteNombre;
const useState=(valor)=>{
    return [valor,()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre]=useState('Goku');
console.log(nombre);
//Ejecutamos la función
setNombre();