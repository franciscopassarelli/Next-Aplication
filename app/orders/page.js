'use client'; // Esto marca el componente como un Client Component

import { useEffect, useState } from "react";
import LogoutButton from "../components/admin/LogoutButton";
import GoBack from "../components/ui/GoBack";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Referencia a la colección "ordenes"
    const ordersRef = collection(db, "ordenes");

    // Listener en tiempo real
    const unsubscribe = onSnapshot(ordersRef, (querySnapshot) => {
      const ordersData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setOrders(ordersData);
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return (
    <div className="container m-auto mt-6">
      <div className="grid justify-items-end">
        <LogoutButton />
      </div>
      <h2 className="text-3xl my-10 border-b pb-4 text-red-600">
        Órdenes
      </h2>
      <GoBack />
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p className="text-xl">Comprador: <b>{order.client.nombre}</b></p>
            <p className="text-xl mb-2">Fecha: {new Date(order.date).toLocaleString()}</p>
            <p>Productos:</p>
            <ul className="border-b mb-2 pb-2">
              {order.items.map(item => (
                <li key={item.slug}>({item.quantity}) {item.title}</li>
              ))}
            </ul>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
