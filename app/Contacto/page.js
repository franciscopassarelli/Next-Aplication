
import React from 'react';
import ContactForm from '../components/contacto/ContactForm';

const Contacto = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="container mx-auto flex-grow p-4">
        <h1 className="text-4xl text-blue-600 font-bold my-4">Contacto</h1>
        <hr />
        <ContactForm />
      </main>
    
    </div>
  );
};

export default Contacto;
