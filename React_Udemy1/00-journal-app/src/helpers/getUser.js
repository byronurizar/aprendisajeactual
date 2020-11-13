import { db } from "../firebase/firebase-config"

export const getUser = async () => {
    const usuariosSnap = await db.collection("usuarios").get();
    const usuarios = [];

    usuariosSnap.forEach(snapHijo=>{
        usuarios.push(snapHijo.data());
    })

    console.log({usuarios});
    return usuarios;

}