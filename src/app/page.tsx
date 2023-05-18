'use client'
import React, { useContext } from 'react';
import { Box, Text, Button, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

import ShowFolder from '@/components/ShowFolder/ShowFolder';
import Link from 'next/link';
import TopBar from '@/components/TopBar/TopBar';
import { Proyects } from '@/components/database/Proyects';
import { ShowFolderContext } from '@/components/context/ShowFolder';

export default function Home() {

  const { toggleShowFolder, isOpen } = useContext(ShowFolderContext);

  return (
    <Box
      bg="gray.200"
      h="100vh"
      backgroundImage="/monterey.jpg"
      backgroundSize="cover"
    >
      <TopBar />
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
        {
          isOpen && (
            <ShowFolder />
          )
        }

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(5, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap={2}
          marginTop={5}
          marginBottom={5}
        >
          <Link
            href="/cv"
          >
            <GridItem
              rowSpan={2}
              colSpan={1}
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
                  My CV
                </Text>
              </Button>
            </GridItem>
          </Link>
          <GridItem
            rowSpan={2}
            colSpan={1}
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
              onClick={() => {
                window.open("https://frank.dev.ar/", "_blank")
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
                Portfolio
              </Text>
            </Button>

          </GridItem>



          <GridItem
            rowSpan={2}
            colSpan={1}
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
              onClick={() => {
                window.open("https://twitter.com/ThedraxxWorld", "_blank")
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
          </GridItem>


          <GridItem
            rowSpan={2}
            colSpan={1}
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
              onClick={() => {
                toggleShowFolder("TextEdit", "This is a WIP to share all the links I need, this was made in NextJS, ChakraUI and Typescript.");
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
          </GridItem>

          {/*  */}
          <GridItem
            rowSpan={2}
            colSpan={1}
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
              onClick={() => {
                toggleShowFolder("TextEdit", "This is a WIP to share all the links I need, this was made in NextJS, ChakraUI and Typescript.", Proyects);
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
          </GridItem>
        </Grid>
      </Box >
    </Box>
  )
}
