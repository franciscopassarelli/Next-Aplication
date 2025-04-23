import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <article className="basis-72 bg-white rounded-xl shadow-md border border-gray-200 transition hover:shadow-lg">
      <Link href={`/productos/detail/${item.slug}`} className="block">
        <Image
          alt={item.title}
          src={item.image}
          width={350}
          height={350}
          style={{ objectFit: "contain" }}
          className="rounded-t-xl bg-gray-50"
        />

        <div className="px-4 py-3 border-t border-gray-100">
          <h4 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
            {item.title}
          </h4>
          <p className="text-lg font-bold text-red-600 mb-2">
            $ {item.price}
          </p>

          {item.inStock === 0 && (
            <p className="text-sm font-medium text-red-500 bg-red-100 px-2 py-1 rounded-md w-fit">
              No hay stock
            </p>
          )}
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
