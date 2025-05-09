'use client'
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Page3 = () => {
    return (
        <Box
            marginTop={200}
            marginBottom={200}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"row"}
            backgroundColor={"#ffffff"}
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
                    textColor={"black"}
                >
                    I am currently working at PricewaterhouseCoopers (PwC) Argentina and occasionally take on freelance projects. I'm passionate about continuous learning and enjoy expanding my skills every day.                </Text>
            </Box>
        </Box>
    )
}
