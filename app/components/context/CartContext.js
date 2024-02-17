"use client"
import { createContext, useContext, useState } from "react"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // Agrega productos al carrito
    const addToCart = (item) => {
        setCart([...cart, item])
    }

    // Verifica que si se encuentra en el carrito
    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    // Cantidad total
    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    // Vaciar el carrito
    const emptyCart = () => {
        setCart([])
    }

    return ( 
        <CartContext.Provider value={{
            cart, 
            addToCart,
            isInCart,
            totalQty,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}