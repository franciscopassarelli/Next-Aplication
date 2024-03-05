import React from 'react';
import ContactForm from '../components/contacto/ContactForm';

const Contacto = () => {
  return (
    <div className="bg-blue-800 min-h-screen flex flex-col">
      <main className="container mx-auto flex-grow p-4 bg-gradient-to-r from-sky-800 to-gray-900">
        <div className="bg-white bg-opacity-75 rounded p-6">
          <h1 className="text-4xl text-gray-900 font-bold mb-4">Contacto</h1>
          <hr />
          <br />
          <ContactForm />
        </div>
      </main>
    </div>
  );
};
export default Contacto