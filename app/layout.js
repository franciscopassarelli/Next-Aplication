
import './globals.css'
import Header from './components/ui/Header'
import { CartProvider } from './components/context/CartContext'
import { AuthProvider } from './components/context/AuthContext'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          {/* Agregar Font Awesome aquí */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zyI2P7NQ6E4xU8vF9D26pqpYekAdtPudl6o7gKUp"
            crossOrigin="anonymous"
          />
        </head>
      
        <body>
          <AuthProvider>
          <CartProvider>
        <Header/>
        {children}
        </CartProvider>
        </AuthProvider>
        </body>
      
    </html>
  )
}
