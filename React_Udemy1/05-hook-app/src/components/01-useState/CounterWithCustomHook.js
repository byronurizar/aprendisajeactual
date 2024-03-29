import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';
export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();
    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button
                className="btn btn-primary mr-2"
                onClick={() => increment(2)}>
                +1
            </button>
            <button
                className="btn btn-info mr-2"
                onClick={reset}
            >
                Reset
            </button>
            <button
                className="btn btn-info"
                onClick={() => decrement(2)}
            >
                -1
            </button>
        </>
    )
}
