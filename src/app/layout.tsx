
'use client'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalThemeChakra } from '../theme/Theme';
import { ShowFolderProvider } from '@/components/context/ShowFolder';
import { ChangeColorProvider } from '@/components/context/ChangeColor';


export const metadata = {
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <ShowFolderProvider>
          <ChangeColorProvider>
            <ChakraProvider theme={GlobalThemeChakra}>
              {children}
            </ChakraProvider>
          </ChangeColorProvider>
        </ShowFolderProvider>
      </body>
    </html>
  )
}
