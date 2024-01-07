import type { Metadata } from 'next'

// fonts
import { Inter, Archivo } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter", })
const archivo = Archivo({ subsets: ['latin'], variable: "--font-archivo", })

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
      <body className={cn(
        inter.variable, archivo.variable
      )}>{children}</body>
    </html>
  )
}
