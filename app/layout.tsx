import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kasi',
  description: 'KASI is a comprehensive logistics solutions provider dedicated to assisting brands with their specific challenges related to the pickup and delivery of products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='lg:px-6 md:px-5 px-3 lg:mt-[8.3rem] md:mt-[7rem] mt-[6rem]'>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
