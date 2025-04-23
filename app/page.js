
import React from "react";
import Footer from "./components/ui/Footer";
import Image from "next/image";
const WelcomeBanner = () => {
  return (
    <div className="bg-animated text-white p-6 rounded-md shadow-md text-center">
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
            <Image src="/images/tiafoe.png" alt="Tenis 1" className="w-full h-48 object-cover mb-4 rounded-md"  width={500} height={300} />
            <h2 className="text-lg font-bold text-gray-800 mb-2">adquirí tu outfit</h2>
            <p className="text-sm text-gray-600">con qué pensas jugar? no te falte nada!!</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <Image src="/images/zapatilla.png" alt="Tenis 2" className="w-full h-48 object-cover mb-4 rounded-md" width={500} height={300} />
            <h2 className="text-lg font-bold text-gray-800 mb-2">Juga bien plantado!</h2>
            <p className="text-sm text-gray-600">Nada mejor que prevenir lesiones y estar comodo con un juego solido de pies.</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <Image src="/images/raqueta.png" alt="Tenis 3" className="w-full h-48 object-cover mb-4 rounded-md" width={500} height={300}/>
            <h2 className="text-lg font-bold text-gray-800 mb-2">Optas por las sensaciones?</h2>
            <p className="text-sm text-gray-600">Encordamos raquetas y ofrecemos las mejores cuerdas del circuito y mas...</p>
          </div>
          {/* Fin del ejemplo de tarjeta de presentación de producto */}



        
        </div>








        <div className="bg-white">
  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nueva Head Speed MP</h2>
      <p className="mt-4 text-gray-500">Las nuevas raquetas de tenis Head Speed 2024 han captado la atención de los aficionados al tenis de todo el mundo, generando grandes expectativas gracias a promesas de innovaciones y mejoras de rendimiento. En esta reseña exploraremos en detalle las características de esta nueva serie, centrándonos especialmente en la SPEED MP 2024, la raqueta elegida por Jannik Sinner, confirmando así la calidad y eficacia de estos nuevos modelos también desde la perspectiva de un avanzado Jugador de nivel.</p>

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Origen</dt>
          <dd className="mt-2 text-sm text-gray-500">Made in Austria.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Material</dt>
          <dd className="mt-2 text-sm text-gray-500">Componentes de la raqueta: Grafito.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Dimensiones</dt>
          <dd className="mt-2 text-sm text-gray-500">TAMAÑO DE CABEZA: 645 cm² / 100 in², TAMAÑO DE GRIP: 1-5.&quot; LONGITUD: 685 mm / 27.0 in.&quot; PERFIL DEL MARCO: 23 mm.&quot;</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Equilibrio Balance</dt>
          <dd className="mt-2 text-sm text-gray-500">320 mm / 1 in HL.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Cordaje</dt>
          <dd className="mt-2 text-sm text-gray-500">PATRÓN DE ENCORDADO: 16/19.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Color </dt>
          <dd className="mt-2 text-sm text-gray-500">Blanco y Negro.</dd>
        </div>
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
    <Image src="https://www.mistertennis.com/media/src/head-speed-carousel-article_A.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" width={300} height={350} />
      <Image src="https://www.mistertennis.com/media/src/head-speed-carousel-article_B.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100" width={250} height={100} />
      <Image src="https://www.mistertennis.com/media/src/head-speed-carousel-article_C.jpg" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100" width={250} height={100} />
      <Image src="https://www.mistertennis.com/media/products/2024-media-01/head-speed-mp-racchetta-da-tennis-236014_H-600x600.jpg" alt="Walnut card tray filled with cards and card angled in dedihttps://www.mistertennis.com/media/src/head-speed-carousel-article_D.jpgcated groove." className="rounded-lg bg-gray-100" width={300} height={350} />
    </div>
  
  </div>
  <hr className="border-t-2 border-gray-300 mb-8" />
</div>
      </main>
    
      <Footer />
    </div>
       
  );
}
