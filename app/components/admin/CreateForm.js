"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { db, storage } from "@/app/firebase/config"
const createProduct = async (values, archivo) => {
    //  para guardar imagenes
    try {
        const storageRef = ref(storage, values.slug)
        const fileSnapshot = await uploadBytes(storageRef, archivo)
        const fileURL = await getDownloadURL(fileSnapshot.ref)
    
    const docRef = doc(db, "productos", values.slug)
    return setDoc(docRef, {
        ...values,
        image: fileURL
    })
        .then(() => console.log("Producto agregado exitosamente"))

    } catch (error) {
        console.log(error)
    }
}


const CreateForm = () => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        inStock: 0,
        price: 0,
        type: "",
        slug: "",
    })

    const [file, setFile] = useState(null)


    const handleChange = (e) => {
        setValues({
            ...values, //spread
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        await createProduct(values, file)
    }

    return (
      <div className="container m-auto mt-6 max-w-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-4 border-b border-red-600 pb-2">Ingresar nuevos productos:</h2>
          <form onSubmit={handleSubmit} className="my-12">
              <label className="block text-sm font-medium text-gray-700">Slug: </label>
              <input
                  type="text"
                  required
                  value={values.slug}
                  className="p-2 rounded w-full border border-red-100 block my-4"
                  name="slug"
                  onChange={handleChange}
              />

              <label className="block text-sm font-medium text-gray-700">Nombre: </label>
              <input
                  type="text"
                  required
                  value={values.title}
                  className="p-2 rounded w-full border border-red-100 block my-4"
                  name="title"
                  onChange={handleChange}
              />
<label className="block text-sm font-medium text-gray-700">Imágen:</label>
<input
  type="file"
  required
  className="p-2 rounded w-full border border-blue-100 block my-4 transition duration-300 ease-in-out hover:bg-blue-100 hover:border-blue-300 cursor-pointer"
  name="file"
  onChange={(e) => { setFile(e.target.files[0]) }}
/>


              <label className="block text-sm font-medium text-gray-700">Precio: </label>
              <input
                  type="number"
                  required
                  value={values.price}
                  className="p-2 rounded w-full border border-red-100 block my-4"
                  name="price"
                  onChange={handleChange}
              />

              <label className="block text-sm font-medium text-gray-700">Stock: </label>
              <input
                  type="number"
                  required
                  value={values.inStock}
                  className="p-2 rounded w-full border border-red-100 block my-4"
                  name="inStock"
                  onChange={handleChange}
              />

              <label className="block text-sm font-medium text-gray-700">Categoría: </label>
              <input
                  type="text"
                  required
                  value={values.type}
                  className="p-2 rounded w-full border border-red-100 block my-4"
                  name="type"
                  onChange={handleChange}
              />

              <label className="block text-sm font-medium text-gray-700">Descripción: </label>
              <textarea
                  value={values.description}
                  className="resize-none w-full h-24 p-2 rounded border block border-red-100 my-4"
                  name="description"
                  onChange={handleChange}
              />

              <Boton type="submit">Guardar producto</Boton>
          </form>
      </div>
  )
}

export default CreateForm


