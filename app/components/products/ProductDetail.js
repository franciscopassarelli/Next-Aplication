import Image from "next/image";
import GoBack from "../ui/GoBack";
import QtySelector from "./QtySelector";

const ProductDetail = async ({ slug }) => {
    console.log(slug)

    const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
        cache: "no-store",
        next: { revalidate: 0 }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => console.error('Fetch error:', error));

    return (
        <div className="max-w-6xl m-auto border border-gray-200 p-6">
            <GoBack />
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={860}
                        height={860}
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold pb-4 mb-4 mt-16 text-center">
                        {item.title}
                    </h2>
                    <p className="text-4xl font-semibold border-b border-gray-200 pb-2 text-center text-red-400">u$S {item.price}</p>
                    {/* <hr /> */}
                    <QtySelector item={item} />
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">
                    Descripción:
                </h3>
                <p className="text-gray-600">
                    {item.description}
                </p>
            </section>
        </div>
    )
}

export default ProductDetail












/*import Image from "next/image";
import QtySelector from "./QtySelector"
import GoBack from "../ui/GoBack";

const ProductDetail = async ({ slug }) => {
    const item = await fetch(`http://localhost:3000/api/product/${slug}`,{
        cache:'no-store',
        next: {
            revalidate:0
             }
        } ).then(res => res.json())
    


    return (
        <div className="max-w-4xl m-auto">
            <GoBack className="text-sm text-blue-500 underline mb-6"/>
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                <Image
                src={`/imgs/products/${item.image}`}
                alt={item.title}
                width={860}
                height={860}
                />
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
                    <p className="text-4xl">$ {item.price}</p>

                    <QtySelector item={item}/>
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Description</h3>
                <p className="text-gray-600">{item.description}</p>

            </section>
        </div>
    )
}

export default ProductDetail */