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
