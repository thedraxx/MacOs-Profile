// app/providers.tsx
'use client'
import TopBar from '@/components/TopBar/TopBar'
import './globals.css'
import { ChakraProvider, Box } from '@chakra-ui/react';
import ShowFolder from '@/components/ShowFolder/ShowFolder';
import { GlobalThemeChakra } from '../theme/Theme';


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
      <ChakraProvider
        theme={GlobalThemeChakra}
      >

        <Box
          bg="gray.200"
          h="100vh"
          backgroundImage="/monterey.jpg"
          backgroundSize="cover"
        >
          <TopBar />
          <ShowFolder />
          {children}
        </Box>
      </ChakraProvider>
    </html>
  )
}
