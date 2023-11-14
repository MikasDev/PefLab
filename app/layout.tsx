import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'

const inter = Inter({ subsets: ['latin'] })

 
export const metadata: Metadata = {
  title: 'Treinamento Peflab',
  description: '...',
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <div className=''>
        <body className={inter.className}>{children}</body>
      </div>
      
    </html>
  )
}
