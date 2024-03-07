import ProductCard from "./ProductCard";

const ProductsList = async ({ categoria }) => {
    try {
        const response = await fetch(`${process.env.API_URL}/api/productos/${categoria}`, {
            cache: "no-store",
            next: { tags: ["productos"] },
            headers: { 'Content-Type': 'application/json' }  
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const items = await response.json();
        if (items) {
            return (
                <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
                    {items.map(item => <ProductCard key={item.slug} item={item} />)}
                </section>
            )
        } else {
            console.error('Cadena JSON vacía o indefinida.');
            return <p>No hay productos para esta categoria.</p>;
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }

    return <p>No hay productos</p>;
}


export default ProductsList