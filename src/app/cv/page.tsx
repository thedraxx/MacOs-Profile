'use client'
import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import ChangeColor from '@/components/changeColor/ChangeColor';

export default function CurriculumVitae() {

    const [Page, setPage] = useState(0)

    const handlePage = (page: number) => {
        if (page < 0) {
            return
        }
        if (page > 3) {
            return
        }
        setPage(page)
    }

    return (
        <Stack direction={"column"}>

            <Box
                width={"100%"}
                height={800}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}

            >
                <ChangeColor />
                {
                    Page === 0 ?
                        <Box
                            marginTop={200}
                            marginBottom={200}
                            justifyContent={"center"}
                            alignItems={"center"}
                            display={"flex"}
                            flexDirection={"row"}
                        >
                            <Box
                                w="50%"
                                justifyContent={"center"}
                                alignItems={"center"}
                                display={"flex"}
                                flexDirection={"column"}
                            >
                                <Text
                                    fontSize="xl"
                                    fontWeight="bold"
                                    textAlign="center"
                                    color="black"
                                    marginTop="20px"
                                >
                                    I'm Francisco Cerrano, a frontend developer from Rosario, Argentina.
                                </Text>
                                <Text
                                    fontSize="md"
                                    textAlign="center"
                                    color="black"
                                    marginTop="20px"
                                    marginLeft="20px"
                                    marginRight="20px"
                                >
                                    I usually work with the React stack (Next.js for example), but i'm open to technologies like GraphQL, Angular or Vue. I'm 23 years old and I have a Electromechanical Technician degree from Escuela Industrial Nrta Sra de la Guardia and Software Developer Degree from Escuela Superior de Comercio Justo Jose de Urquiza, I never stopped learning.
                                </Text>
                            </Box>
                            <Image
                                src="/autor.jpg"
                                alt="Picture of the author"
                                width={400}
                                height={400}
                                style={{
                                    borderRadius: "10%",
                                    border: "5px solid black ",
                                    margin: "auto",
                                    marginTop: "20px",
                                    marginLeft: "20px",
                                    marginRight: "20px",
                                }}
                            />

                        </Box>

                        :

                        Page === 1 ?

                            <Box
                                marginTop={200}
                                marginBottom={200}
                                justifyContent={"center"}
                                alignItems={"center"}
                                display={"flex"}
                                flexDirection={"row"}
                                backgroundColor={"#E91E63"}
                                paddingTop={200}
                                paddingBottom={200}
                            >
                                <Box
                                    w="50%"
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
                                        I started working on frontend in 2020, with jQuery and vanilla Javascript, I had started my university studies during those times in the meanwhile doing landings or small applications, also doing apps in AS3 (sorry, you have to know that),
                                        you can see the whole timeline in my LinkedIN
                                    </Text>
                                </Box>


                            </Box>

                            :

                            Page === 2 ?
                                <Box>

                                </Box>
                                :
                                <Box>

                                </Box>

                }

            </Box>
            <ButtonGroup
                variant="outline"
                spacing="6"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                bottom={0}
                left={0}
                right={0}
                zIndex={100}
            >
                <Button
                    colorScheme="teal"
                    variant="outline"
                    backgroundColor={"#E91E63"}
                    color={"white"}
                    padding={"25px"}
                    onClick={() => {
                        handlePage(Page - 1)
                    }}
                >
                    {`<`}
                </Button>
                <Button
                    colorScheme="teal"
                    variant="outline"
                    backgroundColor={"#E91E63"}
                    onClick={() => {
                        handlePage(Page + 1)
                    }}
                    color={"white"}
                    padding={"25px"}
                >
                    {`>`}
                </Button>
            </ButtonGroup>
        </Stack >
    )
}
