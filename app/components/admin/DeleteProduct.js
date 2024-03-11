"use client"
import Boton from "../ui/Boton"
import Link from "next/link"

// firebase
import { db } from "@/app/firebase/config"
import { doc, deleteDoc } from "firebase/firestore"

const DeleteProduct = async ({ item }) => {

    try {
        const docRef = doc(db, "productos", item.slug)
        await deleteDoc(docRef)
        console.log("Producto eliminado correctamente")
    } catch (error) {
        console.log("Error al borrar: ", error)
    }

    return (
        <div>
            <h1 className="ml-8 text-2xl border-b pb-2">Su producto: </h1>
            <h3 className="ml-8 mt-2">{item.title} ha sido eliminado de la base de datos.</h3>
            <br />

            <Link href="/admin">
                <Boton className="ml-8">Volver a Admin</Boton>
            </Link>
        </div>
    )
}

export default DeleteProduct