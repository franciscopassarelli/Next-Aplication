"use client"
import { useState } from "react";
import Boton from "../components/ui/Boton";
import { useRouter } from "next/navigation";

// Firebase
import { db } from "@/app/firebase/config";
import { setDoc, doc, Timestamp } from "firebase/firestore";

const Contacto = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    text: ""
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "api/contacto";

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(values)
    });

    const docId = Timestamp.fromDate(new Date()).toMillis();
    const orderRef = doc(db, "mensajes", String(docId));
    await setDoc(orderRef, values);

    router.push("/thankscontact");
  };

  return (
    <div className="bg-black text-white flex justify-center items-center h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-semibold mb-6">
            <span className="text-blue-500">Hasta 20% Off</span> <br />
            <span>En todo!</span>
          </h1>
          <section className="bg-gray-800 bg-opacity-75 shadow-md rounded px-8 pt-8 pb-6">
            <h2 className="text-2xl mb-6 font-bold">Formulario para que nos envíes un mensaje y obtengas descuento</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Tu email"
                  className="w-full rounded-md border bg-gray-900 border-blue-500 px-3 py-3 font-sans text-sm font-normal text-white outline-none transition-all placeholder-blue-gray-500 focus:border-blue-500 focus:border-opacity-50 focus:outline-none"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Déjanos tu mensaje"
                  className="w-full rounded-md border bg-gray-900 border-blue-500 px-3 py-3 font-sans text-sm font-normal text-white outline-none transition-all placeholder-blue-gray-500 focus:border-blue-500 focus:border-opacity-50 focus:outline-none"
                  name="text"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <Boton
                  type="submit"
                  className="w-full max-w-xs rounded-lg bg-blue-500 py-3 px-6 text-center font-sans text-xs font-bold uppercase shadow-md transition-all hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Enviar
                </Boton>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
