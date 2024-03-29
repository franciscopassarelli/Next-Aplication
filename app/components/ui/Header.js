import Link from 'next/link';
import React from 'react';
import CartWidget from './CartWidget';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Productos', href: '/productos/todos' },
  { label: 'Admin', href: '/admin'}
];

const Header = () => {
  return (
    <header className="w-full bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <Link href={'/'} passHref>
          <div className='text-center pl-5'>
            <p className="relative inline cursor-pointer text-3xl font-medium text-white before:bg-blue-800 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">FrannTenis</p>
          </div>
        </Link>

        <nav className="flex justify-between gap-4 pr-5">
          {links.map((link) => (
            <Link key={link.label} href={link.href} passHref>
              <div>
                <p
                  className={`text-base text-white px-3 py-2 rounded hover:bg-blue-800 hover:text-white transition-all duration-300`}
                >
                  {link.label}
                </p>
              </div>
            </Link>
          ))}
          <CartWidget/>
        </nav>
      </div>
    </header>
  );
};

export default Header;