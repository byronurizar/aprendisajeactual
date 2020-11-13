import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startAddUser = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        console.log({ uid });

        const newUser = {
            email: "blu.urizar@gmail.com",
            nombre: "Byron López Urizar",
            isAdmin: true,
            date: new Date().getTime(),
            usuario_crea: uid
        }

        // const docRef = await db.collection("usuarios").add(newUser);

        const docRef = await db.collection("usuarios").get();
        console.log(docRef);

        dispatch(activarDetalleUsuario(docRef.id));


    }
}

export const activarDetalleUsuario = (id) => ({
    type: types.usuarioActivo,
    payload: id
})

export const setUsers = (usuarios) => ({
    type: types.usuarioSet,
    payload: usuarios
})