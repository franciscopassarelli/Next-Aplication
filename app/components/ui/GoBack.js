"use client"

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // o usa cualquier otro ícono

const GoBack = ({ children = "Volver", ...args }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
      {...args}
    >
      <ArrowLeft className="w-4 h-4" />
      {children}
    </button>
  );
};

export default GoBack;
