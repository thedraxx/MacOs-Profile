'use client'
import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export const GoBack = () => {

    return (
        <>
            <Link
                href="/"
            >
                <Box

                    display={"flex"}
                    position={"absolute"}
                    top={0}
                    flex={"row"}
                    alignItems={"flex-end"}
                    justifyContent={"flex-end"}
                    right={0}
                    zIndex={100}
                    margin={5}
                >
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        padding={5}
                        marginLeft={1}
                    >
                        Go Back
                    </Button>
                </Box>
            </Link>
        </>
    )
}

