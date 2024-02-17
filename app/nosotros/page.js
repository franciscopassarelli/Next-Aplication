import Footer from "../components/ui/Footer";



export const metadata = {
  title:'Nosotros - FrannTenis',
  description:'Conoce nuestra historia'
}



export default function Nosotros ()  {
  return (

    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">{metadata.title}</h1>
        <p className="text-lg">{metadata.description}</p>
      </header>

      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Nosotros</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Bienvenido a nuestra tienda de tenis, donde ofrecemos la mejor selección de productos para los amantes del tenis.
        </p>

        <h3 className="text-2xl font-bold mb-2">Nuestro Producto Destacado: Zapatos de Tenis</h3>
        <div className="mb-4">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_665553-MLA50802574325_072022-O.webp"
            alt="Zapatos de Tenis"
            className="w-full h-auto rounded-md"
          />
        </div>

        <p className="mb-4 text-lg leading-relaxed">
          Descubre nuestros últimos zapatos de tenis diseñados para brindar comodidad, estilo y rendimiento en la cancha. Estos zapatos están fabricados con los mejores materiales para garantizar durabilidad y soporte durante tus partidos.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Características destacadas:
          <ul className="list-disc pl-4">
            <li>Material transpirable para mantener tus pies frescos.</li>
            <li>Suela antideslizante para un mejor agarre en la cancha.</li>
            <li>Diseño moderno y elegante.</li>
          </ul>
        </p>

        <p className="text-lg leading-relaxed">
          ¡No te pierdas la oportunidad de mejorar tu juego con nuestros increíbles zapatos de tenis! Compra ahora y experimenta la diferencia.
        </p>
      </div>

      <Footer />
    </div>
  );
}
