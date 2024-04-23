"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import CartWidget from './CartWidget';
import { useRouter } from 'next/router';

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleMenu = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={'/'} passHref>
                <div className="text-center pl-5">
                  <p className="relative inline cursor-pointer text-3xl font-medium text-white before:bg-blue-800 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 md:ml-0">FrannTenis</p>
                </div>
              </Link>
            </div>
            <div className="hidden md:block ml-60">
              <div className="ml-60 flex items-center space-x-4">
                <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  Inicio
                </Link>
                <Link href="/nosotros" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  Nosotros
                </Link>
                <Link href="/Contacto" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  Contacto
                </Link>
                <Link href="/productos/todos" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  Productos
                </Link>
                <Link href="/admin" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                  Admin
                </Link>
                <CartWidget/>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover-text-white focus-outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleMenu}>
              {isClick ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/inicio" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Inicio
              </Link>
              <Link href="/nostoros" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Nosotros
              </Link>
              <Link href="/Contacto" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Contacto
              </Link>
              <Link href="/productos/todos" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Productos
              </Link>
              <Link href="/admin" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Admin
              </Link>
              <CartWidget/>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
