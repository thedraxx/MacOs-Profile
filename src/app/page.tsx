'use client'
import React from 'react';
import { ChakraProvider, Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import TopBar from '@/components/TopBar/TopBar';
import ShowFolder from '@/components/ShowFolder/ShowFolder';

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
        marginLeft={2}
        marginRight={2}
        justifyContent={"center"}
        alignItems={"center"}
        height={"auto"}
        width={"auto"}
      >
        <Button
          bg="rgba(255, 255, 255, 0)"
          padding={10}
          color="white"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          _hover={{
            background: "rgba(255, 255, 255, 0.699)",
            color: "black",
            borderRadius: "10px"
          }}
          onClick={(e) => {
            window.open("https://www.linkedin.com/in/eduardo-oliveira-4b1b3b1b4/", "_blank")
          }}
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

        </Button>

      </Box>


      <Box
        marginLeft={2}
        marginRight={2}
        justifyContent={"center"}
        alignItems={"center"}
        height={"auto"}
        width={"auto"}

      >
        <Button
          bg="rgba(255, 255, 255, 0)"
          padding={10}
          color="white"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          _hover={{
            background: "rgba(255, 255, 255, 0.699)",
            color: "black",
            borderRadius: "10px"
          }}
          onClick={(e) => {
            window.open("https://www.linkedin.com/in/eduardo-oliveira-4b1b3b1b4/", "_blank")
          }}
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

        </Button>

      </Box>


      <Box
        marginLeft={2}
        marginRight={2}
        justifyContent={"center"}
        alignItems={"center"}
        height={"auto"}
        width={"auto"}

      >
        <Button
          bg="rgba(255, 255, 255, 0)"
          padding={10}
          color="white"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          _hover={{
            background: "rgba(255, 255, 255, 0.699)",
            color: "black",
            borderRadius: "10px"
          }}
          onClick={(e) => {
            window.open("https://www.linkedin.com/in/eduardo-oliveira-4b1b3b1b4/", "_blank")
          }}
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
        </Button>

      </Box>



      {/*  */}
      <Box
        marginLeft={2}
        marginRight={2}
        justifyContent={"center"}
        alignItems={"center"}
        height={"auto"}
        width={"auto"}

      >
        <Button
          bg="rgba(255, 255, 255, 0)"
          padding={10}
          color="white"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          _hover={{
            background: "rgba(255, 255, 255, 0.699)",
            color: "black",
            borderRadius: "10px"
          }}
          onClick={(e) => {
            window.open("https://www.linkedin.com/in/eduardo-oliveira-4b1b3b1b4/", "_blank")
          }}
        >
          <Image
            src="/mac-folder.png"
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
            Proyects
          </Text>
        </Button>

      </Box>
    </Box >
  )
}
