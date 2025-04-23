"use client";
import { useState } from "react";
import Boton from "../ui/Boton";
import Counter from "../ui/Counter";
import { useCartContext } from "../context/CartContext";
import { CheckCircle } from "lucide-react"; // ícono elegante (puede reemplazar el SVG manual)

function QtySelector({ item }) {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleAdd = () => {
    addToCart({
      ...item,
      quantity,
    });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3500);
  };

  return (
    <div className="flex flex-col gap-5 mt-6 relative">
      <Counter
        max={item.inStock}
        counter={quantity}
        setCounter={setQuantity}
      />
      <Boton
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-300"
        onClick={handleAdd}
      >
        Agregar al carrito 
      </Boton>

      {showAlert && (
        <div className="absolute top-full mt-3 w-full bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg shadow transition-opacity duration-500 ease-in-out animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>
              <strong className="font-semibold">¡Éxito!</strong> Artículo
              agregado al carrito.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default QtySelector;
