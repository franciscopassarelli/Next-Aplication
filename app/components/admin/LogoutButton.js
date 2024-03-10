"use client"
import { useAuthContext } from "../context/AuthContext";
import Boton from "../ui/Boton";

const LogoutButton = () => {
    const { logOut } = useAuthContext()

    return (
        <>
            <Boton onClick={logOut}>
                Cerrar sesión
            </Boton>
        </>
    )
}

export default LogoutButton