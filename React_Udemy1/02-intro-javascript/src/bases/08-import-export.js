// import {heroes} from './data/heroes';
// import heroes,{owners} from './data/heroes' //Utilizando la exportacion por defaul
import {heroes,owners} from '../data/heroes'

console.log(owners);
export const getHeroById=(id)=>heroes.find(item=>item.id===id);

console.log(getHeroById(3));
console.table(heroes);


export const getHeroesByOwner=(owner)=>heroes.filter(item=>item.owner===owner);

console.log(getHeroesByOwner('DC'));