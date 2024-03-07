import EditForm from "@/app/components/admin/EditForm"
const EditPage = async ({ params }) => {
    const { slug } = params
    const item = await fetch(`${process.env.API_URL}/api/product/${slug}`, {
        cache: "no-store"
    }).then(res => res.json())

    return(
        <div>
            <EditForm item={item} />
        </div>
    )
}

export default EditPage