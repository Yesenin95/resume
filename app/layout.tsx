import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './dashbord/header/page'
import Footer from './dashbord/footer/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <ChakraProvider>
               <NavBar />
               {children}
               <Footer />
            </ChakraProvider>
         </body>
      </html>
   )
}
