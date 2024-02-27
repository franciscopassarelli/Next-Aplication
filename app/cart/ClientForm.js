"use client"
import { useState } from "react"
import Boton from "../Boton"
import { useCartContext } from "../Context/CartContext"
import { db } from "../../app/firebase/config"
import { setDoc, doc, Timestamp } from "firebase/firestore"

const createOrder = async (values, items) => {
    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity
        })),
        date: new Date().toISOString()
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "ordenes", String(docId))
    await setDoc(orderRef, order)
    return docId
}

const ClientForm = () => {
    const { cart } = useCartContext()

    const [values, setValues] = useState({
        email: "",
        direccion: "",
        nombre: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createOrder(values, cart)
    }


    return (
        <div>
            <h1 className="text-2xl">Tus datos:</h1>

            <form onSubmit={handleSubmit} className="my-8">
                <input
                    type="nombre"
                    required
                    placeholder="Tu nombre"
                    className="p-2 rounded w-1/2 border border-red-100 block my-4"
                    name="nombre"
                    onChange={handleChange}
                />

                <input
                    type="direccion"
                    required
                    placeholder="Tu dirección"
                    className="p-2 rounded w-1/2 border border-red-100 block my-4"
                    name="direccion"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    className="p-2 rounded w-1/2 border border-red-100 block my-4"
                    name="email"
                    onChange={handleChange}
                />

                <Boton type="submit">
                    Terminar mi compra
                </Boton>
            </form>
        </div>
    )
}

export default ClientForm