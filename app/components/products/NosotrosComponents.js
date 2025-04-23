"use client";
import { useState, useEffect } from "react";
import Footer from "../ui/Footer";
import Image from "next/image";

export default function NosotrosComponent() {
  const [imagenActual, setImagenActual] = useState(0);
  const imagenes = [
    "https://http2.mlstatic.com/D_NQ_NP_665553-MLA50802574325_072022-O.webp",
    "https://dcdn.mitiendanube.com/stores/080/906/products/rhpurestrikex1231-4acd5909b4562f578c16205949349253-1024-1024.jpg",
    "https://d28hi93gr697ol.cloudfront.net/5a1a70e1-6321-6944-ed93-67a485503504/img/Producto/4b32ba53-ed90-e5ff-aaac-5ebccda49fa5/HEAD-Cubregrip-Prime-Pro-Blanco-63da6e6e8952e.jpg",
    "https://http2.mlstatic.com/D_NQ_NP_792494-MLA46933540533_072021-O.webp",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImagenActual((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-gray-700 to-gray-900 min-h-screen text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500">
              SOBRE NOSOTROS
            </span>
          </h1>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 space-y-6 bg-black bg-opacity-30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">NUESTRA TIENDA</h3>

              <p className="text-lg leading-relaxed text-gray-300">
                <strong className="text-blue-400">FranTenis</strong> comenzó como un proyecto personal que ha florecido y se ha transformado en una tienda en línea próspera. Desde sus modestos comienzos, <span className="text-yellow-400">FranTenis</span> ha evolucionado para ofrecerte una experiencia única.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                Hace 4 años, respondimos a la demanda de clubes en la zona oeste y superamos las expectativas de tenistas de todas las edades. Nos enorgullece ofrecer productos de calidad y un servicio eficiente.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                Nuestro equipo, compuesto por amantes del tenis, comprende las exigencias de nuestros clientes. Estamos comprometidos con brindar la mejor experiencia.
              </p>
            </div>

            <div className="md:w-1/2 w-full flex justify-center">
              <div className="w-full md:w-4/5 rounded overflow-hidden shadow-lg transition duration-500 ease-in-out">
                <Image
                  src={imagenes[imagenActual]}
                  alt="Imagen de producto"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 rounded transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
