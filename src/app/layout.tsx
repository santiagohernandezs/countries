import { cx } from '@/utils/cx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { meta } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...meta
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const styles = {
    body: cx('min-h-screen bg-gray-100', 'flex flex-col items-center', inter.className),
    h1: cx('text-4xl font-bold text-gray-800'),
    span: cx('text-gray-600 text-lg'),
    header: cx('flex flex-col items-center py-8')
  }

  return (
    <html lang='en'>
      <body className={styles.body}>
        <header className={styles.header}>
          <h1 className={styles.h1}>Countries App</h1>
          <span className={styles.span}>La app que te ayuda a conseguir información acerca de los paises</span>
        </header>
        {children}
      </body>
    </html>
  )
}
