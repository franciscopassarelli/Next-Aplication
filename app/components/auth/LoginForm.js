"use client"
import { useState } from "react";
import Boton from "../ui/Boton";
import { useAuthContext } from "../context/AuthContext";

const LoginForm = () => {
    const { registerUser, loginUser, googleLogin } = useAuthContext();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await loginUser(values);
            setIsRegistered(true);
            setValues({
                email: "",
                password: "",
            });
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <div className="w-full max-w-xl">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl text-gray-600 mb-6 text-center font-bold animate-pulse">Iniciar sesión</h2>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        value={values.email}
                        required
                        placeholder="Tu email"
                        name="email"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <input  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        value={values.password}
                        required
                        placeholder="Tu password"
                        name="password"
                        onChange={handleChange}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Boton onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Loguearme</Boton>
                    <Boton onClick={googleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Loguearme con Google</Boton>
                    <Boton onClick={() => registerUser(values)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrarme</Boton>
                </div>
                {isRegistered ? <p>Usuario registrado correctamente</p> : null}
            </form>
        </div>
    );
};

export default LoginForm;
