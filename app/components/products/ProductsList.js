import ProductCard from "./ProductCard";

const ProductsList = async ({ categoria }) => {
    try {
        const response = await fetch(`${process.env.API_URL}/api/productos/${categoria}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Next-Tags': 'productos'  // Encabezado personalizado para enviar información adicional
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const items = await response.json();

        if (items) {
            return (
                <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
                    {items.map(item => <ProductCard key={item.slug} item={item} />)}
                </section>
            );
        } else {
            console.error('Cadena JSON vacía o indefinida.');
            return <p>No hay productos para esta categoría.</p>;
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return <p>Error al obtener datos.</p>;
    }
};

export default ProductsList;