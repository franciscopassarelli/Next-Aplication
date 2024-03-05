"use client"
import { useState } from "react"
import Boton from "../components/ui/Boton"
import { useCartContext } from "../components/Context/CartContext"
import { db } from "../firebase/config"
import { setDoc, doc, Timestamp } from "firebase/firestore"

const createOrder = async (values, items) => {



      const docsPromises = items.map((slug) => {
        const docRef = doc(db, "productos", slug)
        return getDoc(docRef)
     })


     const docs = await Promise.all(docsPromises)   
     const batch = writeBatch(db)

    const outOfStock = []

     docs.forEach(doc => {
        const { inStock } = doc.data()
        const itemInCart = items.find(item => item.slug === doc.id)
         if (itemInCart.quantity >= inStock ) {
             batch.update(doc.ref, {inStock: inStock - itemInCart.quantity })
        } else {
            outOfStock.push(itemInCart)
         }
     })

     if (outOfStock.length > 0) return outOfStock
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
        emptyCart()
        router.push("/thanks")
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







