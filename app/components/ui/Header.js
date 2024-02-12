import Link from 'next/link'
import React from 'react'


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
    {
        label:"Productos",
        href: "/productos/todos"
    },
    {
        label:"Posts",
        href: "/posts"
    }
]

const Header = () => {
  return (
    <header className='w-full bg-gray-600'>
        <div className='container m-auto py-6 flex justify-between items-center'>
            <Link href={'/'}>
            <p className='text4xl text-bold text-slate-100'>Coderhouse</p>
            </Link>


            <nav className='flex justify-between gap-2'>
{
    links.map(link=> {
        return <Link
        key={link.label}
        href={link.href}
        className={`text-base text-slate-100 p-3`}
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