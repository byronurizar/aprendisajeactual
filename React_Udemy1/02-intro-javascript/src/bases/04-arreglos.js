//Arreglos en JS
//Es una colección de información que se encuentra dentro de una misma variable

// const arreglo=new Array();
const arreglo=[1,2,3,4];

//no es recomendable utilizar Push modifica el objeto principal
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// arreglo.push(5);


let arreglo2=[...arreglo,5];

const arreglo3=arreglo2.map(item=>item*5);
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);