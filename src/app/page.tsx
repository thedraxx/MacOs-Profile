'use client'
import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <Box
      w="100%"
      height={"auto"}
      p={5}
      color="white"
      justifyContent={"row"}
      alignItems={"center"}
      top="0"
      left="0"
      zIndex="100"
      display="flex"
      flex={"row"}
    >


      <Box
        marginLeft={5}
        marginRight={5}
        justifyContent={"center"}
        alignItems={"center"}
        height={"auto"}
        width={"auto"}
      >
        <Image
          src="/firefox.png"
          alt="Picture of the author"
          width={55}
          height={55}
        />

        <Text
          marginTop={2}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={12}
          textAlign={"center"}
        >
          Check CV
        </Text>
      </Box>


      <Box
        marginLeft={5}
        marginRight={5}
        justifyContent={"center"}
        alignItems={"center"}
        height={"auto"}
        width={"auto"}

      >
        <Image
          src="/twitter.png"
          alt="Picture of the author"
          width={55}
          height={55}
        />

        <Text
          marginTop={2}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={12}
          textAlign={"center"}
        >
          Twitter
        </Text>
      </Box>


      <Box
        marginLeft={5}
        marginRight={5}
        justifyContent={"center"}
        alignItems={"center"}
        height={"auto"}
        width={"auto"}

      >
        <Image
          src="/icontxt.png"
          alt="Picture of the author"
          width={55}
          height={55}
        />

        <Text
          marginTop={2}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={12}
          textAlign={"center"}
        >
          About this
        </Text>
      </Box>
    </Box>
  )
}
