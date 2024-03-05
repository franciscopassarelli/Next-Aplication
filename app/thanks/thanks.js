"use client"

import React from 'react'
import Boton from '../components/ui/Boton'
import { useRouter } from "next/navigation"

const Thanks = () => {
    const router = useRouter()
    return (
        <div className='container m-auto mr-6'>
            <h2 className='text-2xl text-red-600'>
                Gracias por su compra!
            </h2>
            <h2 className='text-xl mb-6'>
                FrannTenis
            </h2>

            <Boton onClick={() => router.push("/")}>
                Volver a la página principal
            </Boton>
        </div>
    )
}

export default Thanks