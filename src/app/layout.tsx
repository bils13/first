import { Header } from '@/components/header/header'
import './globals.css'
import { Footer } from '@/components/footer/footer'
import { GymProvider } from '@/context/results'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GymProvider>
          <Header /> 
          {children}
          <Footer />
        </GymProvider>  
      </body>
    </html>
  )
}
