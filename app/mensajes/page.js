'use client';

import LogoutButton from "../components/admin/LogoutButton";
import GoBack from "../components/ui/GoBack";
import { useEffect, useState, useCallback } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

const Mensajes = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para errores

  // UseEffect para obtener los mensajes desde Firebase
  useEffect(() => {
    const msgRef = collection(db, "mensajes");

    const unsubscribe = onSnapshot(msgRef, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMessages(docs);
      setIsLoading(false); // Marcar como cargado
    }, (err) => {
      setError("Hubo un problema al cargar los mensajes.");
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Función de eliminación de mensaje
  const handleDelete = useCallback(async (messageId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este mensaje?");
    if (confirmDelete) {
      try {
        const messageRef = doc(db, "mensajes", messageId);
        await deleteDoc(messageRef); // Eliminar el mensaje de Firebase
        alert("Mensaje eliminado con éxito!");
      } catch (error) {
        console.error("Error al eliminar el mensaje: ", error);
        alert("Hubo un error al eliminar el mensaje.");
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="text-gray-600 text-xl">Cargando mensajes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
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
        Mensajes recibidos
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {messages.map(message => (
          <div key={message.id} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center transition duration-300 ease-in-out hover:bg-gray-200">
            <div className="flex flex-col">
              <p className="text-lg"><span className="font-bold">Email:</span> {message.email}</p>
              <p className="text-lg"><span className="font-bold">Mensaje:</span> {message.text}</p>
            </div>

            {/* Botón de eliminar alineado a la derecha */}
            <button 
              onClick={() => handleDelete(message.id)} 
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mt-2 transition duration-200"
              aria-label={`Eliminar mensaje de ${message.email}`}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mensajes;
