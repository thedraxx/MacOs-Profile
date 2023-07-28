'use client'
import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const KonamiCodePage = () => {
    const marioGIF = 'https://media.tenor.com/q0qduzwIc7cAAAAi/mario-8bit.gif'
    return (
        <>
            <Image
                top={0}
                left={0}
                flex={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"auto"}
                h={"auto"}
                zIndex={1000}
                src={marioGIF}
                alt="logo"
                transition={"all 0.5s ease"}
            />
        </>
    )
}

export default KonamiCodePage