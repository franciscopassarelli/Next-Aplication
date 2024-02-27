import ProductDetail from "@/app/components/products/ProductDetail"
function DetalleProductos({params}) {
    const {slug} = params
  return (
    <div>
        <ProductDetail slug={slug}/>
    </div>
  )
}

export default DetalleProductos






