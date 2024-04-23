import ProductsTable from "../components/admin/ProductsTable"
import Boton from "../components/ui/Boton"
import Link from "next/link"
import LogoutButton from "../components/admin/LogoutButton"

const Admin = () => {
    return (
        <div className="container m-auto mt-6 bg-gray-900 text-white"> {/* Cambiamos el color del panel a oscuro y el color del texto a blanco */}
            <div className="border border-gray-600 rounded p-4"> {/* Cambiamos el color del borde a un tono más oscuro */}
                <div className="grid grid-cols-4 gap-4 border-b mb-6">
                    <h2 className="text-3xl text-gray-300 mb-6 font-bold animate-pulse align-top">Panel de administración</h2> {/* Cambiamos el color del título a rojo */}
                    <div className="col-start-5">
                        <LogoutButton />
                    </div>
                </div>

                <div className="mb-6 flex flex-col md:flex-row md:justify-between items-center"> {/* Utilizamos flexbox para alinear los botones */}
                    <Link href="/admin/create">
                        <Boton className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-lg border border-green-600 mb-4 md:mb-0 md:mr-3">
                            Agregar nuevo producto
                        </Boton>
                    </Link>
                
                    <div className="space-y-3 md:space-y-0 md:space-x-3"> {/* Agregamos espacio entre los botones */}
                        <Link href="/orders">
                            <Boton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg border border-blue-600">
                                Ver órdenes
                            </Boton>
                        </Link>

                        <Link href="/mensajes">
                            <Boton className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded-lg border border-yellow-600">
                                Ver mensajes
                            </Boton>
                        </Link>
                    </div>
                </div>

                <p className="text-2xl pb-4 text-red-400 align-top">Productos:</p> {/* Cambiamos el color del texto a rojo */}
                <ProductsTable />
            </div>
        </div>
    )
}

export default Admin
