import React, { useState, useEffect } from 'react'
import './effects.css'
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;
    useEffect(() => {
        console.log("hey");
    },[]);


    useEffect(() => {
        console.log("formSateCa");
    },[formState]);

    useEffect(() => {
        console.log("El correo Cambio");
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

            
        </>
    )
}
