import Image from "next/image";
import GoBack from "../ui/GoBack";
import QtySelector from "./QtySelector";

const ProductDetail = async ({ slug }) => {
  const item = await fetch(`http://localhost:3000/api/product/${slug}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => console.error('Fetch error:', error));




  return (
    <div className="max-w-6xl m-auto border border-gray-200 p-6">
      <GoBack />

      <section className="flex gap-6 mt-8">
        <div className="relative w-1/2">
          <Image
            src={item.image}
            alt={item.title}
            width={220}
            height={220}
            className="rounded-lg"
          />
        </div>

        <div className="w-1/2">
          <h2 className="text-3xl font-semibold mb-4 mt-8 text-center">
            {item.title}
          </h2>
          <p className="text-2xl font-semibold border-b border-gray-200 pb-2 text-center text-red-500">
            $ {item.price}
          </p>

          <QtySelector item={item} />
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold border-b border-gray-200 pb-4 my-4">
          Descripción:
        </h3>
        <p className="text-gray-800 leading-7">{item.description}</p>
      </section>
    </div>
  );
};

export default ProductDetail;