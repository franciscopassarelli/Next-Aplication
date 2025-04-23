"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "todos", href: "/productos/todos" },
  { label: "raquetas", href: "/productos/raquetas" },
  { label: "bolsos", href: "/productos/bolsos" },
  { label: "zapatillas", href: "/productos/zapatillas" },
  { label: "indumentaria", href: "/productos/indumentaria" }
];

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-2">
      <h2 className="text-lg font-bold text-gray-200 mb-4">Seleccioná por categorías</h2>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link key={link.label} href={link.href} passHref>
            <div
              className={`cursor-pointer py-2 px-3 rounded-md transition-colors duration-300 ${
                isActive
                  ? "bg-gray-800 text-white font-semibold border-l-4 border-blue-500"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {link.label}
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default CategoriesMenu;
