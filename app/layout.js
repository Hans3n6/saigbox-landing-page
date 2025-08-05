import { Inter, DM_Sans } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'SAIGBOX - The Future of Wise Email Management',
  description: 'Transform your email experience with AI-powered intelligent email management. Smart prioritization, automated responses, and enhanced security.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-saig-dark-900 antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full bg-saig-dark-900">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}