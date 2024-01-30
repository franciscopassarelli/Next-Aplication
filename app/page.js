
import Counter from "./components/ui/Counter";
import Image from "next/image";
import Footer from "./components/ui/Footer";

export const metadata = {
  title: "coderhouse app",
  description: "App de muestra en Next JS",
  keywords: ['coderhouse', 'Next JS', 'Vercel', 'SSR'],
  openGraph: {
    title: ' Next.js',
    description: 'The React Framework for the web',
    type:'article',
    publisehdTime: '2023-01-01T00:00:00.000Z',
    authors:['Coderhouse'],
  },
};

export default function Home() {
  return (
    <div>
      
      <main className="container mx-auto">
        <h1 className="text-4xl text-blue-600 font-bold my-4">Next JS</h1>
        <hr />
        <p className="text-base mt-4">Bienvenidos a coderhouse</p>
        <Counter />
      
        <Image
          src={"https://www.atptour.com/-/media/images/news/2024/01/19/09/44/abierto-australia-2024-djokovic-viernes.jpg"}
          alt="Djokovic"
          width={300}
          height={300}
        />
         <Image
          src={"https://www.atptour.com/-/media/images/news/2024/01/19/09/44/abierto-australia-2024-djokovic-viernes.jpg"}
          alt="Djokovic"
          width={500}
          height={500}
        />
      </main>
      <Footer />
    </div>
  );
}
