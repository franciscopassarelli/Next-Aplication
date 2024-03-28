"use client"
import { useAuthContext } from "../context/AuthContext";
import Boton from "../ui/Boton";

const LogoutButton = () => {
    const { logOut } = useAuthContext()

    return (
        <>
            <Boton onClick={logOut} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" >
                Cerrar sesión
            </Boton>
        </>
    )
}

export default LogoutButton