'use client'
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function CurriculumVitae() {

    return (
        <Box
            width={"100%"}
            height={"100%"}

            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            flex={"1"}
        >

            <Box
                w="50%"
                paddingTop={300}
                paddingBottom={400}
                justifyContent={"row"}
            >

                <Image
                    src="/autor.jpg"
                    alt="Picture of the author"
                    width={120}
                    height={0}
                    style={{
                        borderRadius: "50%",
                        border: "5px solid black ",
                        margin: "auto",
                        marginTop: "20px",

                    }}
                />

                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign="center"
                    color="black"
                    marginTop="20px"

                >
                    I'm Gonzalo Pozzo, a frontend developer from Buenos Aires, Argentina.
                </Text>
                <Text
                    fontSize="md"

                    textAlign="center"
                    color="black"
                    marginTop="20px"

                >
                    I usually work with the React / Redux stack, but i'm open to technologies like GraphQL, Elm or Vue. I'm 31 years old and I have a Multimedia Design degree from Escuela Davinci, I never stopped learning.
                </Text>

            </Box>


            {/*  */}
            <Box
                w="100%"
                paddingTop={300}
                paddingBottom={400}
                justifyContent={"row"}
                backgroundColor={"#42B983"}
            >

                <Box
                    w="100%"
                    paddingLeft={400}
                    paddingRight={400}
                    justifyContent={"row"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    flex={"1"}

                >
                    <Text
                        fontSize="xl"
                        textAlign="center"
                        color="white"
                        marginTop="20px"
                    >
                        We can spend a lot of time listing every work I made, or I can give you my GitHub and some of the main projects I made.

                    </Text>


                    <Text
                        fontSize="xl"
                        textAlign="center"
                        color="white"
                        marginTop="20px"
                    >
                        Like Trency and it's API, used to locate trains in realtime for almost every station in Buenos Aires.
                    </Text>

                    <Text
                        fontSize="xl"
                        textAlign="center"
                        color="white"
                        marginTop="20px"
                    >
                        Or Mapgen, a free service for NGOs and community services, used by fire departements, police, etc. Used also to promote 2 laws (I can talk more about this in our call tomorrow)                    </Text>
                </Box>


            </Box>





            {/*  */}
            <Box
                w="100%"
                paddingTop={300}
                paddingBottom={400}
                justifyContent={"row"}

            >

                <Box
                    w="100%"
                    paddingLeft={400}
                    paddingRight={400}
                    justifyContent={"row"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    flex={"1"}

                >
                    <Text
                        fontSize="xl"
                        textAlign="center"
                        color="black"
                        marginTop="20px"
                    >
                        We can spend a lot of time listing every work I made, or I can give you my GitHub and some of the main projects I made.

                    </Text>


                    <Text
                        fontSize="xl"
                        textAlign="center"
                        color="white"
                        marginTop="20px"
                    >
                        Like Trency and it's API, used to locate trains in realtime for almost every station in Buenos Aires.
                    </Text>

                    <Text
                        fontSize="xl"
                        textAlign="center"
                        color="white"
                        marginTop="20px"
                    >
                        Or Mapgen, a free service for NGOs and community services, used by fire departements, police, etc. Used also to promote 2 laws (I can talk more about this in our call tomorrow)                    </Text>
                </Box>


            </Box>
        </Box>
    )
}
