'use client'
import React, { useContext } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { SiFirebase, SiTypescript } from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { ChangeColorContext } from '@/components/context/ChangeColor';

export const Page1 = () => {
    const { colorActive } = useContext(ChangeColorContext)
    return (
        <Box
            marginTop={200}
            marginBottom={200}
            justifyContent="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
            backgroundColor={colorActive}
            paddingTop={200}
            paddingBottom={200}
            width="100%"
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
                Currently I'm working as a FullStack Developer with these technologies:
            </Text>
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

                <Box justifyContent="center" alignItems="center" display="flex" flexDirection="row">
                    <Link
                        href="https://www.typescriptlang.org/"
                    >
                        <SiTypescript
                            title='Typescript'
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
                        href="https://es.react.dev/"
                    >

                        <FaReact
                            title='React.js / React Native'
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
                        href="https://www.postgresql.org/"
                    >

                        <SiPostgresql
                            title='PostgreSQL'
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
                        <SiFirebase
                            title='Firebase'
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
                        <FaNodeJs
                            title='Node.js'
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
            </Box>
        </Box>
    )
}
