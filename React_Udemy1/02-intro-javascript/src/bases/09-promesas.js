//Promesas
//Las promesas por naturalesa son asincronas y primero se va a ejecutar todo el codigo sincrono o secuencial y las promesas caen a la pila de trabajo
//y asta que se termina todo lo sincrono ejecuta los resultados de las promesas
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
// const promesa=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        resolve();
//     }, 2000);
// });

const { getHeroById } = require("./bases/08-import-export");

// import {getHeroById,getHeroesByOwner} from './bases/08-import-export'

// const promesa=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const heroes=getHeroById(2);
//         console.log(heroes);
//        //resolve(heroes);
//        reject('No se pudo encontrar el heroe');
//     }, 2000);
// });



// console.log("Final");

// promesa.then((response)=>{
//     console.log({response});
//     console.log("Then de la promesa");
// })
// .catch(err=>console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroes = getHeroById(id);
            // console.log(heroes);
            if(heroes){
                resolve(heroes);
            }
            reject('No se pudo encontrar el heroe');
        }, 2000);
    });
}

getHeroeByIdAsync(4).then(console.log)
.catch(console.warn);