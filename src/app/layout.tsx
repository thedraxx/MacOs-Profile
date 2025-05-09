
import './globals.css'
import Provider from './cv/providers/Provider';
import "./favicon.ico";
export const metadata = {
  title: 'macOS-Inspired Portfolio',
  description: 'A sleek and modern portfolio built with Next.js and Chakra UI, inspired by the macOS aesthetic.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
