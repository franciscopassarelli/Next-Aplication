"use client"
import React, { useState, useEffect } from "react";
import Footer from "../components/ui/Footer";


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
    }, 2000);

    return () => clearInterval(intervalId);
  }, [imagenActual]);
 
  

  return (
    <>
    <div className="bg-gradient-to-b from-slate-500 to-gray-800 min-h-screen">
  
<h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">SOBRE NOSOTROS</span></h1>

<br/>
        <div className="max-w-6xl mx-auto p-4 flex items-center">
          <div className="flex-shrink-0 w-1/2 p-4 bg-black bg-opacity-40">
            <h3 className="text-3xl font-extrabold mb-4 text-white color-changing-title">NUESTRA TIENDA</h3>
            
 

            <p className="mb-4 text-lg leading-relaxed text-gray-400">
             <i className="text-xl font-bold  text-blue-500">FranTenis</i> comenzó como un proyecto personal que ha florecido y se ha transformado en una tienda en línea próspera. Iniciamos este viaje como un emprendimiento independiente, y ahora estamos emocionados de presentar nuestra tienda en línea al mundo. Desde sus modestos comienzos como un proyecto propio, <i className="text-bold text-yellow-500">FranTenis</i> ha evolucionado para ofrecerte una experiencia única en nuestra tienda en línea especializada.
            </p>

            <p className="mb-4 text-lg leading-relaxed text-gray-400">
            <a className="text-xl font-bold text-blue-300">H</a>ace 4 años, respondimos a la demanda de los clubes en la ciudad de zona oeste y superamos las expectativas de tenistas de diversas edades y categorías. Nos enorgullece ofrecer no solo productos de alta calidad, sino también un servicio eficiente a nuestros clientes. <i className="text-bold text-yellow-500">FranTenis</i> abarca una amplia gama de indumentaria para el disfrute del tenis, tanto como actividad lúdica como deportiva.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
            <a className="text-xl font-bold text-blue-300">N</a>uestro equipo actual, compuesto por apasionados amantes del tenis, comprende las exigencias de nuestros clientes. Estamos comprometidos a brindar la mejor experiencia y a seguir evolucionando para satisfacer tus necesidades.
            </p>
          </div>

          <div className="flex-shrink-0 w-1/2 p-4">
            <div className="w-full h-auto rounded-md overflow-hidden image-container">
              <img
                src={imagenes[imagenActual]}
                alt="Zapatos de Tenis"
                className="w-full h-full object-cover"
              
              />
            </div>
          </div>
          
        </div>
      </div>
      <style jsx>{`
  .bg-gradient-to-b {
    /* Puedes ajustar el estilo del fondo según tus necesidades */
  }

  h2 {
    /* Estilos adicionales para el título SOBRE NOSOTROS */
    margin-bottom: 1rem; /* Ajusta la separación entre el título y el contenido */
  }

  /* Resto de estilos... */
`}</style>

      <Footer />
    </>
  );
}

