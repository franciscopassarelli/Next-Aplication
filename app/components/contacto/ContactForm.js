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
    
    return(
        <form onSubmit={handleSubmit} className="my-12">
            <input
            type="email"
            required
            placeholder="tu email"
            className="p-2 rounded w-1/2 h-24 p-2 rounded border border-blue-100 block my-4"
            name="text"
            onChange={handleChange}
            />

            <textarea
            required
            placeholder="dejanos tu mensaje"
            className="resize-none w-1/2 h-24 p-2 rounded border border-blue-100 block my-4"
            name="text"
            onChange={handleChange}
            />

            <boton type="submit">Enviar</boton>


        </form>
    )
}

export default ContactForm