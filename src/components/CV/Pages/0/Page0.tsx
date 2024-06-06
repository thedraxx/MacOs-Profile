'use client'
import React, { useContext, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { ChangeColorContext } from '@/components/context/ChangeColor';

export const Page0 = () => {
    const { colorActive } = useContext(ChangeColorContext)
    return (
        <Box
            marginTop={200}
            marginBottom={200}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
            }}

        >
            <Box
                order={[1, 1, 1, 2]} // Define el orden en dispositivos móviles
                w={{
                    base: "100%",
                    sm: "100%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                }}
                justifyContent="center"
                alignItems="start"
                display="flex"
                flexDirection="column"
            >
                <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    textAlign="center"
                    color="black"
                    marginTop="5px"
                    marginLeft="20px"
                    marginRight="20px"
                >
                    Francisco Cerrano
                </Text>
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    textAlign="center"
                    color="black"
                    marginTop="5px"
                    marginLeft="20px"
                    marginRight="20px"
                >
                    FullStack Developer.
                </Text>
                <Text
                    fontSize="md"
                    textAlign="start"
                    color="black"
                    marginTop="20px"
                    marginLeft="20px"
                    marginRight="20px"
                >
                    I have experience programming with the React library for frontend development, React Native for mobile applications, and Next.js a framework for server-side rendered and static web applications. Additionally, I have developed using technologies such as C# with Microsoft .NET and Python.
                    I proudly hold both an Electromechanical Technician degree from Escuela Industrial Nrta Sra de la Guardia and a Software Developer Degree from Escuela Superior de Comercio Justo Jose de Urquiza.
                </Text>
            </Box>
            <Image
                src="/autor.jpg"
                alt="Picture of the author"
                width={{
                    base: "70%",
                    sm: "40%",
                    md: "30%",
                    lg: "30%",
                    xl: "20%",
                }}
                border="10px"
                borderRadius="25%"
                borderColor={colorActive}
                borderStyle="solid"
                style={{
                    margin: "auto",
                    marginTop: "20px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    position: "relative",
                }}
            />

        </Box>
    )
}
