
import Link from 'next/link';
import React from 'react';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Productos', href: '/productos/todos' },
  { label: 'Add', href: '/login' },
];

const Header = () => {
  return (
    <header className="w-full bg-gray-600">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <Link href={'/'} passHref>
          <div>
            <p className="text-4xl font-bold text-white cursor-pointer">FrannTenis</p>
          </div>
        </Link>

        <nav className="flex justify-between gap-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} passHref>
              <div>
                <p
                  className={`text-base text-white px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300`}
                >
                  {link.label}
                </p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
