import Image from "next/image"
import Link from "next/link"

const ProductsTable = async () => {
    const items = await fetch(`${process.env.API_URL}/api/productos/todos`, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <div className="space-y-6">
            {/* Vista de Desktop: Tabla */}
            <div className="hidden md:block">
                <table className="min-w-full text-xs text-left text-white bg-gray-800">
                    <thead className="text-xl text-red-600 border-b">
                        <tr>
                            <th scope="col" className="px-3 py-2 text-center"></th>
                            <th scope="col" className="px-3 py-2">Nombre</th>
                            <th scope="col" className="px-3 py-2">Precio</th>
                            <th scope="col" className="px-3 py-2">Stock</th>
                            <th scope="col" className="px-3 py-2">Tipo</th>
                            <th scope="col" className="px-3 py-2">Slug</th>
                            <th scope="col" className="px-3 py-2">Descripción</th>
                            <th scope="col" className="px-3 py-2">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item) => (
                            <tr key={item.slug} className="border-b">
                                <td className="p-2">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={60}
                                        className="object-cover"
                                    />
                                </td>
                                <td className="p-2 truncate max-w-xs sm:max-w-md">{item.title}</td>
                                <td className="p-2 text-center">u$s {item.price}</td>
                                <td className="p-2 text-center">{item.inStock}</td>
                                <td className="p-2 text-center">{item.type}</td>
                                <td className="p-2 text-left truncate max-w-xs sm:max-w-md">{item.slug}</td>
                                <td className="p-2 truncate max-w-xs sm:max-w-md">{item.description}</td>
                                <td className="p-2 space-x-2 text-center">
                                    <Link href={`/admin/edit/${item.slug}`}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm">
                                            Editar
                                        </button>
                                    </Link>
                                    <Link href={`/admin/delete/${item.slug}`}>
                                        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded text-sm">
                                            Eliminar
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Vista Móvil: Tarjetas o Bloques */}
            <div className="md:hidden space-y-4" >
                {items.map((item) => (
                    <div key={item.slug} className="bg-gray-800 p-4 rounded-lg space-y-3 border border-gray-400">
                        <div className="flex items-center space-x-4">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={80}
                                height={60}
                                className="object-cover rounded"
                            />
                            <div>
                                <h3 className="text-lg text-red-600">{item.title}</h3>
                                <p className="text-sm text-white">u$s {item.price}</p>
                                <p className="text-xs text-white">Stock: {item.inStock}</p>
                                <p className="text-xs text-white">Tipo: {item.type}</p>
                            </div>
                        </div>

                        <div className="text-sm text-white space-y-1">
                            <p><strong>Slug:</strong> {item.slug}</p>
                            <p><strong>Descripción:</strong> {item.description}</p>
                        </div>

                        <div className="space-x-2 text-center">
                            <Link href={`/admin/edit/${item.slug}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm">
                                    Editar
                                </button>
                            </Link>
                            <Link href={`/admin/delete/${item.slug}`}>
                                <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded text-sm">
                                    Eliminar
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsTable
