import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
export const RegisterScreen = () => {
    //Creamos nuestro dispatch para poder agregar acciones al store de redux
    const dispatch = useDispatch();
    //Con use selector obtenemos toda la data del store
    // const state=useSelector(state=>state);
    const { msgError } = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm({
        name: 'Nuevo usuario',
        email: 'nuevo@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(
            startRegisterWithEmailPasswordName(email,password,name)
            );
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("Name is requeried"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email is not valid"));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError("Password should be at lesats 6 characters"));
            return false;
        }
        dispatch(removeError());
        return true;
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleSubmit}>

                {msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
