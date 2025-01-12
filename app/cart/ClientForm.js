"use client"
import { useState } from "react";
import Boton from "../components/ui/Boton";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../components/context/AuthContext";
import { useCartContext } from "../components/context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const createOrder = async (values, items) => {
  try {
    const order = {
      client: values,
      items: items.map(item => ({
        title: item.title,
        price: item.price,
        slug: item.slug,
        quantity: item.quantity,
      })),
      date: serverTimestamp(), // Usamos el timestamp del servidor
    };

    // Añadimos el pedido en la colección 'ordenes'
    const ordersRef = collection(db, "ordenes");
    const docRef = await addDoc(ordersRef, order);

    return docRef.id; // Retorna el ID generado para el pedido
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    throw new Error("No se pudo crear el pedido.");
  }
};

const ClientForm = () => {
  const { user } = useAuthContext(); // Usuario logueado
  const { cart, emptyCart } = useCartContext(); // Carrito de compras
  const router = useRouter(); // Redirección

  // Estado para los valores del formulario
  const [values, setValues] = useState({
    email: user?.email || "", // Si no hay usuario, se deja vacío
    direccion: "",
    nombre: user?.displayName || "", // Si no hay nombre, se deja vacío
  });

  // Estado para manejar errores
  const [error, setError] = useState(null);

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reseteamos el error antes de enviar la orden

    try {
      // Crear la orden en Firebase
      const orderId = await createOrder(values, cart);
      console.log("Pedido creado con éxito:", orderId);

      // Vaciar el carrito después de la compra
      emptyCart();

      // Redirigir al usuario a la página de agradecimiento
      router.push("/thanks");
    } catch (error) {
      // Manejo de errores si falla la creación del pedido
      setError("Hubo un error al procesar tu pedido. Intenta nuevamente.");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl">Tus datos:</h1>

      {error && <div className="bg-red-100 text-red-600 p-2 rounded mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="my-8">
        <input
          type="text"
          required
          placeholder="Tu nombre"
          className="p-2 rounded w-full md:w-1/2 border border-red-100 block my-4"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
        />

        <input
          type="text"
          required
          placeholder="Tu dirección"
          className="p-2 rounded w-full md:w-1/2 border border-red-100 block my-4"
          name="direccion"
          value={values.direccion}
          onChange={handleChange}
        />

        <input
          type="email"
          required
          placeholder="Tu correo electrónico"
          className="p-2 rounded w-full md:w-1/2 border border-red-100 block my-4"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <Boton type="submit">Terminar mi compra</Boton>
      </form>
    </div>
  );
};

export default ClientForm;

/*
Codigo original

import { useState } from "react";
import Boton from "../components/ui/Boton";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../components/context/AuthContext";
import { useCartContext } from "../components/context/CartContext";
import { db } from "../firebase/config";
import { setDoc, doc, Timestamp } from "firebase/firestore";

const createOrder = async (values, items) => {
  const order = {
    client: values,
    items: items.map(item => ({
      title: item.title,
      price: item.price,
      slug: item.slug,
      quantity: item.quantity,
    })),
    date: new Date().toISOString(),
  };

  const docId = Timestamp.fromDate(new Date()).toMillis();
  const orderRef = doc(db, "ordenes", String(docId));
  await setDoc(orderRef, order);
  return docId;
};

const ClientForm = () => {
  const { user } = useAuthContext();
  const { cart, emptyCart } = useCartContext();
  const router = useRouter();

  const [values, setValues] = useState({
    email: user.email,
    direccion: "",
    nombre: user.displayName
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createOrder(values, cart);
    emptyCart();
    router.push("/thanks");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl">Tus datos:</h1>

      <form onSubmit={handleSubmit} className="my-8">
        <input
          type="text"
          required
          placeholder="Tu nombre"
          className="p-2 rounded w-full md:w-1/2 border border-red-100 block my-4"
          name="nombre"
          onChange={handleChange}
        />

        <input
          type="text"
          required
          placeholder="Tu dirección"
          className="p-2 rounded w-full md:w-1/2 border border-red-100 block my-4"
          name="direccion"
          onChange={handleChange}
        />

        <input
          type="email"
          required
          placeholder="Tu correo electrónico"
          className="p-2 rounded w-full md:w-1/2 border border-red-100 block my-4"
          name="email"
          onChange={handleChange}
        />

        <Boton type="submit">Terminar mi compra</Boton>
      </form>
    </div>
  );
};

export default ClientForm;

*/