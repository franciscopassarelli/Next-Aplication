import React from "react";
import { useCartContext } from "../components/context/CartContext";
import Image from "next/image";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart, isInCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.slug);
  };

  return (
    <div className="container mx-auto my-4 px-4 sm:px-0 py-4 border border-gray-300 rounded">
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 items-center">
        <div className="sm:col-span-1">
          <Image
            src={item.image}
            alt={item.title}
            width={160}
            height={160}
            className="mx-auto"
          />
        </div>
        <div className="sm:col-span-2">{item.title}</div>
        <div className="sm:col-span-1">{item.quantity}</div>
        <div className="sm:col-span-1 text-red-600">$ {item.price}</div>
        <div className="sm:col-span-1 flex justify-center items-center">
          {isInCart(item.slug) ? (
            <>
              <button
                onClick={handleRemoveFromCart}
                className="text-blue-500"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button onClick={handleAddToCart} className="text-green-500">
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
