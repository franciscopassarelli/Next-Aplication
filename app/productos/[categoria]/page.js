import CategoriesMenu from "@/app/components/products/CategoriesMenu"
import ProductsList from "@/app/components/products/ProductsList"

export async function generateMetadata({params, searchParams}, parent) {
    return{
        title: `coderApp - ${params.categoria}`,
    }
}

const Productos = ({params}) => {
    const {categoria} = params
    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>
            <CategoriesMenu />
            <ProductsList categoria={categoria}/>
        </main>
    )

}
export default Productos