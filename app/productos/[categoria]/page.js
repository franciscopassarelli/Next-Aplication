import ProductsList from "@/app/components/products/ProductsList";
import CategoriesMenu from "@/app/components/products/CategoriesMenu";
import { Suspense } from "react";

const Productos = ({ params }) => {
  const { categoria } = params;

  return (
    <div className="container mx-auto my-12 px-6 min-h-screen flex flex-col">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
        Nuestros Productos
      </h1>
      <hr className="border-t-4 border-gray-300 mx-auto w-24 mb-8" />

      <div className="flex flex-col md:flex-row gap-10 flex-1">
        {/* Menú de Categorías */}
        <div className="md:w-1/4 bg-gray-900 p-5 rounded-lg shadow-lg">
          <div className="md:sticky md:top-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
            <CategoriesMenu />
          </div>
        </div>

        {/* Lista de Productos */}
        <div className="md:w-3/4 flex-grow">
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <ProductsList categoria={categoria} />
          </Suspense>
        </div>
      </div>

      
    </div>
  );
};

export default Productos;
