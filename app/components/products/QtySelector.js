"use client"
import { useState } from "react";
import Boton from "../ui/Boton";
import Counter from "../ui/Counter";
import { useCartContext } from "../context/CartContext";

function QtySelector({ item }) {
    const { addToCart } = useCartContext();
    const [quantity, setQuantity] = useState(1);
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        });
        // Mostrar la alerta
        setShowAlert(true);
        // Ocultar la alerta después de un tiempo (opcional)
        setTimeout(() => {
            setShowAlert(false);
        }, 3500); // Ocultar después de 3 segundos
    };

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
            <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>
                Agregar al carrito 👜
            </Boton>
            {/* Mostrar la alerta si showAlert es true */}
            {showAlert && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">¡Éxito!</strong>
                    <span className="block sm:inline"> El artículo se ha agregado al carrito.</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Cerrar</title><path d="M14.348 14.849c-.195.196-.451.294-.707.294s-.512-.098-.707-.293l-3.641-3.64-3.64 3.641c-.195.196-.451.293-.707.293s-.512-.097-.707-.293a.999.999 0 0 1 0-1.414l3.641-3.64-3.642-3.641a.999.999 0 1 1 1.414-1.414l3.641 3.641 3.64-3.641a.997.997 0 0 1 1.414 0c.196.195.293.451.293.707s-.098.512-.293.707l-3.64 3.641 3.64 3.64c.195.195.293.451.293.707s-.098.512-.293.707z"/></svg>
                    </span>
                </div>
            )}
        </div>
    );
}

export default QtySelector;
