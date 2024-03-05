"use client"
import { useState } from "react"
import Boton from "../ui/Boton"

const ContactForm = () =>{
    const [values, setValues] = useState({
        email:"",
        text:""
    })

    const handleChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(values)
    }
    

  return (
    <div className="w-full max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="Tu email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          onChange={handleChange}
        />
  
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Dejanos un mensaje
        </label>
        <textarea
          required
          placeholder="Déjanos tu mensaje"
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="message"
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