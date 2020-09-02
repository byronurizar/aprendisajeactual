import React, { useLayoutEffect, useRef,useState } from 'react'
import './Layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const [boxSize, setBoxSize] = useState({})
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const pTag = useRef();

 
    //Condiciona si existe data retornar data[0]
    // !! no ayuda a pasar el null a un false
    const {  quote } = !!data && data[0];

    //Nos sirve para sacar mediciones despues de que se haga renderizado el html
    useLayoutEffect(() => {
        console.log('hey');
        // console.log(pTag.current.getBoundingClientRect());
        setBoxSize(pTag.current.getBoundingClientRect());
      }, [quote]);

      
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                ref={pTag}
                className="mb+0">
                    {quote}
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button className="btn btn-primary" onClick={increment}>
                Siguiente Frase
            </button>
        </div>
    )
}
