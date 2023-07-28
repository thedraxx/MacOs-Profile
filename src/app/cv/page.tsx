'use client'
import React, { useContext, useState } from 'react';
import { Box, Button, ButtonGroup, Stack, Text, Link } from '@chakra-ui/react';
import ChangeColor from '@/components/changeColor/ChangeColor';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { Image } from '@chakra-ui/react'
import { ChangeColorContext } from '@/components/context/ChangeColor';
import GoBackCv from '@/components/GoBackCv/GoBackCv';


export default function CurriculumVitae() {

    const [Page, setPage] = useState(0)
    const { colorActive } = useContext(ChangeColorContext)


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
                <GoBackCv />
                {
                    Page === 0 ?
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
                                alignItems="center"
                                display="flex"
                                flexDirection="column"
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

                        :

                        Page === 1 ?

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
                                        I started working on frontend in 2020, with jQuery and vanilla Javascript, I had started my university studies during those times in the meanwhile doing landings or small applications,
                                        you can see the whole timeline in my {
                                            <Link
                                                href="https://www.linkedin.com/in/iscodev/"
                                            >
                                                LinkedIn
                                            </Link>
                                        }
                                    </Text>
                                </Box>
                            </Box>

                            :

                            Page === 2 ?
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
                                            These days I work on personal projects, learn new technologies, and occasionally take on freelance projects. Yes, I love learning every day.

                                        </Text>
                                    </Box>


                                </Box>
                                :

                                <Box
                                    marginTop={200}
                                    marginBottom={200}
                                    justifyContent="center"
                                    alignItems="center"
                                    display="flex"
                                    flexDirection="row"
                                    backgroundColor={colorActive}
                                    paddingTop={200}
                                    paddingBottom={200}
                                    width="100%"
                                >
                                    <Box
                                        w={{
                                            base: "100%",
                                            sm: "100%",
                                            md: "50%",
                                            lg: "50%",
                                            xl: "50%",
                                        }}
                                        justifyContent="center"
                                        alignItems="center"
                                        display="flex"
                                        flexDirection="column"
                                    >
                                        <Text
                                            fontSize="xl"
                                            textAlign="center"
                                            color="black"
                                            justifyContent="center"
                                            alignItems="center"
                                            marginLeft="20px"
                                            marginRight="20px"
                                            textColor="white"
                                        >
                                            Now you know a lot about me, let me know something about you at
                                            <Box justifyContent="center" alignItems="center" display="flex" flexDirection="row">
                                                <Link
                                                    href="https://www.linkedin.com/in/iscodev/"
                                                >
                                                    <AiFillLinkedin

                                                        style={{
                                                            marginLeft: "10px",
                                                            marginRight: "10px",
                                                            marginTop: "10px",
                                                            color: "white",
                                                            fontSize: "50px",
                                                            cursor: "pointer"
                                                        }}
                                                    />

                                                </Link>

                                                <Link
                                                    href="https://github.com/thedraxx"
                                                >

                                                    <AiFillGithub
                                                        style={{
                                                            marginLeft: "10px",
                                                            marginRight: "10px",
                                                            marginTop: "10px",
                                                            color: "white",
                                                            fontSize: "50px",
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                </Link>

                                                <Link
                                                    href="https://twitter.com/ThedraxxWorld"
                                                >

                                                    <AiFillTwitterCircle
                                                        style={{
                                                            marginLeft: "10px",
                                                            marginRight: "10px",
                                                            marginTop: "10px",
                                                            color: "white",
                                                            fontSize: "50px",
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                </Link>

                                                <Link

                                                    href={"mailto:frankdevarg@gmail.com?subject=Subject&body=Body%20goes%20here"}
                                                >
                                                    <AiOutlineMail
                                                        style={{
                                                            marginLeft: "10px",
                                                            marginRight: "10px",
                                                            marginTop: "10px",
                                                            color: "white",
                                                            fontSize: "50px",
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                </Link>
                                            </Box>
                                            See you tomorrow soon! 👋
                                        </Text>
                                    </Box>
                                </Box>
                }

            </Box>
            <ButtonGroup
                variant="outline"
                spacing="6"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={{
                    base: "fixed",
                    md: "relative",
                    lg: "absolute",
                    xl: "absolute",

                }}
                bottom={0}
                left={0}
                right={0}
                zIndex={100}
            >
                <Button
                    colorScheme="gray"
                    variant="outline"
                    backgroundColor={colorActive}
                    color={"white"}
                    padding={"25px"}
                    onClick={() => {
                        handlePage(Page - 1)
                    }}
                    isActive={Page === 0}
                >
                    {`<`}
                </Button>
                <Button
                    colorScheme="gray"
                    variant="outline"
                    backgroundColor={colorActive}
                    onClick={() => {
                        handlePage(Page + 1)
                    }}
                    color={"white"}
                    padding={"25px"}
                    isActive={Page === 3}
                >
                    {`>`}
                </Button>
            </ButtonGroup>
        </Stack >
    )
}
