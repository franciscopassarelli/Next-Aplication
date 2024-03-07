import Image from "next/image"
import Link from "next/link"

const ProductsTable = async () => {
const items = await fetch (`${process.env.API_URL}/api/productos/todos`,{
    cache:'no-store',
    }).then(r => r.json())

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-black-600">
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
                                />

                            </td>
                            <td className="p-2 truncate max-w-prose">{item.title}</td>
                            <td className="p-2 text-center">u$s {item.price}</td>
                            <td className="p-2 text-center">{item.inStock}</td>
                            <td className="p-2 text-center">{item.type}</td>
                            <td className="p-2 text-left">{item.slug}</td>
                            <td className="p-2 truncate max-w-prose">{item.description}</td>
                            <td className="p-2">
                                <Link href={`/admin/edit/${item.slug}`} className="rounded bg-blue-400 p-2 text-white hover:bg-blue-600">
                                    Editar
                                </Link>
                                <Link href={`/admin/delete/${item.slug}`}className="rounded bg-red-400 p-2 text-white hover:bg-red-600">
                  
                    X
                  
                </Link>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable