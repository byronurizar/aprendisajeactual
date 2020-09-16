import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    // 1 obtener la referencia al context
    // 2 Extraer el set user
const {setUser} = useContext(UserContext)
    /*
    {
        id:111,
        name:'Byron'

    }
    */
    return (
        <div>
        <h1>LoginScree</h1>
        <hr/>
        <button className="btn btn-primary" onClick={()=>{
            setUser({
                id:new Date().getTime(),
                name:'Byron López Urizar',
                email:'blu.urizar@gmail.com'
            })
        }}>Login</button>
    </div>
    )
}
