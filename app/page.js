
import React from "react";
import Footer from "./components/ui/Footer";

const WelcomeBanner = () => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-md shadow-md text-center">
      <h1 className="text-5xl font-bold mb-2">¡Bienvenido a nuestra tienda de tenis!</h1>
      <p className="text-lg">Encuentra los mejores productos para tu estilo deportivo.</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4">
        <WelcomeBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Agrega aquí tus productos de tenis (pueden ir en otro componente) */}
          {/* Ejemplo de tarjeta de presentación de producto */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/16/16738859090606.jpg" alt="Tenis 1" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-bold text-gray-800 mb-2">adquirí tu outfit</h2>
            <p className="text-sm text-gray-600">con qué pensas jugar? no te falte nada!!</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <img src="https://http2.mlstatic.com/D_NQ_NP_665553-MLA50802574325_072022-O.webp" alt="Tenis 2" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-bold text-gray-800 mb-2">Juga bien plantado!</h2>
            <p className="text-sm text-gray-600">Nada mejor que prevenir lesiones y estar comodo con un juego solido de pies.</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <img src="https://cdn-magento2-media.head.com/wysiwyg/HEAD_MMO2021_3.jpg" alt="Tenis 3" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-bold text-gray-800 mb-2">Optas por las sensaciones?</h2>
            <p className="text-sm text-gray-600">Encordamos raquetas y ofrecemos las mejores cuerdas del circuito y mas...</p>
          </div>
          {/* Fin del ejemplo de tarjeta de presentación de producto */}
        </div>

      </main>
      <Footer />
    </div>
  );
}
