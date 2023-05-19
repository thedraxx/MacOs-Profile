"use client"
import { ChangeColorProvider } from '@/components/context/ChangeColor'
import { ShowFolderProvider } from '@/components/context/ShowFolder'
import { GlobalThemeChakra } from '@/theme/Theme'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const Provider = ({ children }: any) => {
    return (
        <ShowFolderProvider>
            <ChangeColorProvider>
                <ChakraProvider theme={GlobalThemeChakra}>
                    {children}
                </ChakraProvider>
            </ChangeColorProvider>
        </ShowFolderProvider>

    )
}

export default Provider