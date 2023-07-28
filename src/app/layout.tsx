
import './globals.css'
import Provider from './cv/providers/Provider';

export const metadata = {
  title: 'MacOs Portfolio',
  description: 'This is a portfolio made with NextJS and ChakraUI',
  icons: {
    icon: '/favicon.ico',
  },
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
