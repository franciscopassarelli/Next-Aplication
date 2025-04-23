import Image from "next/image"
import Link from "next/link"
import { Pencil, Trash2 } from "lucide-react"

const ProductsTable = async () => {
    const items = await fetch(`${process.env.API_URL}/api/productos/todos`, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <div className="space-y-6 h-full">
            {/* Vista Desktop & Tablet */}
            <div className="hidden md:block">
                <table className="min-w-full text-sm text-left text-white bg-gray-800">
                    <thead className="text-md text-red-500 border-b">
                        <tr>
                            <th className="px-2 py-2 text-center"></th>
                            <th className="px-2 py-2">Nombre</th>
                            <th className="px-2 py-2">Precio</th>
                            <th className="px-2 py-2">Stock</th>
                            <th className="px-2 py-2">Tipo</th>
                            <th className="px-2 py-2 hidden lg:table-cell">Slug</th>
                            <th className="px-2 py-2 hidden lg:table-cell text-center">Descripción</th>
                            <th className="px-2 py-2 text-center">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item) => (
                            <tr key={item.slug} className="border-b hover:bg-gray-700 transition-all">
                                <td className="p-2 text-center">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={70}
                                        height={50}
                                        className="object-cover rounded"
                                    />
                                </td>
                                <td className="p-2 max-w-[150px] truncate">{item.title}</td>
                                <td className="p-2 text-center">u$s {item.price}</td>
                                <td className="p-2 text-center">{item.inStock}</td>
                                <td className="p-2 text-center">{item.type}</td>
                                <td className="p-2 max-w-[120px] truncate hidden lg:table-cell">{item.slug}</td>
                                <td className="p-2 max-w-[200px] hidden lg:table-cell text-center relative group">
                                    <button className="text-sm text-red-400 underline hover:text-red-300">
                                        Ver descripción
                                    </button>
                                    <div className="absolute z-10 right-full mr-3 top-1/2 -translate-y-1/2 w-64 p-2 text-xs text-white bg-black rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none">
                                        {item.description}
                                    </div>
                                </td>

                                <td className="p-2 text-center">
                                    <div className="flex justify-center gap-2">
                                        <Link href={`/admin/edit/${item.slug}`}>
                                            <button className="p-1 text-blue-500 hover:text-blue-700">
                                                <Pencil size={20} />
                                            </button>
                                        </Link>
                                        <Link href={`/admin/delete/${item.slug}`}>
                                            <button className="p-1 text-red-600 hover:text-red-800">
                                                <Trash2 size={20} />
                                            </button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Vista Mobile */}
            <div className="md:hidden space-y-4">
                {items.map((item) => (
                    <div key={item.slug} className="bg-gray-800 p-4 rounded-lg space-y-3 border border-gray-600">
                        <div className="flex items-center space-x-4">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={70}
                                height={50}
                                className="object-cover rounded"
                            />
                            <div>
                                <h3 className="text-base text-red-500 font-semibold">{item.title}</h3>
                                <p className="text-sm text-white">u$s {item.price}</p>
                                <p className="text-xs text-gray-300">Stock: {item.inStock}</p>
                                <p className="text-xs text-gray-300">Tipo: {item.type}</p>
                            </div>
                        </div>

                        <div className="text-sm text-white space-y-1">
                            <p><strong>Slug:</strong> {item.slug}</p>
                            <p><strong>Descripción:</strong> {item.description}</p>
                        </div>

                        <div className="flex justify-center gap-4">
                            <Link href={`/admin/edit/${item.slug}`}>
                                <button className="p-1 text-blue-500 hover:text-blue-700">
                                    <Pencil size={20} />
                                </button>
                            </Link>
                            <Link href={`/admin/delete/${item.slug}`}>
                                <button className="p-1 text-red-600 hover:text-red-800">
                                    <Trash2 size={20} />
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
