import React from 'react'
import {  NavLink } from 'react-router-dom'

export const NarBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
             <NavLink  className="navbar-brand" to="/">useContext</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-link" to='/'>Home</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

//La diferencia entre NavLink y Link, NavLink nos permite establecer cual es la ruta en la cual me encuetnro y activar una clase css