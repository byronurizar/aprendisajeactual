import React, { useState, useEffect } from 'react'
import { Message } from './Message';
import './effects.css'
export const SimpleForm = () => {


    //No es posible utilizar hooks de manera condicionada
    // if(true){
    //     const [preuba, setpreuba] = useState(0)
    // }

    //Siempre deben de estar al inicio
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;
    useEffect(() => {
        //console.log("hey");
    },[]);


    //useEffect retorna una funcion y esta es utilizada para limpiar al momento de desmontar
    useEffect(() => {
        //console.log("formSateCa");
    },[formState]);

    useEffect(() => {
        //console.log("El correo Cambio");
    },[email]);

    // [target.name]: target.value estamos computando el input
    const handleINputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    onChange={handleINputChange}
                    value={name}
                >
                </input>
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    onChange={handleINputChange}
                    value={email}
                >
                </input>
            </div>


                {name==='123' && <Message/>}
            
        </>
    )
}
