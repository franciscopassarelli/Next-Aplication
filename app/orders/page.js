'use client'; // Esto marca el componente como un Client Component

import { useEffect, useState } from "react";
import LogoutButton from "../components/admin/LogoutButton";
import GoBack from "../components/ui/GoBack";
import { db } from "../firebase/config";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

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

  // Función para eliminar una orden con confirmación
  const handleDelete = async (orderId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta orden?");

    if (confirmDelete) {
      try {
        const orderRef = doc(db, "ordenes", orderId);
        await deleteDoc(orderRef);  // Eliminar la orden de Firebase
        alert("Orden eliminada con éxito!");
      } catch (error) {
        console.error("Error al eliminar la orden: ", error);
        alert("Hubo un error al eliminar la orden.");
      }
    }
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="flex justify-end mb-6 pr-4">
        <LogoutButton />
      </div>
      <GoBack />
      <h2 className="text-3xl text-gray-600 mb-6 text-center font-bold animate-pulse">
        Órdenes
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {orders.map(order => (
          <div key={order.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col w-full">
                <p className="text-lg text-gray-800"><span className="font-bold">Comprador:</span> {order.client.nombre}</p>
                <p className="text-lg text-gray-600 mt-2"><span className="font-bold">Fecha:</span> {new Date(order.date).toLocaleString()}</p>
                <p className="text-lg text-gray-800 mt-2"><span className="font-bold">Productos:</span></p>
                <ul className="border-b mb-2 pb-2">
                  {order.items.map(item => (
                    <li key={item.slug} className="text-gray-700">({item.quantity}) {item.title}</li>
                  ))}
                </ul>
              </div>

              {/* Botón de eliminar alineado a la derecha */}
              <button 
                onClick={() => handleDelete(order.id)} 
                className="bg-red-500 text-white text-sm py-0.5 px-2 rounded hover:bg-red-600 mt-2 ml-4"
              >
                Eliminar órden
              </button>
            </div>

            <hr className="my-4 border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
