import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'
import { useState } from 'react'

export const MainApp = () => {
   const [user, setUser] = useState({});
    return (
        //Podemos enviar un solo objeto en el value o podemos enviar varios objetos
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter></AppRouter>
        </UserContext.Provider>
    )
}
