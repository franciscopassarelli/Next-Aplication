"use client"
import React from 'react';
import Boton from '../components/ui/Boton';
import Link from 'next/link';

const ThanksContact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        ¡Agradecemos su comentario!
                    </h2>
                    <h3 className="text-xl font-medium text-gray-600 mb-8">
                        FrannTenis
                    </h3>
                    <Link href="/">
                        <Boton className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Volver a la página principal
                        </Boton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThanksContact;

