import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ item }) => {
  return (
    <article className="basis-72 shadow-lg rounded">
      <Link href={`/productos/detail/${item.slug}`}>
      
          <Image
            alt={item.title}
            src={item.image}
            width={350}
            height={350}
            style={{ objectFit: "contain" }}
          />

          <div className="px-4 border-t border-gray-200">
            <h4 className="text-sm my-4">{item.title}</h4>
            <p className="text-2xl font-semi-bold mb-6">$ {item.price}</p>
          </div>

          {item.inStock === 0 &&
                    <p className="font-semibold text-red-500">
                        No hay stock de ese producto
                    </p>
                }
        
      </Link>

     
    </article>
  
  );
};

export default ProductCard;
