
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
