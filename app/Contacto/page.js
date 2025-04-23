"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Boton from "../components/ui/Boton";
import { db } from "@/app/firebase/config";
import { setDoc, doc, Timestamp } from "firebase/firestore";

const Contacto = () => {
  const router = useRouter();
  const [values, setValues] = useState({ email: "", text: "" });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "api/contacto";

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const docId = Timestamp.fromDate(new Date()).toMillis();
      const docRef = doc(db, "mensajes", String(docId));
      await setDoc(docRef, values);

      router.push("/thankscontact");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-2xl bg-black bg-opacity-40 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">
              ¡Hasta 20% Off!
            </span>
          </h1>
          <p className="text-lg text-gray-300">Envíanos tu mensaje y obtené tu descuento exclusivo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Tu email"
              className="w-full rounded-md border border-cyan-500 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Mensaje</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Déjanos tu mensaje"
              className="w-full rounded-md border border-cyan-500 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              name="text"
              onChange={handleChange}
              value={values.text}
            />
          </div>

          <div className="flex justify-center">
            <Boton
              type="submit"
              className="w-full max-w-xs rounded-lg bg-gradient-to-r from-yellow-400 to-cyan-500 py-3 px-6 text-sm font-bold uppercase text-black shadow-lg hover:opacity-90 transition-all"
            >
              Enviar
            </Boton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
