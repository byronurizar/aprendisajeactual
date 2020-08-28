import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo,subtitulo}) => {


   // const saludo="Hola Mundo";

   // console.log(saludo);
    // const saludo={nombre:'Byron',edad:29}
    //en el Html solo se imprimen valores primitivos
    return (
        //Forma de hacer un fragment sin Importar desde React
        //La equita pre nos muestra el contenido como codigo
        <>
        <h1>{saludo}</h1>
            {/* <pre> { JSON.stringify(saludo,null,3) } </pre> */} 
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps={
    subtitulo:"Soy un subtitulo"
};

export default PrimeraApp;