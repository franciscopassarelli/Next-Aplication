"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita que el formulario se recargue

    try {
      toast.info("Iniciando sesión..."); // Alerta antes de intentar el login
      await loginUser(values); // Intentamos iniciar sesión
      toast.success("Inicio de sesión exitoso");
      setValues({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      toast.error("Error al iniciar sesión: " + error.message); // Alerta en caso de error
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Evita que el formulario se recargue

    try {
      toast.info("Registrando usuario..."); // Alerta antes de intentar el registro
      await registerUser(values); // Intentamos registrar el usuario
      setIsRegistered(true); // Cambiamos el estado para mostrar el mensaje de éxito
      toast.success("Registro exitoso"); // Alerta de éxito
      setValues({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error al registrarse:", error);
      toast.error("Error al registrarse: " + error.message); // Alerta en caso de error
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl text-gray-600 mb-6 text-center font-bold animate-pulse">
          Iniciar sesión
        </h2>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={values.email}
            required
            placeholder="Tu email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={values.password}
            required
            placeholder="Tu password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Botón de login */}
          <Boton
            onClick={handleLogin}
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 md:mb-0"
          >
            Iniciar sesión
          </Boton>
          {/* Botón de registro */}
          <Boton
            onClick={handleRegister}
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrarme
          </Boton>
        </div>
        {isRegistered && (
          <p className="text-center mt-4 text-green-500">
            Usuario registrado correctamente
          </p>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
