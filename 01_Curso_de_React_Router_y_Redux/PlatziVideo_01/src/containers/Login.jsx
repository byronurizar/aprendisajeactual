import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';
import { loginRequest } from '../actions'
import Header from '../components/Header';
const Login = (props) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loginRequest(values);
        console.log({ values });
        props.history.push("/");
    }

    return (
        <>
            <Header isLogin />
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input className="input" name="email" id="email" type="text" placeholder="Correo" value={values.email} onChange={handleInputChange} />
                        <input className="input" name="password" id="password" type="password" placeholder="Contraseña" value={values.password} onChange={handleInputChange} />
                        <button className="button" type="submit">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                       </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src={googleIcon} /> Inicia sesión con Google</div>
                        <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                    </section>

                    <p className="login__container--register">No tienes ninguna cuenta {' '}
            <Link to="/registro"> Regístrate</Link>
                    </p>
                </section>
            </section>
        </>
    );
}
const mapDispatchToProps = {
    loginRequest
}
export default connect(null, mapDispatchToProps)(Login)
