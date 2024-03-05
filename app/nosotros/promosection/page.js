// Importa React y cualquier otra dependencia que necesites
import React from 'react';

const PromoSection = () =>{

  return (
    <section className="">
      <div className="bg-[url('https://s.wsj.net/public/resources/images/BN-UJ094_37TFl_OR_20170720095248.jpg')] h-screen bg-cover bg-center flex justify-items-center items-center">
        <div className="mt-[-60px] px-10 lg:px-32 xl:px-40 text-white">
          <h1 className="text-6xl font-semibold font-serif mb-6">
            <span className="text-black">Hasta 20% Off</span> <br />
            <span>En todo!</span>
          </h1>
          <p className="text-lg max-w-md  bg-black bg-opacity-75 rounded-lg shadow-lg p-8">
            Sin importar para quien desees adquirir tus productos deportivos, aquí encontrarás calzado, accesorios, raquetas e indumentaria para mujer, hombre, niños e incluso Unisex.
            Ciertos productos podrían estar disponibles solo por tiempo limitado, así que adquiere los que más te gusten y aprovecha la oportunidad de realizar tu mejor compra, te aseguramos que no te arrepentirás.
          </p>
          <button className="inline-block mt-10 px-10 py-3 middle none center rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-p-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Adquirir ahora</button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
