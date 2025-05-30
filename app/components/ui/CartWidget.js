"use client"
import Link from "next/link";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
    const { totalQty } = useCartContext();

    return (
        <Link href={"/carrito"} className="text-base text-slate-100 p-3 flex items-center">
            {/* Icono SVG para el carrito */}
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#B7B7B7" className="mr-2">
                <g>
                    <rect fill="none" height="24" width="24"/>
                </g>
                <g>
                    <path d="M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2 S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03L21,4.96L19.25,4l-3.7,7H8.53L4.27,2H1v2h2l3.6,7.59l-1.35,2.44 C4.52,15.37,5.48,17,7,17h12v-2H7L8.1,13z M12,2l4,4l-4,4l-1.41-1.41L12.17,7L8,7l0-2l4.17,0l-1.59-1.59L12,2z"/>
                </g>
            </svg>
            {/* Mostrar la cantidad de productos en el carrito */}
            <span className="text-red-600">{totalQty()}</span>
        </Link>
    );
};

export default CartWidget;
