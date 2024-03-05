"use client"
import { createContext, useContext, useState } from "react"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

      

    const removeFromCart = (slug) => {
        // Implementa la lógica para eliminar el producto del carrito
        const updatedCart = cart.filter((item) => item.slug !== slug);
        setCart(updatedCart);
      };

    // Agrega productos al carrito
    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.slug === item.slug);

        if (existingItemIndex !== -1) {
            // El producto ya está en el carrito, actualiza la cantidad
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += item.quantity;
            setCart(updatedCart);
        } else {
            // El producto no está en el carrito, agrégalo
            setCart([...cart, item]);
        }
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

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    return ( 
        <CartContext.Provider value={{
            cart, 
            addToCart,
            isInCart,
            removeFromCart,
            totalQty,
            emptyCart,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}