import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Enlaces</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-cyan-400">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos/todos" className="text-gray-300 hover:text-cyan-400">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-300 hover:text-cyan-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#B7B7B7" className="mr-2">
                    <g>
                      <rect fill="none" height="24" width="24"/>
                    </g>
                    <g>
                      <circle cx="17" cy="15.5" fill-rule="evenodd" r="1.12"/>
                      <path d="M17,17.5c-0.73,0-2.19,0.36-2.24,1.08c0.5,0.71,1.32,1.17,2.24,1.17s1.74-0.46,2.24-1.17C19.19,17.86,17.73,17.5,17,17.5z" fill-rule="evenodd"/>
                      <path d="M18,11.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55C13.18,21.99,14.97,23,17,23c3.31,0,6-2.69,6-6C23,14.03,20.84,11.57,18,11.09z M11,17c0,0.56,0.08,1.11,0.23,1.62c-0.24,0.11-0.48,0.22-0.73,0.3c-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4l5.5,2.4v3.51C13.16,11.57,11,14.03,11,17z M17,21c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C21,19.21,19.21,21,17,21z" fill-rule="evenodd"/>
                    </g>
                  </svg>
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Contacto</h2>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400">Email: franiscopassarelli7@gmail.com</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400">Dirección: Paso Del Rey</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Redes Sociales</h2>
            <ul className="space-y-4">
              <li><a href="https://github.com/franciscopassarelli" className="text-gray-300 hover:text-cyan-400">Github</a></li>
              <li><a href="https://www.linkedin.com/in/franciscopassarelli/" className="text-gray-300 hover:text-cyan-400">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Newsletter</h2>
            <p className="text-gray-300">Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones.</p>
            <form className="mt-4">
              <input type="email" className="w-full bg-gray-700 text-white border border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-cyan-500" placeholder="Tu correo electrónico" />
              <button type="submit" className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-cyan-600">Suscribirse</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-base text-gray-300 text-center py-4">&copy; {new Date().getFullYear()} FranTenis. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
