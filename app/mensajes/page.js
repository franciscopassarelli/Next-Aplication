import LogoutButton from "../components/admin/LogoutButton";
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
        <div className="container m-auto mt-6">
            <div className="grid justify-items-end">
                <LogoutButton />
            </div>
            <h2 className="text-3xl my-10 border-b pb-4 text-blue-600">
                Mensajes recibidos
            </h2>

            <ul>
                {
                    msg.map(message => (
                        <li key={message.id}>
                            <p className="text-xl">Email: <b>{message.email}</b></p>
                            <p className="text-x">Mensaje: {message.text}</p>
                            <br />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Mensajes