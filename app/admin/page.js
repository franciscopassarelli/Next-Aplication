import ProductsTable from "../components/admin/ProductsTable";
import Boton from "../components/ui/Boton";
import Link from "next/link";
import LogoutButton from "../components/admin/LogoutButton";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-6 px-4">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-4 mb-6 gap-4">
          <h2 className="text-3xl font-bold text-gray-100 animate-pulse">
            Panel de administración
          </h2>
          <LogoutButton />
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <Link href="/admin/create">
            <Boton className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg border border-green-600">
              Agregar nuevo producto
            </Boton>
          </Link>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/orders">
              <Boton className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg border border-blue-600">
                Ver órdenes
              </Boton>
            </Link>

            <Link href="/mensajes">
              <Boton className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg border border-yellow-600">
                Ver mensajes
              </Boton>
            </Link>
          </div>
        </div>

        {/* Tabla */}
        <p className="text-2xl font-semibold text-red-400 mb-4">Productos:</p>
        <ProductsTable />
      </div>

      {/* Volver a la tienda */}
      <div className="flex justify-center mt-6">
        <Link href="/">
          <Boton className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg border border-gray-500">
            Volver a la tienda
          </Boton>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
