import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import ProductCategories from './components/ProductCatogeries'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Swift Harvest | Freshness, Goodness & Happiness at Your Fingertips.',
  description: 'Grocery you want found at your fingertips',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="flex relative overflow-hidden">
          <div className="w-1/4">
            <ProductCategories />
          </div>

          <div className="w-3/4">
            <Header />
            {children}
            {/* <SalesOverview/> */}
          </div>
        </div>

      </body>
    </html>
  )
}
