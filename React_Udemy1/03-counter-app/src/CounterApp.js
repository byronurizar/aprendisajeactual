import React,{useState} from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    
    const [counter,setCounter]=useState(value);
    const handleAdd=(e)=>{
        setCounter(counter+1);
    }
    const handleReset=()=>setCounter(value);
    const handleSubstract=()=> setCounter(counter-1);
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/* Cuando pasamos la funcion sin paraentesis le estamos diciemnto a react que es como referencia y si le colocamos los parentesis la va a ejecutar al momento de renderizar */}
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    )
}



CounterApp.propTypes={
    value: PropTypes.number
};

export default CounterApp;
