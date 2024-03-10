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
    <div className="container mx-auto my-4 p-4 border border-gray-300 rounded">
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="col-span-1">
          <Image
            src={item.image}
            alt={item.title}
            width={160}
            height={160}
          />
        </div>
        <div className="col-span-2">{item.title}</div>
        <div className="col-span-1">{item.quantity}</div>
        <div className="col-span-1 text-red-600">$ {item.price}</div>
        <div className="col-span-1 flex justify-center items-center">
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
