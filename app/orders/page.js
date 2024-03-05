import LogoutButton from "../components/admin/LogoutButton";
import { db } from "../firebase/config"
import { collection, getDocs } from "firebase/firestore";

const getOrders = async () => {
    const ordersRef = collection(db, "ordenes")
    const querySnapShot = await getDocs(ordersRef)
    const docs = querySnapShot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    return docs
}

const Orders = async () => {
    const orders = await getOrders()

    return (
        <div className="container m-auto mt-6">
            <div className="grid justify-items-end">
                <LogoutButton/>
            </div>
            <h2 className="text-3xl my-10 border-b pb-4 text-red-600">
                Órdenes
            </h2>

            <ul>
                {
                    orders.map(order => (
                        <li key={order.id}>
                            <p className="text-xl">Comprador: <b>{order.client.nombre}</b></p>
                            <p className="text-xl">Dirección: {order.client.direccion}</p>
                            <p className="text-xl">Email: {order.client.email}</p>
                            <p className="text-xl mb-2">Fecha: {order.date.slice(0, 10)}</p>
                            <p>Productos:</p>
                            <ul className="border-b mb-2 pb-2">
                                {order.items.map((item) => (
                                    <li key={item.slug}>({item.quantity}) {item.title}</li>
                                ))}
                            </ul>
                            <br />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Orders