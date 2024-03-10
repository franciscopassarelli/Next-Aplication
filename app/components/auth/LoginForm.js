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

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Agregar lógica de envío de formulario si es necesario
    };

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
            <form
                onSubmit={handleSubmit}
                className="bg-white py-8 px-6 rounded-xl max-w-md w-full"
            >
                <h2 className="text-2xl text-red-600 mb-6">Iniciar sesión</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Tu email"
                    className="input-field"
                    name="email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="Tu password"
                    className="input-field"
                    name="password"
                    onChange={handleChange}
                />

                <div className="grid grid-cols-3 gap-4 mt-6">
                    <Boton onClick={() => loginUser(values)}>Loguearme</Boton>

                    <Boton onClick={googleLogin}>Loguearme con Google</Boton>

                    <Boton onClick={() => registerUser(values)}>Registrarme</Boton>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
