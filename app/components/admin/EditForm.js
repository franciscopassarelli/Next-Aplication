"use client"

import { useState } from "react"
import Boton from "../Boton"

// Firebase
import { db, storage } from "../../app/firebase/config"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

const updateProduct = async (slug, values, file) => {
    let fileURL = values.image

    if(file) {
        const storageRef = ref(storage, values.slug)
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref)
    }

    const docRef = doc(db, "productos", slug)
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        inStock: Number(values.inStock),
        price: Number(values.price),
        type: values.type,
        image: fileURL
    }).then(() => console.log("Producto actualizado correctamente"))
}

const EditForm = ({item}) => {
    const { title, description, inStock, price, type, image } = item
    const [ values, setValues ] = useState({title, description, inStock, price, type, image})
    const [ file, setFile ] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateProduct(item.slug, values, file)
    }

    return (
        <div className="container m-auto mt-6 max-w-lg"> 
            <h1 className="text-2xl">Editar producto</h1>
            <hr />

            <form onSubmit={handleSubmit} className="my-12">
                <label>Slug: </label>
                <input
                    type="text"
                    required
                    value={values.slug}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    required
                    value={values.title}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Imágen: </label>
                <input
                    type="file"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="file"
                    onChange={(e) => { setFile(e.target.files[0]) }}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    required
                    value={values.price}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    required
                    value={values.inStock}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Categoría: </label>
                <input
                    type="text"
                    required
                    value={values.type}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-red-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Editar producto</Boton>
            </form>

        </div>
    )
}

export default EditForm