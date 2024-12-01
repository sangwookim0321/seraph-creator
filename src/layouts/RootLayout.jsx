import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'

export function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      {children}
      <Footer />
    </div>
  )
} 