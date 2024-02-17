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
    <form onSubmit={handleSubmit} className="my-12 max-w-lg mx-auto">
      <input
        type="email"
        required
        placeholder="Tu email"
        className="p-3 w-full rounded border border-blue-300 my-4"
        name="email"
        onChange={handleChange}
      />

      <textarea
        required
        placeholder="Déjanos tu mensaje"
        className="resize-none w-full p-3 rounded border border-blue-300 my-4"
        name="message"
        onChange={handleChange}
      />

      <Boton type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Enviar
      </Boton>
    </form>
  );
};

export default ContactForm;
