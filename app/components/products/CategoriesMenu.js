"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {label:"todos", href: "/productos/todos",},
    {label:"raquetas", href: "/productos/raquetas",},
    {label:"bolsos", href: "/productos/bolsos",},
    {label:"zapatillas", href: "/productos/zapatillas",},
]

const CategoriesMenu = () => {
    const pathname = usePathname()

    return (
        <aside className="flex flex-col gap-3">
            {links.map(link =>(
                <Link
                key={link.label}
                href={link.href}
                className= {`${pathname === link.href ? "font-semibold border-b" :''} py-2`}>
            {link.label}
                </Link>
            ))}
        </aside>
    )
}

export default CategoriesMenu