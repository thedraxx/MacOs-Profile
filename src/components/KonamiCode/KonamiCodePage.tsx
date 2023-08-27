'use client'
import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    konamiCode: boolean
}

const KonamiCodePage = ({ konamiCode }: Props) => {
    const marioGIF = 'https://media.tenor.com/q0qduzwIc7cAAAAi/mario-8bit.gif'
    return (
        <Box
            position={"absolute"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            h={"100%"}
            zIndex={1000}
            bg={"rgba(0,0,0,0.8)"}
            transition={"all 0.5s ease"}
            pointerEvents={konamiCode ? "none" : "all"}
        >
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
        </Box>
    )
}

export default KonamiCodePage