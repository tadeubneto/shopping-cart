import { ThemeProvider } from '@/contexts/ThemeContext'
import { CartProvider } from '@/contexts/CartContext'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
      <Header />
        <ThemeProvider>         
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider> 
        <Footer />
      </body>
    </html>
  )
}