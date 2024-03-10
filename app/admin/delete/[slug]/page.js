import DeleteProduct from "@/app/components/admin/DeleteProduct"
const DeleteItem = async ({params}) => {
    const { slug } = params
    const item = await fetch(`${process.env.API_URL}/api/product/${slug}`, {
        cache: "no-store"
    }).then(res => res.json())

    return (
        <div>
            <DeleteProduct item={item} />
        </div>
    )

}

export default DeleteItem