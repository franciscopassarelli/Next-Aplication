const Footer = () => {
    return (
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1">
              <h2 className="text-xl font-semibold text-white mb-4">Enlaces</h2>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Inicio</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Servicios</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Productos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Acerca de</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-semibold text-white mb-4">Contacto</h2>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Teléfono:</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Email: franiscopassarelli7@gmail.com</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Dirección: Paso Del Rey</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-semibold text-white mb-4">Redes Sociales</h2>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gray-400">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gray-400">LinkedIn</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-semibold text-white mb-4">Newsletter</h2>
              <p className="text-gray-300">Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones.</p>
              <form className="mt-4">
                <input type="email" className="w-full bg-gray-700 text-white border border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Tu correo electrónico" />
                <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Suscribirse</button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base text-gray-300 text-center py-4">&copy; {new Date().getFullYear()} FrannTenis. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  