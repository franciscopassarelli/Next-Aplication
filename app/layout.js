
import './globals.css'
import Header from './components/ui/Header'
import { CartProvider } from './components/context/CartContext'
import { AuthProvider } from './components/context/AuthContext'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
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
