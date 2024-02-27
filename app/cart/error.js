"use client"

import Boton from "@/Components/Boton"
import { useEffect } from "react"

export default function Error({error, reset}) {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="container m-auto mt-6">
            <h1 className="text-2xl">Algo no salió bien</h1> 
            <hr className="my-6" />
            <Boton onClick={reset}>Intentar nuevamente</Boton>
        </div>
    )
}