"use client"
import { useCartContext } from "@/Components/Context/CartContext"
import CartList from "@/Components/cart/CartList"
import ClientForm from "@/Components/cart/ClientForm"

import Link from "next/link"

const Carrito = () => {
    const { cart } = useCartContext()

    return (
        <div className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">🛒 Tu compra</h2>
            {cart != "" ?
                <div>
                    <CartList />
                    <ClientForm />
                </div>
                :
                <Link href={"/productos/todos"} className="ml-8 text-2xl text-bold text-red-400">
                    Tu carrito de compras está vacío, 💪🏻 comienza a comprar...
                </Link>
            }
            <hr className="mt-6" />
        </div>
    )
}
export default Carrito