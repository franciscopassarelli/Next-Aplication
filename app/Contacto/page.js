"use client"
import { useState } from "react"
import Boton from "../components/ui/Boton";
import { useRouter } from "next/navigation";

// Firebase
import { db } from "@/app/firebase/config";
import { setDoc, doc, Timestamp, getDoc, writeBatch } from "firebase/firestore";

 const ContactForm= () => {
    const router = useRouter()
    const [values, setValues] = useState({
        email: "",
        text: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let url = "api/contacto"

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(values)
        })

        const docId = Timestamp.fromDate(new Date()).toMillis()
        const orderRef = doc(db, "mensajes", String(docId))
        await setDoc(orderRef, values)

        router.push("/thankscontact")
    }
    

  return (
    <div className="w-full max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
        id="email"
          type="email"
          required
          placeholder="Tu email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          onChange={handleChange}
        />
  
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Dejanos un mensaje
        </label>
        <textarea
          id="message"
          rows="4"
          placeholder="Déjanos tu mensaje"
          className="shadow appearance-none border border-red-600 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="text"
          onChange={handleChange}
        />
  
        <Boton
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </Boton>
      </div>
    </form>
  </div>
  
  );
};

export default ContactForm;