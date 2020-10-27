import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Register.scss';
import { registerRequest } from '../actions';
const Register = (props) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.registerRequest(values);
        props.history.push('/');

    }

    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleOnSubmit}>
                    <input
                        className="input"
                        name="name" type="text"
                        placeholder="Nombre"
                        value={values.name}
                        onChange={handleInputChange} />
                    <input
                        className="input"
                        name="email" type="text"
                        placeholder="Correo"
                        value={values.email}
                        onChange={handleInputChange} />
                    <input
                        className="input"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={values.password}
                        onChange={handleInputChange} />

                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
    );
}

const mapDispatchToProps = {
    registerRequest
}
export default connect(null, mapDispatchToProps)(Register)