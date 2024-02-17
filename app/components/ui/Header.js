// Importa los estilos de Tailwind CSS en tu archivo
import "tailwindcss/tailwind.css";
import Link from 'next/link';
import React from 'react';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Productos', href: '/productos/todos' },
  { label: 'Posts', href: '/posts' },
];

const Header = () => {
  return (
    <header className="w-full bg-gray-600">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <Link href={'/'} passHref>
          <div>
            <a className="text-4xl font-bold text-white cursor-pointer">FrannTenis</a>
          </div>
        </Link>

        <nav className="flex justify-between gap-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} passHref>
              <div>
                <a
                  className={`text-base text-white px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300`}
                >
                  {link.label}
                </a>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
