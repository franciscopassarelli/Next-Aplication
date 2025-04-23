"use client";
import { useCartContext } from "../components/context/CartContext";
import CartPage from "../cart/CartPage";

import Link from "next/link";
import ClientForm from "../cart/ClientForm";
import GoBack from "../components/ui/GoBack";
import { ShoppingCart } from "lucide-react";

const Carrito = () => {
  const { cart } = useCartContext();

  return (
    <div className="container mx-auto my-10 px-6 py-8 bg-white rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <ShoppingCart className="w-8 h-8 text-red-500" />
          Tu compra
        </h2>
        <GoBack />
      </div>

      {cart.length > 0 ? (
        <div className="space-y-8">
          <CartPage />
          <ClientForm />
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">
            Tu carrito de compras está vacío
          </p>
          <Link
            href="/productos/todos"
            className="inline-block bg-red-500 text-white font-medium px-5 py-2 rounded hover:bg-red-600 transition"
          >
            Explorar productos
          </Link>
        </div>
      )}

      <hr className="mt-10 border-gray-300" />
    </div>
  );
};

export default Carrito;
