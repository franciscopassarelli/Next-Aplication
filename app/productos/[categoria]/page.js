import ProductsList from "@/app/components/products/ProductsList";
import CategoriesMenu from "@/app/components/products/CategoriesMenu";
import { Suspense } from "react";
import Footer from "@/app/components/ui/Footer";
const Productos = ({ params }) => {
  const { categoria } = params;

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Nuestros Productos</h1>
      <hr className="border-t-2 border-gray-300 mb-8" />

      <div className="flex flex-col md:flex-row gap-8">
        
        <div className="md:w-1/4 bg-gray-900 p-4 rounded-lg" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <div className="md:sticky md:top-0">
           
            <CategoriesMenu />
          </div>
        </div>
        <div className="md:w-3/4">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductsList categoria={categoria} />
          </Suspense>
        </div>
      </div>
      <br/>
      <hr className="border-t-2 border-gray-500 mb-8" />

      <Footer/>
    </div>
  );
};

export default Productos;
