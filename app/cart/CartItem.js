import Image from "next/image"
const CartItem = async ({ item }) => {

    return (
        <div className="container m-auto ml-6 mb-4">
            <div className="grid grid-cols-6 gap-2">
                <div className="col-start-1">
                    <Image 
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    />
                </div>
                <div className="col-start-2 col-end-5">{item.title}</div>
                <div className="col-start-6 text-red-600">U$S {item.price}</div>
            </div>
        </div>
    )
}

export default CartItem