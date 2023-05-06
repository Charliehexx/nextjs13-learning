import Dashboard from './dashboard/page'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="border-l-4 border-indigo-500 p-4 rounded-md bg-indigo-100">
          <div className="flex items-center space-x-4">
            <div className=""></div>
            <div className="">
              <p className="text-sm font-medium text-indigo-600">
                This is some informational text that you can use to show some
                informational content
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>hello from main layout</div>
      </body>
    </html>
  )
}
