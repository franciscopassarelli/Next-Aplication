'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "todos", href: "/productos/todos" },
  { label: "raquetas", href: "/productos/raquetas" },
  { label: "bolsos", href: "/productos/bolsos" },
  { label: "zapatillas", href: "/productos/zapatillas" },
];

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-3">
      {links.map((link) => (
        <Link key={link.label} href={link.href} passHref>
          <div
            className={`cursor-pointer text-gray-700 hover:text-blue-500 ${
              pathname === link.href ? "font-semibold border-b border-blue-500" : ""
            } py-2 transition-all duration-300`}
          >
            {link.label}
          </div>
        </Link>
      ))}
    </aside>
    
  );
};

export default CategoriesMenu;
