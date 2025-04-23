'use client';
import { UserIcon, CalendarIcon, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import LogoutButton from "../components/admin/LogoutButton";
import GoBack from "../components/ui/GoBack";
import { db } from "../firebase/config";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ordersRef = collection(db, "ordenes");

    const unsubscribe = onSnapshot(ordersRef, (querySnapshot) => {
      const ordersData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setOrders(ordersData);
      setIsLoading(false);
    }, (err) => {
      setError("Hubo un problema al cargar las órdenes.");
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = useCallback(async (orderId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta orden?");
    if (confirmDelete) {
      try {
        const orderRef = doc(db, "ordenes", orderId);
        await deleteDoc(orderRef);
        alert("Orden eliminada con éxito!");
      } catch (error) {
        console.error("Error al eliminar la orden: ", error);
        alert("Hubo un error al eliminar la orden.");
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="text-gray-600 text-xl">Cargando órdenes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-600 text-center">{error}</p>;
  }

  return (
    <div className="container mx-auto mt-6">
      <div className="flex justify-end mb-6 pr-4">
        <LogoutButton />
      </div>
      <div className="mb-6 pl-4">
        <GoBack />
      </div>

      <h2 className="text-3xl text-gray-600 mb-6 text-center font-bold animate-pulse">
        Órdenes
      </h2>

      <div className="grid grid-cols-1 gap-6 px-4">
        {orders.map(order => (
          <div key={order.id} className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 transition hover:shadow-lg">
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col space-y-2 w-full">
                <div className="flex items-center gap-2 text-gray-800 text-lg font-semibold">
                  <UserIcon size={18} />
                  <span>Comprador: <span className="font-normal">{order.client.nombre}</span></span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <CalendarIcon size={18} />
                  <span>Fecha: <span className="font-medium">{new Date(order.date).toLocaleString()}</span></span>
                </div>

                <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mt-1">
                  <ShoppingCartIcon size={18} />
                  <span>Productos:</span>
                </div>

                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-2">
                  {order.items.map(item => (
                    <li key={item.slug}>
                      <span className="font-medium">({item.quantity})</span> {item.title}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handleDelete(order.id)} 
                className="bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 shadow-sm transition"
              >
                Eliminar orden
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
