'use client'

import LogoutButton from "../components/admin/LogoutButton";
import GoBack from "../components/ui/GoBack";
import { useEffect, useState } from "react";  // Para manejar el estado
import { db } from "../firebase/config";  // Asegúrate de importar db correctamente
import { collection, onSnapshot } from "firebase/firestore";  // Usa onSnapshot para sincronización en tiempo real

const Mensajes = () => {
    const [messages, setMessages] = useState([]);  // Estado para almacenar los mensajes

    // Función que usa onSnapshot para obtener los mensajes en tiempo real
    useEffect(() => {
        const msgRef = collection(db, "mensajes");

        // onSnapshot se ejecuta cada vez que haya cambios en la colección "mensajes"
        const unsubscribe = onSnapshot(msgRef, (snapshot) => {
            const docs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setMessages(docs);  // Actualiza el estado con los nuevos mensajes
        });

        // Limpiar la suscripción cuando el componente se desmonte
        return () => unsubscribe();
    }, []);  // Se ejecuta solo una vez cuando el componente se monta

    return (
        <div className="container mx-auto mt-6">
            <div className="flex justify-end mb-6" style={{ marginRight: '10px' }}>
                <LogoutButton />
            </div>
            <GoBack/>
            <h2 className="text-3xl text-gray-600 mb-6 text-center font-bold animate-pulse">
                Mensajes recibidos
            </h2>

            <div className="grid grid-cols-1 gap-4">
                {messages.map(message => (
                    <div key={message.id} className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-lg"><span className="font-bold">Email:</span> {message.email}</p>
                        <p className="text-lg"><span className="font-bold">Mensaje:</span> {message.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mensajes;






/*
import LogoutButton from "../components/admin/LogoutButton";
import GoBack from "../components/ui/GoBack";
//firebase
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const getMessages = async () => {
    const msgRef = collection(db, "mensajes")
    const querySnapShot = await getDocs(msgRef)
    const docs = querySnapShot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    return docs
}

const Mensajes = async () => {
    const msg = await getMessages()

    return (
        <div className="container mx-auto mt-6">
            <div className="flex justify-end mb-6" style={{ marginRight: '10px' }}>
                <LogoutButton />
            </div>
            <GoBack/>
            <h2 className="text-3xl text-gray-600 mb-6 text-center font-bold animate-pulse">
                Mensajes recibidos
            </h2>

            <div className="grid grid-cols-1 gap-4">
                {msg.map(message => (
                    <div key={message.id} className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-lg"><span className="font-bold">Email:</span> {message.email}</p>
                        <p className="text-lg"><span className="font-bold">Mensaje:</span> {message.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mensajes
*/