import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const links =[
    {
        label:"Inicio",
        href: "/"
    },
    {
        label:"Nosotros",
        href:"/nosotros"

    },
    {
        label:"Contacto",
        href:"/Contacto"
    },
]

const Header = () => {
  return (
    <header className='w-full bg-gray-600'>
        <div className='container m-auto py-6 flex justify-between items-center'>

<Link href={"/"}>
<Image
src={"https://www.atptour.com/-/media/images/news/2024/01/19/09/44/abierto-australia-2024-djokovic-viernes.jpg"}
alt="raqueta de tenis"
width={200}
height={50}
/>
</Link>
            <nav className='flex justify-between gap-2'>
{
    links.map(link=> {
        return <Link
        key={link.label}
        href={link.href}
        className={`text-base text-slate 100 p-3`}
        >
             {link.label}
        </Link>
    })
}
            </nav>
        </div>
    </header>
    )
}

export default Header