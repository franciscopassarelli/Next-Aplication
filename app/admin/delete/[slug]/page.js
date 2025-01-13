import DeleteProduct from "@/app/components/admin/DeleteProduct";

const DeleteItem = async ({ params }) => {
    const { slug } = params;

    // Definir la URL de la API
    const url = `${process.env.API_URL}/api/product/${slug}`;
    
    try {
        // Intentamos obtener los detalles del producto (asumiendo que es un GET)
        const res = await fetch(url, {
            cache: "no-store"
        });

        // Verificamos si la respuesta fue exitosa
        if (!res.ok) {
            throw new Error(`Error al obtener el producto: ${res.statusText}`);
        }

        // Intentamos parsear la respuesta como JSON
        const item = await res.json();

        // Verificar si la respuesta es válida (por si el producto no existe)
        if (!item) {
            throw new Error("Producto no encontrado");
        }

        // Mostrar el componente de eliminación
        return (
            <div>
                <DeleteProduct item={item} />
            </div>
        );

    } catch (error) {
        console.error("Error al obtener los datos del producto:", error.message);
        return <div>Error: {error.message}</div>; // Mostrar el error al usuario
    }
};

export default DeleteItem;
