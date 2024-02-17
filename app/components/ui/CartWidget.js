"use client"
import Link from "next/link"
import { useCartContext } from "./Context/CartContext"
import Image from "next/image"

const CartWidget = () => {
    const { totalQty } = useCartContext()

    return(
        <Link href={"/cart"} className="text-base text-slate-100 p3 flex items-center">
            <p>🛒 </p>
            <span className="text-red-600">{totalQty()}</span>
        </Link>
    )
}

export default CartWidget