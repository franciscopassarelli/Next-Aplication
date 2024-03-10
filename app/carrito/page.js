"use client"
import { useCartContext } from "../components/context/CartContext"
import CartPage from "../cart/CartPage"


import Link from "next/link"
import ClientForm from "../cart/ClientForm"

const Carrito = () => {
    const { cart } = useCartContext()

    return (
        <div className="container mx-auto my-8 p-4 bg-gray rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">👜 Tu compra</h2>
            {cart != "" ?
                <div>
                    <CartPage />
                    <ClientForm/>
                </div>
                :
                <div className="text-center bg-gray">
                <p className="text-xl text-gray-600 mb-4">Tu carrito de compras está vacío</p>
                <Link href="/productos/todos" className="text-lg text-red-500 hover:text-red-700 underline">
                    
                        Explora nuestros productos
            
                </Link>
            </div>
            }
            <hr className="mt-6" />
        </div>
    )
}
export default Carrito