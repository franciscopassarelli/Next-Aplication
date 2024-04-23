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
    <div className="bg-[url('https://s.wsj.net/public/resources/images/BN-UJ094_37TFl_OR_20170720095248.jpg')] h-screen bg-cover bg-center flex justify-items-center items-center">
      <div className="mt-[-60px] px-10 lg:px-32 xl:px-40 text-gray-900">
        <h1 className="text-6xl font-semibold font-serif mb-6">
          <span className="text-black">Hasta 20% Off</span> <br />
          <span className="text-gray-600">En todo!</span>
        </h1>
        <section className="bg-white bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
          <h2 className="text-2xl text-gray-600 mb-6 text-center font-bold animate-pulse">Formulario para que nos envíes un mensaje</h2>
          <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
              <label htmlFor="email" className="fbefore:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[13px] font-bold leading-tight text-gray-800 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-50">
                Email
              </label>
           

              <input
                id="email"
                type="email"
                required
                placeholder="Tu email"
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                name="email"
                onChange={handleChange}
              />
                 </div>
            
            <div className="relative h-11 w-full min-w-[200px]">
              <label htmlFor="message" className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[13px] font-bold leading-tight text-gray-800 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Déjanos tu mensaje"
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                name="text"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <Boton
                type="submit"
                className="mt-6 block w-full select-none rounded-lg bg-blue-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Enviar
              </Boton>

            </div>
            </div>
            
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
