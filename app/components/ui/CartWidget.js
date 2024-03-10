"use client"
import Link from "next/link"
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
    const { totalQty } = useCartContext()

    return(
        <Link href={"/carrito"} className="text-base text-slate-100 p3 flex items-center">
            <p>👜 </p>
            <span className="text-red-600">{totalQty()}</span>
        </Link>
    )
}

export default CartWidget