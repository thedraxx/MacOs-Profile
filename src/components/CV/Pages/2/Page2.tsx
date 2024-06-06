'use client'
import React, { useContext } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { ChangeColorContext } from '@/components/context/ChangeColor';

export const Page2 = () => {
    const { colorActive } = useContext(ChangeColorContext)
    return (
        <Box
            marginTop={200}
            marginBottom={200}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"row"}
            backgroundColor={colorActive}
            paddingTop={200}
            paddingBottom={200}
        >
            <Box
                w={{
                    base: "100%",
                    sm: "100%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                }}
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
            >

                <Text
                    fontSize="xl"
                    textAlign="center"
                    color="black"
                    marginTop="20px"
                    marginLeft="20px"
                    marginRight="20px"
                    textColor={"white"}
                >
                    I started working on frontend in 2020, with vanilla Javascript, I had started my university studies during those times in the meanwhile doing landings or small applications,
                    you can see the whole timeline in my {
                        <Link
                            fontSize={"xl"}
                            color={"white"}
                            href="https://www.linkedin.com/in/iscodev/"
                        >
                            LinkedIn
                        </Link>
                    }
                </Text>
            </Box>
        </Box>
    )
}
