'use client'
import React, { useContext } from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiOutlineMail, } from 'react-icons/ai';
import { ChangeColorContext } from '@/components/context/ChangeColor';
import { FaMastodon } from 'react-icons/fa';

export const FinalPage = () => {
    const { colorActive } = useContext(ChangeColorContext)
    return (
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
                    marginBottom={5}
                >
                    Now you know a lot about me, let me know something about you at  </Text>
                <Box justifyContent="center" alignItems="center" display="flex" flexDirection="row">
                    <Link
                        href="https://www.linkedin.com/in/iscodev/"
                    >
                        <AiFillLinkedin
                            title='Linkedin'
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
                            title='Github'
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
                            title='email'
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
                <Text
                    fontSize="xl"
                    textAlign="center"
                    color="white"
                    justifyContent="center"
                    alignItems="center"
                    marginTop={5}
                >
                    See you soon! 👋
                </Text>
            </Box>
        </Box>
    )
}
