const nombre='Byron';
const apellido='Lopez';
const nombreCompleto=nombre + ' ' + apellido;

const nombreCompleto2=`${nombre} ${apellido} ${1+1+8}`;
console.log(nombreCompleto2);

function getSaludo(nombre){
    return 'Hola ' +nombre;
}

console.log(`Este es un texto: ${getSaludo('Byron')}`);