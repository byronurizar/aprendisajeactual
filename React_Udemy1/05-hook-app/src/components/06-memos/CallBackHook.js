import React, { useState, useCallback, useEffect } from 'react';

import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';
export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment=()=>{
    //     setCounter(counter+1);
    // }

    //Nos sirve para que cuando se renderice nuevamente no vuelva a renderizar el componente ShowIncremente, se debe de utilizar React.memo en el componente ShoIncrement
   const increment=useCallback(
        (num) => {
            setCounter(c=>c+num);
        },
        [setCounter]
    )


    useEffect(() => {
        console.log("Prueba");
    }, [increment])
    // console.log("Renderizando");

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>
            {<ShowIncrement increment={increment}/>}
        </div>
    )
}
