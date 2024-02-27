"use client"

import { useRouter } from "next/navigation"

const GoBack = ({...args}) => {
    const router = useRouter ()
    
    return(
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => router.back()} {...args}>
            Volver
        </button>
    )
}

export default GoBack
