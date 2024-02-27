import ProductsList from "@/app/components/products/ProductsList";
import CategoriesMenu from "@/app/components/products/CategoriesMenu";
import { Suspense } from "react";




export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Productos - ${params.categoria}`,
  };
}

export function generateStaticParams() {
  return [
    { categoria: "todos" },
    { categoria: "raquetas" },
    { categoria: "bolsos" },
    { categoria: "zapatillas" },
  ];
}

export const revalidate = 3600;

const Productos = ({ params }) => {
  const { categoria } = params;

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Nuestros Productos</h1>
      <hr className="border-t-2 border-gray-300 mb-8" />

      <div className="flex flex-col md:flex-row gap-8">
        <CategoriesMenu />

        <Suspense >
          <ProductsList categoria={categoria} />
        </Suspense>
      </div>
    </div>
  );
};

export default Productos;
