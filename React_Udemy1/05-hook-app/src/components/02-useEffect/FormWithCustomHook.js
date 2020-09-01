import React, { useEffect } from 'react'
import './effects.css'
import { useForm } from '../../hooks/useForm';
export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password:''
    });

    const { name, email,password } = formValues;

    useEffect(() => {
        console.log("El email cambio");
    }, [email])


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('formValues', formValues)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    value={email}
                >
                </input>
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="***"
                    onChange={handleInputChange}
                    value={password}
                >
                </input>
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    )
}
